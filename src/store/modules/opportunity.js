
import { db } from "../../db";
import { doc, Timestamp, addDoc, collection, query, where, getDocs, getDoc, updateDoc } from "firebase/firestore";

const extractDataFromOpportunity = async (opportunity, id) => {
  if (opportunity.fromExchange) {
    const fromExchangeDoc = await getDoc(opportunity.fromExchange);
    opportunity.fromExchange = {...fromExchangeDoc.data(), id: fromExchangeDoc.id};
  }

  const toExchangeDoc = await getDoc(opportunity.toExchange);
  opportunity.toExchange = {...toExchangeDoc.data(), id: toExchangeDoc.id};

  const fromUserDoc = await getDoc(opportunity.fromUser);
  opportunity.fromUser = {...fromUserDoc.data(), id: fromUserDoc.id};
  opportunity.id = id;

  return opportunity;
}

export default {
  namespaced: true,
  state() {
    return {
      opportunities: [],
      sendOpportunities: []
    }
  },
  actions: {
    async acceptOpportunity({commit}, {opportunity, onSuccess}) {
      const oppRef = doc(db, "opportunities", opportunity.id);
      await updateDoc(oppRef, {status: "accepted"});
      commit("changeOpportunityStatus", {id: opportunity.id, status: "accepted"})
      onSuccess();
    },
    async declineOpportunity({commit}, {opportunity, onSuccess}) {
      const oppRef = doc(db, "opportunities", opportunity.id);
      await updateDoc(oppRef, {status: "declined"});
      commit("changeOpportunityStatus", {id: opportunity.id, status: "declined"})
      onSuccess();
    },
    async getOpportunities({rootState, dispatch, commit}) {
      const { id } = rootState.user.data;
      if (!id) {
        dispatch("toast/error", "User is not logged in!", {root: true});
      }

      const opportunityQuery = query(
        collection(db, "opportunities"), where("toUser", "==", doc(db, "users", id))
      );

      const opportunitiesSnap = await getDocs(opportunityQuery);
      const opportunities = await Promise.all(opportunitiesSnap.docs.map(doc =>
        extractDataFromOpportunity(doc.data(), doc.id)
      ))

      commit("setOpportunities", {resource: "opportunities", opportunities})
    },
    async getSendOpportunities({rootState, dispatch, commit}) {
      const { id } = rootState.user.data;
      if (!id) {
        dispatch("toast/error", "User is not logged in!", {root: true});
      }

      const opportunityQuery = query(
        collection(db, "opportunities"), where("fromUser", "==", doc(db, "users", id))
      );

      const opportunitiesSnap = await getDocs(opportunityQuery);
      const opportunities = await Promise.all(opportunitiesSnap.docs.map(doc =>
        extractDataFromOpportunity(doc.data(), doc.id)
      ))

      commit("setOpportunities", {resource: "sendOpportunities", opportunities})
    },
    async createOpportunity({dispatch}, {data, onSuccess}) {
      const opportunity = {
        title: data.title,
        createdAt: Timestamp.fromDate(new Date()),
        toUser: doc(db, "users", data.toUserId),
        fromUser: doc(db, "users", data.fromUserId),
        toExchange: doc(db, "exchanges", data.toExchangeId),
        status: "pending"
      }

      if (data.fromExchangeId) {
        opportunity.fromExchange = doc(db, "exchanges", data.fromExchangeId)
      } else {
        opportunity.price = data.price
      }

      await addDoc(collection(db, "opportunities"), opportunity);
      dispatch("toast/success", "Opportunity was send!", {root: true});

      onSuccess();
    }
  },
  mutations: {
    setOpportunities(state, {resource, opportunities}) {
      state[resource] = opportunities;
    },
    changeOpportunityStatus(state, {id, status}) {
      const index = state.opportunities.findIndex(o => o.id === id);
      state.opportunities[index].status = status;
    }
  }
}

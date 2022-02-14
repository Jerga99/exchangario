
import { db } from "../../db";
import { doc, Timestamp, addDoc, collection, query, where, getDocs } from "firebase/firestore";

export default {
  namespaced: true,
  actions: {
    async getOpportunities({rootState, dispatch}) {
      const { id } = rootState.user.data;
      if (!id) {
        dispatch("toast/error", "User is not logged in!", {root: true});
      }

      const opportunityQuery = query(
        collection(db, "opportunities"), where("toUser", "==", doc(db, "users", id))
      );

      const opportunitiesSnap = await getDocs(opportunityQuery);
      const opportunities = opportunitiesSnap.docs.map(doc => ({
        ...doc.data(), id: doc.id
      }))

      console.log( opportunities);
    },
    async createOpportunity({dispatch}, {data, onSuccess}) {
      const opportunity = {
        title: data.title,
        createdAt: Timestamp.fromDate(new Date()),
        toUser: doc(db, "users", data.toUserId),
        fromUser: doc(db, "users", data.fromUserId),
        toExchange: doc(db, "exchanges", data.toExchangeId)
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
  }
}

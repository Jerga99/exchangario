

import { db } from "../../db";
import {
  getDocs, getDoc, doc, addDoc,
  query, where, limit,
  collectionGroup, collection,
  Timestamp
} from "firebase/firestore";
import slugify from "slugify";

export default {
  namespaced: true,
  state() {
    return {
      items: [],
      item: {},
      pagination: {
        itemCount: 2,
        lastItem: null,
        paginationHistory: [],
        isFetchingData: false,
      }
    }
  },
  actions: {
    // context -> state, commit
    async getExchangeBySlug({commit}, slug) {
      commit("setExchange", {});
      const docQuery = query(
        collection(db, "exchanges"),
        where("slug", "==", slug)
      );

      const querySnap = await getDocs(docQuery);
      const exchange = querySnap.docs[0].data();
      exchange.id = querySnap.docs[0].id;

      const userSnap = await getDoc(exchange.user);
      exchange.user = userSnap.data();
      exchange.user.id = userSnap.id;
      commit("setExchange", exchange);
    },
    async getExchanges({commit, state}) {
      const exchangeQuery = query(
        collectionGroup(db, "exchanges"),
        limit(state.pagination.itemCount)
      );
      const snapshot = await getDocs(exchangeQuery);
      const exchanges = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));

      commit("setExchanges", exchanges);
      commit("setLastItem", snapshot.docs[snapshot.docs.length - 1]);
      commit("setPaginationHistory", snapshot.docs[0]);
    },
    async createExchange({rootState, dispatch}, { data, onSuccess }) {
      const userRef = doc(db, "users", rootState.user.data.id);
      data.user = userRef;
      data.slug = slugify(`${data.title} ${Date.now()}`, {
        lower: true,
        strict: true
      })
      data.createdAt = Timestamp.fromDate(new Date());

      await addDoc(collection(db, "exchanges"), data);

      dispatch("toast/success", "Exchange was created succesfuly!", {root: true});
      onSuccess();
    }
  },
  mutations: {
    setExchanges(state, exchanges) {
      state.items = exchanges;
    },
    setExchange(state, exchange) {
      state.item = exchange;
    },
    setLastItem(state, item) {
      state.pagination.lastItem = item;
    },
    setPaginationHistory(state, item) {
      state.pagination.paginationHistory.push(item);
    }
  }
}

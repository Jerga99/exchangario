

import { db } from "../../db";
import { getDocs, query, collectionGroup, doc } from "firebase/firestore";

export default {
  namespaced: true,
  state() {
    return {
      items: []
    }
  },
  actions: {
    // context -> state, commit
    async getExchanges({commit}) {
      const exchangeQuery = query(collectionGroup(db, "exchanges"));
      const snapshot = await getDocs(exchangeQuery);
      const exchanges = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));

      commit("setExchanges", exchanges);
    },
    async createExchange({rootState}, { data, onSuccess }) {
      const userRef = doc(db, "users", rootState.user.data.id);
      data.user = userRef;

      onSuccess();
    }
  },
  mutations: {
    setExchanges(state, exchanges) {
      state.items = exchanges;
    }
  }
}

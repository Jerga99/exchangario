

import { db } from "../../db";
import { getDocs, query, collectionGroup } from "firebase/firestore";

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
    async createExchange(_, { data, onSuccess }) {
      console.log(data);
      onSuccess();
    }
  },
  mutations: {
    setExchanges(state, exchanges) {
      state.items = exchanges;
    }
  }
}

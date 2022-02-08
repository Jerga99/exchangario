

import { db } from "../../db";
import { getDocs, query, collectionGroup, doc, addDoc, collection } from "firebase/firestore";
import slugify from "slugify";

export default {
  namespaced: true,
  state() {
    return {
      items: []
    }
  },
  actions: {
    // context -> state, commit
    async getExchangeBySlug(_, slug) {
      console.log(slug);
    },
    async getExchanges({commit}) {
      const exchangeQuery = query(collectionGroup(db, "exchanges"));
      const snapshot = await getDocs(exchangeQuery);
      const exchanges = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));

      commit("setExchanges", exchanges);
    },
    async createExchange({rootState, dispatch}, { data, onSuccess }) {
      const userRef = doc(db, "users", rootState.user.data.id);
      data.user = userRef;
      data.slug = slugify(`${data.title} ${Date.now()}`, {
        lower: true,
        strict: true
      })

      await addDoc(collection(db, "exchanges"), data);

      dispatch("toast/success", "Exchange was created succesfuly!", {root: true});
      onSuccess();
    }
  },
  mutations: {
    setExchanges(state, exchanges) {
      state.items = exchanges;
    }
  }
}

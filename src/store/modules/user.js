
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  namespaced: true,
  state() {
    return {
      register: {
        isProcessing: false,
        error: ""
      }
    }
  },
  actions: {
    async register({commit, dispatch}, {email, password}) {
      commit("setRegisterIsProcessing", true);
      commit("setRegisterError", "");

      try {
        const userCredentials = await createUserWithEmailAndPassword(getAuth(), email, password);
        return userCredentials.user;
      } catch(e) {
        commit("setRegisterError", e.message);
        dispatch("toast/error", e.message, {root: true});
      } finally {
        commit("setRegisterIsProcessing", false);
      }
    }
  },
  mutations: {
    setRegisterIsProcessing(state, isProcessing) {
      state.register.isProcessing = isProcessing;
    },
    setRegisterError(state, error) {
      state.register.error = error;
    }
  }
}

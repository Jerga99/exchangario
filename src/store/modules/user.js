
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../db";

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
    onAuthChange({dispatch}) {
      onAuthStateChanged(getAuth(), async (user) => {
        if (user) {
          const userProfile = await dispatch('getUserProfile', user.uid);
          console.log(userProfile);
        } else {
          console.log("Logged out");
        }
      })
    },
    async getUserProfile(_, id) {
      const docRef = doc(db, "users", id);
      const docSnap = await getDoc(docRef);
      return docSnap.data()
    },
    async register({commit, dispatch}, {email, password, username}) {
      commit("setRegisterIsProcessing", true);
      commit("setRegisterError", "");

      try {
        const { user } = await createUserWithEmailAndPassword(getAuth(), email, password);
        await dispatch("createUserProfile", {
          id: user.uid,
          username,
          avatar: "https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png",
          credit: 0,
          exchanges: []
        })
      } catch(e) {
        commit("setRegisterError", e.message);
        dispatch("toast/error", e.message, {root: true});
      } finally {
        commit("setRegisterIsProcessing", false);
      }
    },
    async createUserProfile(_, {id, ...profile}) {
      await setDoc(doc(db, "users", id), profile);
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

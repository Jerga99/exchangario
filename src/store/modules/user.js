
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../db";

export default {
  namespaced: true,
  state() {
    return {
      data: null,
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
          dispatch('getUserProfile', user);
        } else {
          console.log("Logged out");
        }
      })
    },
    async getUserProfile({commit}, user) {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      const userProfile = docSnap.data();
      const useWithProfile = {
        id: user.uid,
        email: user.email,
        ...userProfile
      }

      commit("setUser", useWithProfile);
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
    },
    setUser(state, user) {
      state.data = user;
    }
  }
}


import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../db";

export default {
  namespaced: true,
  state() {
    return {
      data: null,
      auth: {
        isProcessing: false,
        error: ""
      }
    }
  },
  getters: {
    isAuthenticated(state) {
      return !!state.data;
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
      commit("setAuthIsProcessing", true);
      commit("setAuthError", "");

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
        commit("setAuthError", e.message);
        dispatch("toast/error", e.message, {root: true});
      } finally {
        commit("setAuthIsProcessing", false);
      }
    },
    async login({commit, dispatch}, {email, password}) {
      commit("setAuthIsProcessing", true);
      commit("setAuthError", "");

      try {
        await signInWithEmailAndPassword(getAuth(), email, password);
      } catch(e) {
        commit("setAuthError", e.message);
        dispatch("toast/error", e.message, {root: true});
      } finally {
        commit("setAuthIsProcessing", false);
      }
    },
    async logout({commit}) {
     try {
      await signOut(getAuth());
      commit("setUser", null);
     } catch(e) {
      console.error("Cannot logout!");
     }
    },
    async createUserProfile(_, {id, ...profile}) {
      await setDoc(doc(db, "users", id), profile);
    }
  },
  mutations: {
    setAuthIsProcessing(state, isProcessing) {
      state.auth.isProcessing = isProcessing;
    },
    setAuthError(state, error) {
      state.auth.error = error;
    },
    setUser(state, user) {
      state.data = user;
    }
  }
}

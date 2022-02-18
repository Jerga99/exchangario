
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword
} from "firebase/auth";
import { doc, setDoc, getDoc, updateDoc, query, collection, where, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
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
    },
    isExchangeOwner: state => exchangeUserId => (
      state.data &&
      exchangeUserId &&
      state.data.id === exchangeUserId
    )
  },
  actions: {
    async uploadImage(_, { bytes, name, onSuccess, onProgress}) {
      const storage = getStorage();
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, bytes);

      uploadTask.on("state_changed", (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        onProgress(progress);
      }, (error) => {
        console.error(error.message);
      }, async () => {
        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
        onSuccess(downloadUrl);
      })
    },
    onAuthChange({dispatch, commit}, callback) {
      commit("setAuthIsProcessing", true);
      onAuthStateChanged(getAuth(), async (user) => {
        if (user) {
          await dispatch('getUserProfile', user);
          commit("setAuthIsProcessing", false);
          callback(user);
        } else {
          console.log("Logged out");
          commit("setAuthIsProcessing", false);
          callback(null);
        }
      })
    },
    async updateProfile({commit, dispatch}, { data, onSuccess }) {
      const userRef = doc(db, "users", data.id);

      if (data.exchanges) {
        delete data.exchanges;
      }

      await updateDoc(userRef, data);
      commit("updateProfile", data);
      dispatch("toast/success", "Profile has been updated!", {root: true});
      onSuccess();
    },
    async getUserProfile({commit}, user) {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      const userProfile = docSnap.data();

      const docQuery = query(
        collection(db, "exchanges"),
        where("user", "==", docRef)
      );

      const querySnap = await getDocs(docQuery);
      const exchanges = querySnap.docs.map(
        doc => ({...doc.data(), id: doc.id})
      );

      const useWithProfile = {
        id: user.uid,
        email: user.email,
        ...userProfile,
        exchanges
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
      await setDoc(doc(db, "users", id), {...profile, id});
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
    },
    updateProfile(state, profile) {
      state.data = {...state.data, ...profile};
    },
    updateCredit(state, credit) {
      state.data.credit += credit;
    }
  }
}

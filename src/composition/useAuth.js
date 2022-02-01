

import { useStore } from "vuex";
import { computed } from "vue";

export default function useAuth() {
  const store = useStore();
  const { state } = store;

  const error = computed(() => state.user.auth.error);
  const isProcessing = computed(() => state.user.auth.isProcessing);
  const isAuthenticated = computed(() => store.getters["user/isAuthenticated"]);
  const user = computed(() => state.user.data);

  return {
    error,
    isProcessing,
    isAuthenticated,
    user
  }
}

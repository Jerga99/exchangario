

import { useStore } from "vuex";
import { computed } from "vue";

export default function useAuth() {
  const { state } = useStore();

  const error = computed(() => state.user.auth.error);
  const isProcessing = computed(() => state.user.auth.isProcessing);

  return {
    error,
    isProcessing
  }
}

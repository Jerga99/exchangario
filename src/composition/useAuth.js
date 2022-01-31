

import { useStore } from "vuex";
import { computed } from "vue";

export default function useAuth() {
  const { state } = useStore();

  const error = computed(() => state.user.register.error);
  const isProcessing = computed(() => state.user.register.isProcessing);

  return {
    error,
    isProcessing
  }
}

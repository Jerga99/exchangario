

import { useStore } from "vuex";
export default function useRegister() {
  const store = useStore();

  const register = form => store.dispatch("user/register", form);

  return {
    register
  }
}

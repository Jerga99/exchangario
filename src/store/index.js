

import { createStore } from "vuex";
import exchange from "./modules/exchange";
import user from "./modules/user";

export default createStore({
  modules: {
    exchange,
    user
  }
})

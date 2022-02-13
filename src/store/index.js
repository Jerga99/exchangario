

import { createStore } from "vuex";
import exchange from "./modules/exchange";
import opportunity from "./modules/opportunity";
import user from "./modules/user";
import toast from "./modules/toast";

export default createStore({
  modules: {
    exchange,
    user,
    toast,
    opportunity
  }
})

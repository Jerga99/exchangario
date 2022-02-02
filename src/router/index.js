

import { createWebHistory, createRouter } from "vue-router";

import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import FaqPage from "../pages/Faq";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage
  },
  {
    path: "/faq",
    name: "Faq",
    component: FaqPage
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    meta: { onlyGuestUser: true }
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage,
    meta: { onlyGuestUser: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, _, next) => {
  if (to.meta.onlyGuestUser) {
    next({name: "Home"});
  } else {
    next();
  }
})

export default router;

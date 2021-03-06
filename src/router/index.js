import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/register",
    name: "Register",
    component: () => import(/* webpackChunkName: "about" */ "../views/Register.vue")
  },
  {
    path: "/veritasregister",
    name: "VeritasRegister",
    component: () => import(/* webpackChunkName: "about" */ "../views/VeritasRegister.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;

import Vue from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Profile from "../components/Profile";
import store from "../store/MainStore";
import Products from "../components/ItemMain/Products";
import Cart from "../components/Cart";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/Login",
    component: Login,
  },
  {
    path: "/Signup",
    component: Signup,
  },
  {
    path: "/Profile",
    component: Profile,
  },
  {
    path: "/Products",
    component: Products,
  },
  {
    path: "/Cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

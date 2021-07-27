<template>
  <div id="app">
    <Nav />
    <router-view v-slot="{ Component }">
      <transition
        enter-active-class="animate__animated animate__fadeInLeft"
        leave-active-class="animate__animated animate__fadeOutLeft"
      >
        <component :is="Component" />
      </transition>
    </router-view>

    <Footer />
  </div>
</template>
<script>
import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Products from "./components/ItemMain/Products.vue";
import Cart from "./components/Cart.vue";

export default {
  name: "App",
  components: {
    Nav,
    Home,
    Login,
    Signup,
    Footer,
    Profile,
    Products,
    Cart,
  },
};
</script>

<style>
#app {
  text-align: center;
  align-items: center;
  width: 100%;
  position: absolute;
  margin-top: 0;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.4s ease-out;
}
</style>

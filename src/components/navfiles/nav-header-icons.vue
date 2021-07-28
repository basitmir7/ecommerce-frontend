<template>
  <div class="navbar-collapse">
    <ul
      style="list-style-type:none; text-decoration:none;     display: flex;"
      class="navbar-nav "
    >
      <li class="nav-item">
        <router-link to="">
          <!-- <input type="text" placeholder="search..." />
            <fa class="icons" :icon="['fas', 'search']" /> -->
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/Login">
          SIGN IN
          <fa class="icons" :icon="['fas', 'sign-in-alt']" />
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/Profile">
          PROFILE
          <fa class="icons" :icon="['fas', 'user']" />
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/Cart">
          CART
          <fa class="icons" :icon="['fas', 'shopping-cart']" />
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/Products">
          PRODUCTS
          <fa class="icons" :icon="['fas', 'shopping-basket']" />
        </router-link>
      </li>
      <li class="nav-item" v-if="isLoggedIn">
        <router-link to="/Login" @click.prevent="logoutUser">
          Log out
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "header icons",
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.logout;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
.navbar-collapse {
  display: flex;
  justify-content: left;
  width: 80%;
  margin-top: 5px;
  margin-bottom: 7px;
}

.navbar-collapse a {
  margin-left: 16px;
  text-decoration: none;
  padding: 5px;
  overflow: hidden;
  display: inline-flex;
  color: #000000;
}
.icons {
  color: #000000;
  font-size: 18px;
  margin-bottom: 2px;
  margin-left: 3px;
  padding: 2px;
}
.nav-item :hover {
  color: #b0b435;
}
.nav-item {
  font-family: "Oswald";
  padding: 2px;
  font-weight: bold;
}
</style>

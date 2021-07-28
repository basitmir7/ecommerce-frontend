<template>
  <nav class="navbar" style="display: flex; justify-content: center;">
    <div class="top">
      <router-link to="/" style="display: flex; justify-context: center">
        <h1 style="color:#b0b435">
          KASHMIRFRESH {{ appName }}
          <fa :icon="['fab', 'atlassian']" style="color:#b0b435" />
        </h1>
      </router-link>

      <nav-header-icons />

      <!-- SEARCH INPUT -->
      <search-input />
    </div>
  </nav>
</template>
<script>
import SearchInput from "./navfiles/search-input.vue";
import navHeaderIcons from "./navfiles/nav-header-icons.vue";
import { mapGetters } from "vuex";
export default {
  name: "Nav",
  components: {
    SearchInput,
    navHeaderIcons,
  },
  data: () => ({
    appName: "",
  }),
  methods: {
    getAppNameFromServer() {
      fetch("http://localhost:5000/")
        .then((resp) => resp.json())
        .then((resp) => {
          this.appName = resp.appname;
        });
    },
  },
  mounted() {
    this.getAppNameFromServer();
  },

  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>
SearchInput
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");

* {
  margin: 0;
  font-family: "Oswald";
  color: #000000;
}
.navbar {
  padding: 0;
  display: flex;
  align-items: center;
  max-width: 100%;
  margin: -6px auto;
  margin-top: 9px;

  /* box-shadow: 0 0 2px 3px rgb(226, 223, 223);*/
  flex-wrap: wrap;
  background: rgb(254, 255, 248);
}

.navbar a {
  margin-left: 16px;
  text-decoration: none;
  padding: 5px;
}

.top {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.navbar div {
  margin-left: auto;
}
.navbar ul li {
  overflow: hidden;
  display: inline-flex;
}

button {
  cursor: pointer;
  border-radius: 40px;
  background: #080808;
  border: 0;
  outline: 0;
  padding: 6px;
  color: white;
}

.top a {
  margin-top: 4px;
}

@media (max-width: 460px) {
  .top {
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 500px) {
  .navbar-brand,
  .navbar-collapse,
  .navbar-collapse .navbar-nav,
  .navbar-collapse .navbar-nav .nav-item {
    display: flex;
    width: 100%;
    margin-bottom: 35px;
    flex-wrap: wrap;
    text-align: center;
    line-height: normal;
    font-size: auto;
    padding: 0;
    margin: 0;
  }
  /* input {
    padding: 5px;
    border-radius: 20px;
    font-size: 11px;
  } */
}
</style>

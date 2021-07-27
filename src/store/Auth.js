import axios from "axios";
import { register } from "register-service-worker";
import router from "../router";

const state = {
  token: localStorage.getItem("token") || "",
  user: {},
  status: "",
};

const getters = {
  isLoggedIn: (state) => !!state.token,
  authState: (state) => state.status,
  user: (state) => state.user,
};

const actions = {
  //login action

  async login({ commit }, user) {
    commit("auth_request");

    try {
      let res = await axios.post("http://localhost:5000/api/users/login", user);
      if (res.data.sucess) {
        const token = res.data.token;
        const user = res.data.user;
        //store the token in local storage

        localStorage.setItem("token", token);

        //set the axios default

        axios.defaults.headers.common["Authorization"] = token;
        commit("auth_success", token, user);
      }
      return res;
    } catch (err) {
      commit("auth_error", err);
    }
  },

  async register({ commit }, userData) {
    commit("register_request");
    let res = await axios.post(
      "http://localhost:5000/api/users/register",
      userData
    );
    if (res.data.success !== undefined) {
      commit("register_success");
    }
    return res;
  },

  //logout user

  async logout({ commit }) {
    await localStorage.removeItem("token");
    commit("logout");
    delete axios.defaults.headers.common["Authorization"];
    router.push("/Login");
    return;
  },
};

const mutations = {
  auth_request(state) {
    state.status = "loading";
  },
  auth_success(state, token, user) {
    (state.token = token), (state.user = user), (state.status = success);
  },
  register_request(state) {
    state.status = "loading";
  },
  register_success(state) {
    state.status = "success";
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};

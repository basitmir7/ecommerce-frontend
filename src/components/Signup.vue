<template>
  <div class="container2">
    <div class="register-page">
      <form class="register-form" @submit.prevent="registerUser">
        <div class="username-field">
          <label>USERNAME</label>
          <input type="text" v-model="user_name" />
        </div>
        <div class="password-field">
          <label>PASSWORD</label>
          <input type="password" v-model="password" />
        </div>
        <div class="passwordconfirm-field">
          <label>CONFIRM PASSWORD</label>
          <input type="password" v-model="password_confirm" />
        </div>
        <div class="email-field">
          <label>EMAIL</label>
          <input type="email" v-model="email" />
        </div>
        <div class="login-btn">
          <button>REGISTER</button>
        </div>

        <p class="message">
          Already have an account ?
          <router-link to="/Login"> Login </router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Signup",
  data() {
    return {
      user_name: "",
      password: "",
      password_confirm: "",
      email: "",
    };
  },
  methods: {
    ...mapActions(["register"]),

    registerUser() {
      let user = {
        user_name: this.user_name,
        password: this.password,
        password_confirm: this.password_confirm,
        email: this.email,
      };
      return this.register(user).then((res) => {
        if (res.data.success) {
          return this.$router.push("login");
        }
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
  color: #060707;
  background-color: #fff;
  font-family: "Oswald";
}
.register-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
form input {
  font-family: "Oswald";
  outline: 0;
  background: #f0efef;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 20px;
  font-size: 14px;
}

form button {
  font-family: "Oswald";
  text-transform: uppercase;
  outline: 0;
  background: #080808;
  width: 50%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  border-radius: 40px;
}
form button:hover,
.form button:active,
.form button:focus {
  background: #b0b435;
  transition: ease-in-out 0.2s;
}
form .message {
  margin: 15px 0 0;
  color: #0f0e0e;
  font-size: 13px;
}
form .message a {
  color: #02008b;
  text-decoration: none;
}
form .message a:hover {
  text-decoration: underline;
  text-decoration-color: #02008b;
}
input:hover {
  outline: none;
  box-shadow: 0px 0px 5px #b0b435;
  border-color: #b0b435;
}
input:focus {
  border: 1px solid #b0b435;
}

@media (max-width: 600px) {
  .register-page,
  form {
    width: 100%;
    height: 70%;
    margin-left: 2px;
    font-size: 13px;
  }
  form input,
  form button {
    padding: 10px;
    margin: 8px;
  }
}
</style>

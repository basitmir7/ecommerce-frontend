<template>
  <div class="main-box">
    <div class="second-box"></div>
    <div class="third-box">
      <h1>- Welcome to KASHMIRFRESH</h1>
      <h3>
        we deal with horticulture <br />
        cultivated food and ornamental plants.<br />
        Selling and buying <br />
        fruits, vegetables and nuts <br />
        landscape, garden plants<br />
      </h3>
      <router-link to="/Products">
        <button>EXPLORE</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "explore",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
.main-box {
  display: flex;
  border-bottom: 6px rgb(223, 218, 218);
  justify-content: right;
  position: relative;
  width: 93%;
  margin-left: 40px;
  height: 550px;
  margin-top: 85px;
  flex-wrap: wrap;
  box-shadow: 0 0 6px 3px rgb(155, 152, 152);
}

.second-box {
  width: 45%;
  justify-content: flex-start;
  height: auto;
  background-image: url("../../assets/s10.jpg");
  flex-wrap: wrap;
}

button {
  margin-top: inherit;
  font-family: "Oswald";
  letter-spacing: 3px;
  font-size: 24px;
  background-color: #000000;
  color: rgb(255, 255, 254);
  border-style: none;
  cursor: pointer;
  padding: 17px;
  padding-left: 27px;
  padding-right: 27px;
  cursor: pointer;
  border-top-right-radius: 30px 20px;
  border-bottom-left-radius: 30px 20px;
  font-weight: bold;
}
button:hover {
  background: #b0b435;

  transform: scale(1.1);
  opacity: 0.9;
  transition: ease-in-out 0.2s;
}
.second-box:hover {
  opacity: 0.7;
}

.third-box {
  justify-content: left;
  background: linear-gradient(to bottom right, #545555 0%, #d4fdf8 100%);
  height: auto;
  width: 75%;
  flex: 1;
  flex-wrap: wrap;
}
h1 {
  font-family: "Oswald";
  font-weight: bold;
  padding: 29px;
  letter-spacing: 2px;
}
h3 {
  text-align: center;
  font-family: "Oswald";
  color: #000 !important;
  padding: 27px;
  letter-spacing: 2px;
  word-spacing: 4px;
}
@media (max-width: 780px) {
  button {
    left: 100px;
    top: 380px;
    font-size: 25px;
    padding: 5px;
  }
  .main-box {
    margin-left: 10px;
  }
  h1,
  h3 {
    padding: 7px;
  }
}
</style>

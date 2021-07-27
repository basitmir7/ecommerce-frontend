<template>
  <h1>Hi ! User Profile</h1>
  <div class="container">
    <div class="container1"></div>
    <div class="container2">
      <h1>Info</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.container {
  width: 96%;
  height: 600px;
  display: block;
  border: 2px solid grey;
  margin-left: 20px;
  border-radius: 15px;
  display: flex;
}
</style>

<template>
  <div class="search-main">
    <div class="search-input">
      <input class="main-input" type="text" />
      <fa class="icons" style="font-size: 22px" :icon="['fas', 'search']" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Search Input",
};
</script>

<style scoped>
.search-main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
}

.search-input {
  width: 90%;
  height: 23px;
  margin: 0px;
  padding: 5px;
  border-radius: 15px;
  border: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
}
.search-input:hover {
  outline: none;
  box-shadow: 0px 0px 5px #b0b435;
}

.main-input {
  outline: none;
  border: none;
  font-weight: bold;
  width: 90%;
}
@media (min-width: 1024px) {
  .search-main {
    width: 20%;
    margin-top: 0px;
  }
}
</style>

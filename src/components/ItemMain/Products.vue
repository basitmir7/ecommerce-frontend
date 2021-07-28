<template>
  <productsbanner />
  <div class="container">
    <div class="row allProducts">
      <div
        class="col-3 product"
        v-for="(product, key) in getProducts"
        :key="key"
      >
        <div class="product_img">
          <img :src="product.image" />
        </div>
        <div class="product_name">
          <p>{{ product.name }}</p>
        </div>
        <div class="product_price">
          <span>Rs.</span>
          {{ product.price }} /kg
        </div>
        <div class="product_button">
          <button class="btn btn-cart" @click="addToCart(product)">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import productsbanner from "./productsbanner.vue";
export default {
  name: "Products",
  components: { productsbanner },
  methods: {
    ...mapActions(["addToCart"]),
  },
  computed: {
    ...mapGetters(["getProducts"]),
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
* {
  font-family: "Oswald";
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  width: 95%;
  margin: 0 auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
.col-3 {
  width: 30.333333%;
}
img {
  height: 220px;

  width: 220px;
}
.product_image {
  text-align: center;
  margin: 0 auto;
}
.product_name p {
  font-size: 17px;
  font-weight: 400;
}
.product {
  margin: 20px 21px 10px 10px;
  padding: 20px 20px 20px 20px;
  background: rgb(251, 255, 242);

  box-shadow: 0 0 20px 0 rgba(56, 55, 55, 0.2),
    0 5px 5px 0 rgba(66, 65, 65, 0.24);
}
.product:hover {
  background: rgb(252, 250, 250);
  transform: scale(1.13);
  transition: ease-in-out 180ms;
  opacity: 0.9;
}

.product_price span {
  font-size: 13px;
}
button {
  background: rgb(3, 3, 3);
  color: rgb(255, 255, 255);
  border-radius: 9px;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  padding: 6px 13px;
  border: 1px solid grey;
}
button:hover {
  background: linear-gradient(to right, #cdf08c, #b2b635);
  color: rgb(8, 8, 8);
  transform: scale(1.11);
  transition: ease-in-out 100ms;

  border: none;
}
.product_button {
  margin: 10px;
}

.allProducts {
  margin-top: -120px;
  background: white;
  border-radius: 9px;
}
</style>

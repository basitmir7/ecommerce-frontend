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
          {{ product.price }}
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
  width: 33.3333333%;
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
  margin-top: 20px;
  padding-left: 20px;
}
.product_price span {
  font-size: 13px;
}
button {
  border: 1px solid rgb(230, 248, 220);
  background: linear-gradient(to right, #e2f3c2, #b0b43d);
  color: black;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  padding: 6px 13px;
}
.product_button {
  margin: 10px;
}

.allProducts {
  margin-top: -120px;
  background: white;
}

button:hover {
  font-size: 16px;
  background: #b0b435;
}
</style>

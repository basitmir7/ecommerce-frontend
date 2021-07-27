<template>
  <div class="cartContainer" v-if="getCart.products.length > 0">
    <h3>Shopping Cart</h3>
    <div class="row">
      <div
        class="col-9"
        v-for="(product, index) in getCart.products"
        :key="index"
      >
        <div class="row">
          <div class="col-2">
            <div class="cart_img">
              <img :src="product.image" />
            </div>
          </div>
          <div class="col-8">
            <div class="product_name">
              <p>{{ product.name }}</p>
              <div class="row">
                <div class="quantity-btn">
                  <select
                    class="select"
                    v-model="product.quantity"
                    @change="updateQty($event, product.id)"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                </div>
                <div class="delete-btn">
                  <button class="cart-btn" @click="deleteProduct(product.id)">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-2">
            <div class="product_price">
              <span>Rs</span>
              <strong>{{ product.price }}</strong>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        {{ getPrice }}<br />
        {{ getQuantities }}
      </div>
    </div>
  </div>
  <div v-else>
    <div class="cartContainer">your cart is empty</div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Cart",
  methods: {
    ...mapActions(["updateQuantity", "deleteProduct"]),
    updateQty(e, id) {
      this.updateQuantity({ qty: e.target.value, id });
    },
  },

  computed: {
    ...mapGetters(["getCart", "getPrice", "getQuantities"]),
  },
};
</script>
<style scoped>
.cartContainer {
  width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background: rgb(202, 215, 240);
}
.row {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
.col-3 {
  width: 25%;
}
.col-9 {
  width: 75%;
}

.col-2 {
  width: 16.6666%;
}
.col-8 {
  width: 66.6666%;
}
.cart_img img {
  width: 200px;
  height: 150px;
}
.product_name {
  font-size: 18px;
}
</style>

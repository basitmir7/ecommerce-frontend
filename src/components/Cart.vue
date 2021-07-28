<template>
  <div class="cartContainer" v-if="getCart.products.length > 0">
    <h3>SHOPPING CART</h3>
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
              <div class="row-small">
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
              <span>Rs. </span>
              <strong>{{ product.price }}</strong> /kg
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="total-container">
      <div class="totalPrice">
        TOTAL PRICE = <b>Rs. {{ getPrice }}</b>
      </div>
      <div class="totalQuantity">
        QUANTITY = <b>{{ getQuantities }}</b>
      </div>
      <button class="check-btn">Proceed to checkout</button>
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
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
h3 {
  color: #b0b435;
  font-family: "Oswald";
}
* {
  font-family: "Oswald";
}
.cartContainer {
  width: 1300px;
  margin: 25px auto;
  padding: 20px;
  background: rgb(249, 255, 241);
}
.row {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
.row-small {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.col-3 {
  width: 25%;
}
.col-9 {
  display: block;

  box-shadow: 3px 4px 2px rgb(226, 223, 223);
  width: 98%;
  padding: 6px;
  margin-top: 10px;
  border-radius: 15px;
  background: linear-gradient(180deg, #dadba6, rgb(223, 228, 204));
}

.col-2 {
  width: 16.6666%;
  margin-top: 25px;
}
.col-8 {
  width: 54%;
  margin-top: 22px;
}
.cart_img img {
  width: 200px;
  height: 150px;
}
.product_name {
  font-size: 18px;
}

.cart-btn,
.select {
  font-size: 15px;
  padding: 2px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 6px;
  outline: none;
  border: none;
  margin: 1px 4px;
  background: rgb(255, 255, 255);
  box-shadow: 1px rgb(158, 157, 157);
  border: 0.5px solid rgb(172, 172, 172);
}
.select {
  font-size: 13px;
}

.cart-btn:hover {
  background: rgb(209, 209, 209);
  transition: ease-in-out 90ms;
}
.select:hover {
  background: rgb(216, 216, 216);
  transition: ease-in-out 90ms;
}

.total-container {
  margin-top: 50px;
  background: rgb(240, 247, 203);
}

.totalQuantity,
.totalPrice {
  color: #a4a826;
  font-size: 20px;
}
.totalQuantity b,
.totalPrice b {
  color: #020202;
}

.totalQuantity,
.totalPrice {
  margin-top: 20px;
  padding: 3px;
}
.check-btn {
  margin-top: 20px;
  border: 2px solid rgb(176, 179, 175);
  background: #b0b43d;
  color: black;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  font-size: 18px;
  padding: 6px 13px;
}
.check-btn:hover {
  font-size: 21px;
  transition: ease-in-out 140ms;
}
</style>

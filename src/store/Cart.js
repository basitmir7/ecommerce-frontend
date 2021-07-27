const cart = {
  state: {
    cartData: {
      products: [],
      totalPrice: 0,
      Quantities: 0,
    },
  },
  getters: {
    getCart: (state) => {
      return state.cartData;
    },
    getPrice: (state) => {
      let price = 0;
      state.cartData.products.forEach(
        (product) => (price += product.totalPrice)
      );
      /*const res = state.cartData.products.map(
        (product) => (quantities += product.totalPrice)
      );  */
      return price;
    },
    getQuantities: (state) => {
      let quantities = 0;
      state.cartData.products.forEach(
        (product) => (quantities += parseInt(product.quantity))
      );
      return quantities;
    },
  },
  mutations: {
    addToCart: (state, payload) => {
      const product = state.cartData.products.find(
        (pro) => pro.id === payload.id
      );
      if (product) {
        return state;
      } else {
        payload.totalPrice = parseInt(payload.quantity) * payload.price;
        state.cartData = {
          ...state.cartData,
          products: [...state.cartData.products, payload],
          totalPrice: state.cartData.totalPrice + payload.price,
          Quantities: state.cartData.Quantities + 1,
        };
      }
    },
    updateQuantity: (state, payload) => {
      const product = state.cartData.products.find(
        (product) => product.id === payload.id
      );
      product.totalPrice = product.price * parseInt(product.quantity);
      const index = state.cartData.product.findIndex(
        (product) => product.id === payload.id
      );
      state.cartData.products[index] = product;
    },
    deleteProduct: (state, id) => {
      state.cartData.products = state.cartData.products.filter(
        (product) => product.id !== id
      );
    },
  },
  actions: {
    addToCart: (obj, payload) => {
      obj.commit("addToCart", payload);
    },
    updateQuantity: (obj, payload) => {
      obj.commit("updateQuantity", payload);
    },
    deleteProduct: (obj, id) => {
      obj.commit("deleteProduct", id);
    },
  },
};

export default cart;

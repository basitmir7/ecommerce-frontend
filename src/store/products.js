import router from "../router";

const products = {
  state: {
    products: [
      {
        id: 1,
        name: "Almonds ",
        image: require("../assets/almonds.jpg"),
        price: 200,
        quantity: 1,
      },
      {
        id: 2,
        name: "apples red ",
        image: require("../assets/apple.jpg"),
        price: 50,
        quantity: 1,
      },
      {
        id: 3,
        name: "cashews ",
        image: require("../assets/cashews.jpg"),
        price: 170,
        quantity: 1,
      },
      {
        id: 4,
        name: "garden plant",
        image: require("../assets/gardenplant.jpg"),
        price: 40,
        quantity: 1,
      },
      {
        id: 5,
        name: "kiwi high quality",
        image: require("../assets/kiwi.jpg"),
        price: 100,
        quantity: 1,
      },
      {
        id: 6,
        name: "onions",
        image: require("../assets/onions.jpg"),
        price: 80,
        quantity: 1,
      },
      {
        id: 7,
        name: "spanich",
        image: require("../assets/spanich.png"),
        price: 20,
        quantity: 1,
      },
    ],
  },
  getters: {
    getProducts: (state) => {
      return state.products;
    },
  },
  mutations: {},
  actions: {},
};
export default products;

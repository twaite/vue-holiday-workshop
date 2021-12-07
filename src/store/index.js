import { createStore } from "vuex";

export default createStore({
  state: {
    cart: {
      products: [],
    },
  },
  getters: {
    productCount(state) {
      return state.cart.products.length;
    },
    products(state) {
      return state.cart.products;
    },
    summary(state) {
      if (state.cart.products.length) {
        const subtotal = state.cart.products.reduce(
          (a, b) => a + b.price * b.count,
          0
        );

        const taxes = 0.08 * subtotal;

        return {
          subtotal,
          taxes,
          total: subtotal + taxes,
        };
      } else {
        return {
          subtotal: 0,
          taxes: 0,
          total: 0,
        };
      }
    },
  },
  mutations: {
    addProduct(state, product) {
      const existingProduct = state.cart.products.find(
        (p) => p.id === product.id
      );

      if (existingProduct) {
        existingProduct.count++;
      } else {
        product.count = 1;
        state.cart.products.push(product);
      }
    },
  },
  actions: {
    addProduct({ commit }, product) {
      commit("addProduct", product);
    },
  },
});

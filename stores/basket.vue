
import { defineStore } from 'pinia';  // Pinia kullanıyorsanız

export const useBasketStore = defineStore('basket', {
  state: () => ({
    cart: [],
  }),
  getters: {
    getCartItems(state) {
      return state.cart;
    },
    getTotalPrice(state) {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    getShippingCost(state) {
      const total = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
      return total >= 450 ? 0 : 49.90;
    },
  },
  actions: {
    addToCart(item) {
      const existingItem = this.cart.find(i => i.productId === item.productId);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        this.cart.push(item);
      }
    },
    updateQuantity({ productId, quantity }) {
      const item = this.cart.find(i => i.productId === productId);
      if (item) {
        item.quantity += quantity;
        if (item.quantity <= 0) {
          this.cart = this.cart.filter(i => i.productId !== productId);
        }
      }
    },
  },
});

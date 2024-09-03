import { ref } from 'vue';

export function useCart() {
  const cartItems = ref([]);

  const fetchCartItems = async () => {
    debugger;
    try {
      const data = await $fetch('https://localhost:7253/api/Product/items');
      cartItems.value = data;
    } catch (error) {
      console.error('Sepet öğelerini alırken hata oluştu:', error);
    }
  };

  const addProductToCart = async (product) => {
    debugger;
    try {
      await $fetch('https://localhost:7253/api/Product/add', {
        method: 'POST',
        body: {
            ProductId: product.ProductId,
            Title: product.Title,
            Author: product.Author,
            Publishers: product.Publishers,
            Price: product.Price,
            Quantity: product.Quantity,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      await fetchCartItems(); // Sepet öğelerini güncelle
    } catch (error) {
      console.error('Sepete ürün eklenirken hata oluştu:', error);
    }
  };

  return {
    cartItems,
    addProductToCart,
    fetchCartItems, // Sepeti manuel olarak güncellemek için
  };
}

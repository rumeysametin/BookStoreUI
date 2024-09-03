<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <a href="" style="width: 100%!important;display: block;margin: 0;padding: 0;line-height: 0;">
      <img width="100%" height="auto" src="https://asset.kitapsepeti.com/Data/EditorFiles/450-tl-uzeri-siparislerde-gecerli-ve-iyzico-ile-ode-yonteminde-kargo-bedava-kampanyasi-top-desktop-banner-v2.jpg" title="İyzico Ücretsiz Kargo Kampanyası" alt="İyzico Ücretsiz Kargo Kampanyası" decoding="async" fetchpriority="high" srcset="https://asset.kitapsepeti.com/Data/EditorFiles/450-tl-uzeri-siparislerde-gecerli-ve-iyzico-ile-ode-yonteminde-kargo-bedava-kampanyasi-top-desktop-banner-v2.jpg 1920w, https://asset.kitapsepeti.com/Data/EditorFiles/450-tl-uzeri-siparislerde-gecerli-ve-iyzico-ile-ode-yonteminde-kargo-bedava-kampanyasi-top-mobile-banner-v2.jpg 400w" sizes="(max-width: 1920px) 100vw, 1920px" style="max-height:50px;">
    </a>
    <div class="flex items-center justify-between mr-20 ml-20 p-4 h-28">
      <!-- Logo ve Arama Çubuğu -->
      <div class="flex items-center space-x-3 rtl:space-x-reverse">
        <a href="/" class="flex items-center">
          <img src="/assets/img/logo.png" class="h-16" alt="Site Logo" />
        </a>
      </div>
      <form class="flex items-center max-w-lg mx-auto">
        <label for="voice-search" class="sr-only">Search</label>
        <div class="relative w-full">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 me-2" style="color: orangered;" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-purple-800 focus:border-purple-500 block w-64 ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Aradığınız ürünün adını yazınız." required />
        </div>
        <button type="submit" class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-purple-700 rounded-r-lg border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" style="margin: 0;">
          Ara
        </button>
      </form>
      <!-- Sağdaki Butonlar -->
      <div class="flex space-x-4 rtl:space-x-reverse">
        <!-- E-posta ile giriş ol veya kayıt ol butonu -->
        <span class="flex justify-center items-center text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 px-4 py-2">
          <nuxt-link to="/login" class="flex justify-start mr-1">
            <svg class="w-5 h-5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A10.992 10.992 0 0112 15a10.992 10.992 0 016.879 2.804M12 12a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
            <span class="flex items-center hover:underline">
              E-posta ile giriş yap
            </span>
          </nuxt-link> ya da
          <nuxt-link to="/register" class="ml-1">
            <span class="flex items-center hover:underline">
             kayıt ol
            </span>
          </nuxt-link>
        </span>

        <!-- Sepetim Butonu -->
        <button @click="toggleDrawer" class="flex items-center px-4 py-2 text-white bg-[#FF8000] rounded-lg hover:bg-[#DD6F00] focus:outline-none focus:ring-4 focus:ring-[#FF8000] dark:focus:ring-[#DD6F00]">
          <svg class="w-5 h-5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l1 5h11l1-5h2M6 8h12l1 11H5L6 8zm1 0h1m8 0h1m-5 4h6M8 8l1 11m5-11l1 11m-5 0h1m-1-8h2m-2 2h2m-2 2h2m-2 2h2" />
          </svg>
          Sepetim
        <span class="ml-2 inline-flex items-center justify-center w-4 h-4 text-xs font-medium text-white bg-red-600 rounded-full">{{ cartCount }}</span>
        </button>
      </div>
    </div>
  </nav>

  <!-- Drawer Panel -->
  <div v-if="isCartVisible" class="fixed h-screen inset-0 bg-gray-900 bg-opacity-50 flex z-50">
    <div class="w-full max-w-md bg-white p-4 relative" style="margin-left: auto;">
        <button @click="toggleDrawer" class="absolute top-2 left-2 text-gray-600 hover:text-gray-900 z-50">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
        <h3 class="text-2xl font-bold mb-4 text-center">Sepetim</h3>
        <!-- Sepet Boş Durumu -->
        <div v-if="cart.length === 0" class="text-center py-20">
          <p>Sepetiniz boş.</p>
          <nuxt-link to="/" class="bg-orange-500 text-white px-4 py-2 rounded-lg mt-4 inline-block">Alışverişe Devam Et</nuxt-link>
        </div>

       <!-- Sepet Dolu Durumu -->
        <div v-else>
          <div class="h-[60vh] overflow-y-auto pr-5">
            <div v-for="item in cart" :key="item.ProductId" class="flex mb-4 p-4 bg-gray-100 rounded-lg shadow ">
            <div>
          <div class="w-full">
            <img :src="item.Image" alt="" class="w-full rounded-lg" />
          </div> 
          <div class="px-4">
            <h4 class="text-lg font-bold">{{ item.Title }}</h4>
            <p class="text-sm">{{ item.Author }}</p>
            <p class="text-sm">{{ item.Publishers }}</p>
            <div class="flex items-center mt-2">
              <button @click="decrementQuantity(item)" class="bg-gray-300 text-gray-600 px-2 py-1 rounded">-</button>
              <span class="mx-2">{{ item.Quantity }}</span>
              <button @click="incrementQuantity(item)" class="bg-gray-300 text-gray-600 px-2 py-1 rounded">+</button>
            </div>
          </div>
          <div class="text-right">
            <p class="text-lg font-bold">{{ item.Price }} TL</p>
            <p class="text-sm">Toplam: {{ item.Price * item.Quantity }} TL</p>
            <button @click="removeFromCart(item)" class="text-red-500">Sil</button>
          </div>
        </div>
       
          </div>
          </div>
        <!-- Sepet Özeti -->  
          <div class="mt-6">
          <div class="flex justify-between mb-2">
            <span>Sepet Toplamı:</span>
            <span>{{ cartTotal }} TL</span>
          </div>
          <div class="flex justify-between mb-2">
            <span>Kargo Ücreti:</span>
            <span>{{ cartTotal >= 450 ? 'Ücretsiz' : '49,90 TL' }}</span>
          </div>
          <div class="flex justify-between font-bold text-xl mb-4">
            <span>Genel Toplam:</span>
            <span>{{ cartTotal + (cartTotal >= 450 ? 0 : 49.9) }} TL</span>
          </div>
          <nuxt-link to="/basket" class="bg-purple-600 text-white px-4 py-2 rounded-lg w-full text-center block mb-2">Sepete Git</nuxt-link>
          <button class="bg-yellow-500 text-white px-4 py-2 rounded-lg w-full">Satın Al</button>
        </div>
        </div>
      </div>
    </div>

    <nav class="bg-purple-600 text-white">
    <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
      <div class="flex items-center space-x-8">
        <!-- Menü İkonu -->
        <div class="relative">
          <button @click="toggleDropdown" class="text-white focus:outline-none">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
          <!-- Dropdown Menü -->
          <div v-if="isDropdownOpen" class="absolute left-0 mt-2 bg-white text-purple-600 rounded shadow-lg z-50">
            <a v-for="(category, index) in remainingCategories" :key="index" href="#" class="block px-4 py-2 hover:bg-purple-600 hover:text-white">{{ category.name }}</a>
          </div>
        </div>
        <!-- Kategoriler -->
        <a v-for="(category, index) in firstFiveCategories" :key="index" href="#" class="hover:text-gray-300 border-l border-white px-4">{{ category.name.toLocaleUpperCase('tr-TR') }}</a>
      </div>

      <!-- Çok Satanlar Butonu -->
      <div>
        <a href="#" class="px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-gray-200">ÇOK SATANLAR</a>
      </div>
    </div>
  </nav>

  <NuxtPage/>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { initFlowbite } from 'flowbite';
import { useRoute } from 'vue-router';

const route = useRoute();
const cart = ref([]);
const isCartVisible = ref(false);

const cartCount = computed(() => {
  return cart.value.reduce((count, item) => count + item.Quantity, 0);
});

const toggleDrawer = () => {
  isCartVisible.value = !isCartVisible.value;
  cart.value = JSON.parse(localStorage.getItem('cart')) || [];

};

const removeFromCart = (item) => {
  cart.value = cart.value.filter(cart => cart.ProductId !== item.ProductId);

  // Güncellenen sepeti localStorage'a kaydet
  localStorage.setItem('cart', JSON.stringify(cart.value));
};

const incrementQuantity = (item) => {
  item.Quantity++;
  localStorage.setItem('cart', JSON.stringify(cart.value));
};

const decrementQuantity = (item) => {
  if (item.Quantity > 1) {
    item.Quantity--;
    localStorage.setItem('cart', JSON.stringify(cart.value));
  }
};

const cartTotal = computed(() => {
  return cart.value.reduce((total, item) => total + (item.Price * item.Quantity), 0);
});

onMounted(() => {
  const items = localStorage.getItem('cart');
  cart.value = items ? JSON.parse(items) : [];
});

// Kitap detaylarını getirme fonksiyonu (örnek)
const getBookDetails = async (id) => {
  const data = await $fetch(`https://localhost:7253/api/Books/get/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  book.value = data;
};

onMounted(async () => {
  const id = route.params.id;
  await getBookDetails(id);
});

const isDropdownOpen = ref(false);
const categories = ref([]);
const firstFiveCategories = ref([]);
const remainingCategories = ref([]);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

onMounted(async () => {
  try {
    const response = await $fetch('https://localhost:7253/api/Category/getall');
    categories.value = response;

    firstFiveCategories.value = categories.value.slice(0, 5);
    remainingCategories.value = categories.value.slice(5);
  } catch (error) {
    console.error('Error fetching categories:', error);
  }

  initFlowbite();
});

</script>

<style scoped>
/* Add your CSS styles here */
</style>

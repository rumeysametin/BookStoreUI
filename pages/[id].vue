<template>
    <div class="container mx-auto my-10 p-5">
      <!-- Book Details Section -->
      <div class="flex flex-col md:flex-row bg-white rounded-lg shadow-md">
        <!-- Book Image -->
        <div class="md:w-1/3 p-5 flex justify-center">
          <img src="../assets/img/yasamak.jpg" :alt="book.title" class=" rounded-lg">
        </div>
        <!-- Book Information -->
        <div class="md:w-2/3 p-5">
          <h1 class="text-3xl font-bold mb-2">{{ book.title }}</h1>
          <h2 class="text-3xl mb-2">{{ book.author }}</h2>
          <h2 class="text-3xl font-bold mb-2">{{ book.publishers }}</h2>
          <div class="flex items-center mb-4">
            <!-- Star Rating -->
            <div class="flex items-center space-x-1">
              <svg class="w-5 h-5 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <span class="text-lg font-semibold">{{ book.rating }}</span>
            </div>
          </div>
          <p class="text-2xl font-bold text-purple-700 mb-4">{{ book.price }} TL</p>
          <button @click="addToCart" class="bg-orange-500 text-white px-4 py-2 rounded-lg">Sepete Ekle</button>
    
          <!-- Book Info -->
          <div class="mt-5">
            <h2 class="text-xl font-semibold">{{ book.title }} Hakkında Bilgiler</h2>
            <div class="flex justify-between mt-2">
              <p><strong>ISBN:</strong> {{ book.isbn }}</p>
              <p><strong>Basım Yılı:</strong> {{ book.publishDate }}</p>
              <p><strong>Sayfa Sayısı:</strong> {{ book.pageCount }}</p>
            </div>
          </div>
        </div>
      </div>
    
      <!-- Book Description Section -->
      <div class="mt-10 bg-purple-100 p-5 rounded-lg">
        <h2 class="text-2xl font-bold mb-4 text-purple-700">{{ book.title }} Ürün Açıklaması</h2>
        <p>{{ book.explanation }}</p>
      </div>
    
      <!-- Comments Section -->
      <div class="mt-10">
        <h2 class="text-2xl font-bold mb-4">Yorumlar</h2>
        <!-- Comments would be dynamically loaded here -->
        <div v-for="comment in book.comments" :key="comment.id" class="p-4 mb-4 border rounded-lg">
          <p><strong>{{ comment.user }}:</strong> {{ comment.text }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
const route = useRoute();
const book = ref({});
  
  const getBookDetails = async (id) => {
    const data = await $fetch(`https://localhost:7253/api/Books/get/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    book.value = data;
  };
  const addToCart = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  const existingProduct = cart.find(item => item.ProductId === book.value.id);
  
  if (existingProduct) {
    existingProduct.Quantity += 1; // Miktarı artır
  } else {
    const product = {
      ProductId: book.value.id,
      Title: book.value.title,
      Author: book.value.author,
      Publishers: book.value.publishers,
      Price: book.value.price,
      Quantity: 1, // Varsayılan olarak 1 adet ekle
      Image: '/assets/img/yasamak.jpg',
    };
    cart.push(product);
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Kitap sepete eklendi!');
};

  
  onMounted(async () => {
    const id = route.params.id;
    await getBookDetails(id);
  });
  </script>
  
  <style>
  /* Sayfa ile ilgili stiller burada */
  </style>
  
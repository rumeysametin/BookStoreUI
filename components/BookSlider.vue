<template>
   <div class="relative flex items-center justify-start">
      <swiper
        class="w-full"
        :loop="true"
        :slidesPerView="1.7"
        :spaceBetween="30"
        :speed="4000"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :modules="[Autoplay]"
        :breakpoints="{
          320: { slidesPerView: 1.7 },
          600: { slidesPerView: 2 },
          1000: { slidesPerView: 3 },
          1142: { slidesPerView: 5 }
        }"
      >
        <!-- Slides -->
        <swiper-slide v-for="book in books" :key="book.isbn">
          <div
            class="w-full bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 mx-10 my-5" style="box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"
          >
            <nuxt-link :to="`/${book.id}`" class = "mx-10 my-5">
              <img class="p-1 rounded-t-lg" src="../assets/img/yasamak.jpg" :alt="book.title" />
            </nuxt-link>
            <div class="px-5 pb-5">
              <a href="#" class="text-center">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white clamp-text"
                  style="display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;">
                  {{ book.title }}
                </h5>
                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{{ book.isbn }}</p>
                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{{ book.author }}</p>
              </a>
              <div class="flex items-center mt-2.5 mb-5">
                <div class="flex items-center justify-center w-full">
                  <!-- SVG Icons -->
                  <svg class="w-4 h-4 text-yellow-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <!-- Daha fazla SVG ekleyin -->
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <a
                  href="#"
                  class="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                  >{{ book.price }} TL</a
                >
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { initFlowbite } from "flowbite";
import { defineProps } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css';

const props = defineProps({
  books: {
    type: Array,
    required: true,
  },
});
const books = ref([]);

onMounted(async () => {
  initFlowbite();
  await getAll();
});

const getAll = async () => {
  const data = await $fetch("https://localhost:7253/api/Books/getAll", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(data);
  books.value = data;
};


</script>

<style scoped>

</style>
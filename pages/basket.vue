<template>
    <div class="card border rounded-lg p-4 shadow-lg">
      <div class="flex">
        <!-- Book Image -->
        <div class="w-1/4">
          <img src="/assets/img/bes.jpg" alt="Book Image" class="w-full h-auto rounded-lg" />
        </div>
  
        <!-- Book Details and Quantity Selector -->
        <div class="w-2/4 px-4">
          <div class="text-xl font-bold">{{ book.title }}</div>
          <div class="text-gray-600">{{ book.author }}</div>
          <div class="text-gray-500">{{ book.publisher }}</div>
          
          <!-- Quantity Selector -->
          <div class="mt-4 flex items-center">
            <button @click="decreaseQuantity" class="px-2 py-1 bg-gray-200 rounded-l">-</button>
            <input type="text" v-model.number="quantity" class="text-center border-t border-b border-gray-300 w-16" readonly />
            <button @click="increaseQuantity" class="px-2 py-1 bg-gray-200 rounded-r">+</button>
          </div>
        </div>
  
        <!-- Pricing Details -->
        <div class="w-1/4 flex flex-col justify-between">
          <!-- Price Column -->
          <div class="text-right">
            <div class="font-semibold">Fiyat</div>
            <div class="text-lg">{{ book.price.toFixed(2) }} TL</div>
          </div>
  
          <!-- Total Column -->
          <div class="text-right">
            <div class="font-semibold">Toplam</div>
            <div class="text-lg">{{ (book.price * quantity).toFixed(2) }} TL</div>
          </div>
  
          <!-- Delete Column -->
          <div class="text-right">
            <button @click="removeItem" class="text-red-500">
              <i class="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Info Box -->
      <div class="mt-4 p-4 border-t border-gray-200">
        <div class="text-center mb-2">
          <button class="bg-purple-500 text-white px-4 py-2 rounded">Alışverişe Devam Et</button>
        </div>
        <div class="text-sm">
          <div class="flex justify-between">
            <span>Sepet Toplamı:</span>
            <span>{{ cartTotal.toFixed(2) }} TL</span>
          </div>
          <div class="flex justify-between">
            <span>Kargo Ücreti:</span>
            <span>{{ shippingCost.toFixed(2) }} TL</span>
          </div>
          <div class="flex justify-between font-bold mt-2">
            <span>Genel Toplam:</span>
            <span>{{ (cartTotal + shippingCost).toFixed(2) }} TL</span>
          </div>
        </div>
        <div class="text-center mt-4">
          <button class="bg-yellow-500 text-white px-4 py-2 rounded">Satın Al</button>
        </div>
        <div class="mt-4">
          <label for="coupon-code" class="block text-sm">Kupon Kodu:</label>
          <input type="text" id="coupon-code" class="border rounded px-2 py-1 w-full" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      book: Object,
      cartTotal: Number,
      shippingCost: Number
    },
    data() {
      return {
        quantity: 1
      };
    },
    methods: {
      increaseQuantity() {
        this.quantity += 1;
      },
      decreaseQuantity() {
        if (this.quantity > 1) {
          this.quantity -= 1;
        }
      },
      removeItem() {
        // Implement the logic to remove the item from the cart
      }
    }
  }
  </script>
  
  <style scoped>
  .card {
    max-width: 400px;
    margin: 0 auto;
  }
  </style>
  
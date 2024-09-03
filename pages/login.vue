<template>
    <div class="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg mt-8">
      <h2 class="text-2xl font-bold mb-6 text-center text-purple-800">Giriş Yap</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block text-gray-700">E-posta</label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            required 
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700">Şifre</label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            required 
          />
        </div>
        <button 
          type="submit" 
          class="w-full py-2 px-4 hover:bg-[#DD6F00] text-white font-semibold rounded-md bg-[#FF8000]"
        >
          Giriş Yap
        </button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const email = ref('')
  const password = ref('')
  const router = useRouter()
  
  const login = async () => {
    try {
      const response = await $fetch('https://localhost:7253/api/Account/Login', {
        method: 'POST',
        body: {
        email: email.value,
        password: password.value,
        }
      })
debugger;
      if(response.token.length > 0){
        localStorage.setItem('token', response.token)
        router.push('/')
    }
    } catch (error) {
      alert('Giriş başarısız. Lütfen bilgilerinizi kontrol edin.')
    }
  }
  </script>
  
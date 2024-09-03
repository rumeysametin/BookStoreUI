<template>
  <div class="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg mt-8">
    <h2 class="text-2xl font-bold mb-6 text-center text-purple-800">Kayıt Ol</h2>
    <form @submit.prevent="register">
      <div class="mb-4">
        <label for="name" class="block text-gray-700">Ad</label>
        <input 
          type="text" 
          id="name" 
          v-model="name" 
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          required 
        />
      </div>
      <div class="mb-4">
        <label for="surname" class="block text-gray-700">Soyad</label>
        <input 
          type="text" 
          id="surname" 
          v-model="surname" 
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          required 
        />
      </div>
      <div class="mb-4">
        <label for="username" class="block text-gray-700">Kullanıcı Adı</label>
        <input 
          type="text" 
          id="username" 
          v-model="username" 
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          required 
        />
      </div>
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
      <div class="mb-4">
        <label for="password" class="block text-gray-700">Şifre</label>
        <input 
          type="password" 
          id="password" 
          v-model="password" 
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          required 
        />
      </div>
      <div class="mb-6">
        <label for="confirmPassword" class="block text-gray-700">Şifreyi Onayla</label>
        <input 
          type="password" 
          id="confirmPassword" 
          v-model="confirmPassword" 
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          required 
        />
      </div>
      <button 
        type="submit" 
        class="w-full py-2 px-4 hover:bg-[#DD6F00] text-white font-semibold rounded-md bg-[#FF8000]"
      >
        Kayıt Ol
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('')
const surname = ref('')
const email = ref('')
const username = ref('')
const password = ref('') 
const confirmPassword = ref('')

const register = async () => {
  if (password.value !== confirmPassword.value) {
    alert('Şifreler eşleşmiyor.')
    return
  }

  try {
    const response = await $fetch('https://localhost:7253/api/Account/Register', {
      method: 'POST',
      body: {
      name: name.value,
      surname: surname.value,
      email: email.value,
      username: username.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    },
    headers:{
      'Content-Type': 'application/json'
    }
  })
console.log(response);
}
  catch (error) {
    alert('Kayıt başarısız. Lütfen bilgilerinizi kontrol edin.')
  }

}
</script>

<template>
   <!-- Carousel wrapper -->
  <div id="indicators-carousel" class="relative w-full" data-carousel="static">
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <!-- Item 1 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
        <img
          src="/assets/img/altı.jpg"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 2 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="/assets/img/bes.jpg"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 3 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="/assets/img/birinci.jpg"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 4 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="/assets/img/dokuz.jpg"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 5 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="/assets/img/ikinci.jpg"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
    </div>
    <!-- Slider indicators -->
    <div
      class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2"
    >
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="true"
        aria-label="Slide 1"
        data-carousel-slide-to="0"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 2"
        data-carousel-slide-to="1"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 3"
        data-carousel-slide-to="2"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 4"
        data-carousel-slide-to="3"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 5"
        data-carousel-slide-to="4"
      ></button>
    </div>
    <!-- Slider controls -->
    <button
      type="button"
      class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
  <div>
    <div class="container mx-auto px-4 flex gap-10 flex-col">
      <!-- Çok satanlar -->
      <div class="flex flex-col items-center justify-center min-h-screen col-span-12 md:col-span-6 lg:col-span-4" style="min-height: 0vh;">
    <div class="relative flex items-end justify-center w-full py-3 block-title no-line" style="padding-top: 3.5rem;">
      <!-- Başlık -->
      <h2 class="block-title no-line text-lg font-semibold text-purple-600" style="font-size: 2rem;">ÇOK SATANLAR</h2>

      <!-- "Tümünü Gör" Linki -->
      <div class="absolute right-24">
        <a href="/" class="text-blue-500 hover:text-blue-700 font-medium">Tümünü Gör</a>
      </div>
    </div>

    <!-- Swiper Component -->
     <div class="w-full">
    <BookSlider :books="books" />
    </div>
      </div>
      <!-- Popüler yayınevleri -->
      <div
        class="flex flex-col items-center justify-center min-h-screen"
        style="min-height: 0vh"
      >
        <div class="relative flex items-end justify-center w-full py-3">
          <!-- Başlık -->
          <h2 class="block-title no-line text-lg font-semibold text-purple-600" style="font-size: 2rem;">POPÜLER YAYINEVLERİ</h2>

        </div>
        <div class="relative flex items-center justify-start lg:flex w-full py-4">
          <swiper
        class="mt-10 flex-1 lg:mt-0 xl:w-full xl:flex-none"
        :loop="true"
        slidesPerView="auto"
        :spaceBetween="10"
        :speed="4000"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="[Autoplay]"
        :breakpoints="{
          320: {
            slidesPerView: 1.7,
          },
          600: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
          1142: {
            slidesPerView: 5,
          },
        }"
        :dir="direction"
        :key="direction"
      >
        <swiper-slide
          v-for="(img, index) in imageList"
          :key="index"
        >
          <div class="flex items-center justify-center h-full">
            <img
              class="w-30 h-30 p-1 rounded-full ring-4 ring-orange-300 dark:ring-orange-500"
              :src="img.src"
              style="width: 136px; height: 136px;"
               :alt="`Image ${index + 1}`"
            />
          </div>
        </swiper-slide>
      </swiper>
        </div>
      </div>
      <!-- İndirim -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-10 py-6">
        <div>
          <img
            class="h-auto w-full rounded-lg"
            style="background-size: cover"
            src="/assets/img/stabil-kitap-2-tr.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto w-full rounded-lg"
            src="/assets/img/salon-yayinlari-1-tr.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto w-full rounded-lg"
            src="/assets/img/otantik-kitap-3-tr.jpg"
            alt=""
          />
        </div>
      </div>
      <!-- Yeni Çıkanlar -->
      <div>
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            class="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="default-styled-tab"
            data-tabs-toggle="#default-styled-tab-content"
            data-tabs-active-classes="text-purple-600 border-purple-600 dark:text-purple-500 dark:border-purple-500"
            data-tabs-inactive-classes="text-gray-500 border-transparent dark :text-gray-400 dark:border-transparent"
            role="tablist"
          >
            <li class="mr-2" role="presentation">
              <button
                class="inline-block p-4 border-b-2 rounded-t-lg active-tab"
                id="profile-styled-tab"
                data-tabs-target="#styled-profile"
                type="button"
                role="tab"
                aria-controls="styled-profile"
                aria-selected="true"
              >
                Yeni Çıkanlar
              </button>
            </li>
            <li class="mr-2" role="presentation">
              <button
                class="inline-block p-4 border-b-2 rounded-t-lg"
                id="dashboard-styled-tab"
                data-tabs-target="#styled-dashboard"
                type="button"
                role="tab"
                aria-controls="styled-dashboard"
                aria-selected="false"
              >
                Okula Yardımcı Kitaplar
              </button>
            </li>
            <li class="mr-2" role="presentation">
              <button
                class="inline-block p-4 border-b-2 rounded-t-lg"
                id="settings-styled-tab"
                data-tabs-target="#styled-settings"
                type="button"
                role="tab"
                aria-controls="styled-settings"
                aria-selected="false"
              >
                Günün Fırsatları
              </button>
            </li>
          </ul>
        </div>
        <div id="default-styled-tab-content">
          <div
            class="p-4 rounded-lg"
            id="styled-profile"
            role="tabpanel"
            aria-labelledby="profile-styled-tab"
          >
            <div
              class="flex flex-col items-center justify-start min-h-screen col-span-12 md:col-span-6 lg:col-span-4"
              style="min-height: 0vh"
            >
            <div class="w-full">
    <BookSlider :books="books" />
    </div>
            </div>
          </div>
          <div
            class="hidden p-4 rounded-lg"
            id="styled-dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-styled-tab"
          >
            <div
              class="flex flex-col items-center justify-center min-h-screen col-span-12 md:col-span-6 lg:col-span-4"
              style="min-height: 0vh"
            >
            <div class="w-full">
    <BookSlider :books="books" />
    </div>
            </div>
          </div>
          <div
            class="hidden p-4 rounded-lg"
            id="styled-settings"
            role="tabpanel"
            aria-labelledby="settings-styled-tab"
          >
            <div
              class="flex flex-col items-center justify-center min-h-screen col-span-12 md:col-span-6 lg:col-span-4"
              style="min-height: 0vh"
            >
            <div class="w-full">
    <BookSlider :books="books" />
    </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Kitap img -->
      <div class="grid gap-4">
        <div class="grid grid-cols-3 gap-10">
          <div>
            <img
              class="h-auto w-full rounded-lg"
              src="/assets/img/cok-satan-kitaplar-1-tr-1-tr.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto w-full rounded-lg"
              src="/assets/img/sinavlara-hazirlik-kitaplari-3-tr-3-tr.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto w-full rounded-lg"
              src="/assets/img/yeni-cikan-kitaplar-2-tr-2-tr.jpg"
              alt=""
            />
          </div>
        </div>
        <div>
          <img
            class="h-auto w-full rounded-lg py-5"
            src="/assets/img/cocuk-kitaplari-1-tr-1-tr.jpg"
            alt=""
          />
        </div>
      </div>
      <!-- Cardlar -->
       <div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-10 py-3">
            
        <div class="w-full p-6 bg-purple-800 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg class="object-over w-full w-7 h-7 text-orange-800 dark:text-orange-500 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 4.5C10.067 4.5 8.5 6.067 8.5 8S10.067 11.5 12 11.5 15.5 9.933 15.5 8 13.933 4.5 12 4.5zM12 10.5C11.173 10.5 10.5 9.827 10.5 9S11.173 7.5 12 7.5 13.5 8.173 13.5 9 12.827 10.5 12 10.5z"/>
    <path d="M19 2H5C4.46957 2 3.96086 2.21071 3.58579 2.58579C3.21071 2.96086 3 3.46957 3 4V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V4C21 3.46957 20.7893 2.96086 20.4142 2.58579C20.0391 2.21071 19.5304 2 19 2zM19 20H5V4H19V20z"/>
</svg>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <p class="mb-3 font-normal text-white dark:text-white">Aradığın Tüm Kitaplar</p>
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white dark:text-white">200.000+ ÇEŞİT</h5>
</div>
</div>

<div class="w-full p-6 bg-purple-800 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <svg class="object-over w-full w-7 h-7 text-orange-800 dark:text-orange-500 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">

    <path d="M3 6h14v8H3z" fill="currentColor" />
    <path d="M17 8h4v6h-4z" fill="currentColor" />
    <circle cx="6" cy="17" r="2" fill="currentColor" />
    <circle cx="18" cy="17" r="2" fill="currentColor" />
</svg>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <p class="mb-3 font-normal text-white dark:text-white">Tüm Siparişlerde</p>
        <p class="mb-3 font-normal text-white dark:text-white">Tüm Türkiye’ye</p>

        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white dark:text-white">450 TL ve Üzeri KARGO BEDAVA!</h5>
</div>
</div>
          
<div class="w-full p-6 bg-purple-800 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <!-- Card Body -->
    <rect x="2" y="5" width="20" height="14" rx="2" ry="2" fill="currentColor"/>
    <!-- Card Stripe -->
    <rect x="2" y="8" width="20" height="2" fill="#fff"/>
    <rect x="2" y="11" width="20" height="2" fill="#e0e0e0"/>
    <!-- Card Chip -->
    <rect x="16" y="9" width="4" height="4" fill="#ffcc00"/>
    <!-- Card Circles -->
    <circle cx="7" cy="16" r="1.5" fill="#fff"/>
    <circle cx="10" cy="16" r="1.5" fill="#fff"/>
</svg>

    <div class="flex flex-col justify-between p-4 leading-normal">
        <p class="mb-3 font-normal text-white dark:text-white">Alternatif Ödeme Seçenekleri</p>
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white dark:text-white">KAPIDA ÖDEME</h5>
</div>
</div>

        </div>
       </div>
       <!-- Footer -->
        <div>
<footer class="bg-purple-800 dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl g">
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 flex flex-col ">
        <div>
            <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">KATEGORİLER</h2>
            <ul class="text-white dark:text-white font-medium">
                <li class="mb-4">
                    <a href="#" class=" hover:underline">Edebiyat Kitapları</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Çocuk Kitapları</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Tarih Kitapları</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Sağlık Kitapları</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Yemek Kitapları</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">ÖNEMLİ BİLGİLER</h2>
            <ul class="text-white dark:text-white font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Teslimat Koşulları</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Üyelik Sözleşmesi</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Satış Sözleşmesi</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Garanti ve İade Koşulları</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Gizlilik ve Güvenlik</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">HIZLI ERİŞİM</h2>
            <ul class="text-white dark:text-white font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">İletişim</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Yeni Çıkan Kitaplar</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Çok Satan Kitaplar</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Müşteri Hizmetleri</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">ÜYE</h2>
            <ul class="text-white dark:text-white font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Üye Kayıt</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Giriş Yap</a>
                </li>
            </ul>
        </div>
        <div class="flex mt-4 lg:justify-end sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span class="sr-only">Discord community</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Dribbble account</span>
              </a>
        </div>
    </div>
    <div class="w-full px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span class="text-sm text-purple-600 dark:text-purple-600 sm:text-center">www.kitapdunyasi.com © Copyright 2010 - 2023 Tüm Hakları Saklıdır.
        </span>
        <span class="text-sm text-purple-600 dark:text-purple-600 sm:text-center">Mail: bilgi@kitapdunyasi.com Mersis No: 0550065200000001
        </span>
      </div>
    </div>
</footer>

        </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { initFlowbite } from "flowbite";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import BookSlider from '~/components/BookSlider.vue';

const direction = ref('ltr');

const imageList = ref([
  { src: '/_nuxt/assets/img/artemis-yayinlari-6-tr.jpg' },
  { src: '/_nuxt/assets/img/yapi-kredi-yayinlari-11-tr.jpg' },
  { src: '/_nuxt/assets/img/can-cocuk-yayinlari-14-tr.jpg' },
  { src: '/_nuxt/assets/img/destek-yayinlari-12-tr.jpg' },
  { src: '/_nuxt/assets/img/epsilon-yayinevi-8-tr.jpg' },
  { src: '/_nuxt/assets/img/indigo-kitap-4-tr.jpg' },
  { src: '/_nuxt/assets/img/is-bankasi-kultur-yayinlari-10-tr.jpg' },
  { src: '/_nuxt/assets/img/pegasus-yayinlari-9-tr.jpg' }
]);

// initialize components based on data attribute selectors
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

<style>
/* Sayfa ile ilgili stiller burada */
</style>

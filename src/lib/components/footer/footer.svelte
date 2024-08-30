<script>
  import "../../../app.css";
  import terserah from "$lib/images/logo-icon.png";
  import { onMount } from 'svelte';
  import Splide from '@splidejs/splide';
  import '@splidejs/splide/dist/css/splide.min.css';

  let splide;

  onMount(() => {
    splide = new Splide('.splide', {
      type       : 'loop',
      perPage    : 1,
      perMove    : 1,
      autoplay   : true,
      pagination : true,
      arrows     : false,
      interval   : 2500, // Set interval to 2 seconds
    }).mount();
  });
</script>

<div class="text-center mt-20 mb-20 px-50 max-w-screen-lg mx-auto">
  <h2 class="text-4xl font-bold text-gray-800 mb-10">Testimoni</h2>
  <div class="splide">
    <div class="splide__track">
      <ul class="splide__list">
        <li class="splide__slide flex justify-center items-center p-5">
          <div class="bg-orange-500 text-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:-translate-y-3 relative mx-3 max-w-md w-full h-[200px] flex flex-col justify-between">
            <div class="text-lg mb-4 flex-grow">
              <p>"This is an amazing product! I highly recommend it."</p>
            </div>
            <div class="flex items-center justify-center mt-1">
              <div class="text-left">
                <p class="font-bold text-lg">John Doe</p>
                <p class="text-gray-200 text-sm">Customer</p>
              </div>
            </div>
            <span class="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-5 h-5 bg-orange-500 rotate-45"></span>
          </div>
        </li>
        <li class="splide__slide flex justify-center items-center p-5">
          <div class="bg-orange-500 text-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:-translate-y-3 relative mx-3 max-w-md w-full h-[200px] flex flex-col justify-between">
            <div class="text-lg mb-4 flex-grow">
              <p>"Excellent service and quality. Will buy again."</p>
            </div>
            <div class="flex items-center justify-center mt-1">
              <div class="text-left">
                <p class="font-bold text-lg">Jane Smith</p>
                <p class="text-gray-200 text-sm">Client</p>
              </div>
            </div>
            <span class="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-5 h-5 bg-orange-500 rotate-45"></span>
          </div>
        </li>
        <li class="splide__slide flex justify-center items-center p-5">
          <div class="bg-orange-500 text-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:-translate-y-3 relative mx-3 max-w-md w-full h-[200px] flex flex-col justify-between">
            <div class="text-lg mb-4 flex-grow">
              <p>"Another great review here."</p>
            </div>
            <div class="flex items-center justify-center mt-1">
              <div class="text-left">
                <p class="font-bold text-lg">Emily Johnson</p>
                <p class="text-gray-200 text-sm">Customer</p>
              </div>
            </div>
            <span class="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-5 h-5 bg-orange-500 rotate-45"></span>
          </div>
        </li>
      </ul>
    </div>
    <div class="splide__pagination flex justify-center mt-8">
     
    </div>
  </div>
</div>

<a 
  href="https://wa.me/+628151852575" 
  target="_blank" 
  class="fixed bottom-10 right-4 sm:bottom-8 sm:right-8 bg-green-500 text-white py-3 px-2.5 rounded-full shadow-lg border-2 border-green-500 transition-colors duration-300 hover:bg-green-700 z-50"
>
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" class="w-7 h-7 inline-block mr-1">
</a>

<div class="text-center py-8 px-4 bg-gray-100 text-gray-800">
  <h2 class="text-2xl font-bold mb-4">Kami Adalah Desainer Terbaik Yang Tak Perlu Diragukan Lagi!</h2>
  <p class="text-base mb-4">Masih bingung? Langsung konsultasi secara GRATIS oleh tim TUAIDE.</p>
  <a 
    href="https://wa.me/+628151852575" 
    target="_blank" 
    class="bg-green-500 text-white py-2 px-4 rounded-full shadow-lg flex items-center justify-center mx-auto max-w-xs transition-colors duration-300 hover:bg-green-700"
  >
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" class="w-7 h-7 mr-2">
    <span class="font-bold text-sm">Hubungi Kami</span>
  </a>
</div>

<div class="bg-orange-500 text-black py-10 px-4 playfair-display dm-serif-text-regular">
  <h2 class="text-5xl font-bold mb-6 text-center">Why Us?</h2>
  <div class="space-y-1 mx-auto text-sm max-w-4xl">
    <div class="flex items-center mb-4">
      <p>Kami menawarkan kepada Anda wawasan baru dalam menyongsong masa depan.</p>
    </div>
    <div class="flex items-center">
      <i class="fas fa-lightbulb text-yellow-300 mr-1 mb-2"></i>
      <p>Tidak hanya untuk Memvisualisasikan.</p>
    </div>
    <div class="flex items-center">
      <p class="mb-2">Namun kita juga harus bisa memberikan inovasi.</p>
    </div>
    <div class="flex items-center">
      <i class="fas fa-lightbulb text-yellow-300 mr-1 mb-2"></i>
      <p class="mb-2">Tidak hanya Berkomunikasi.</p>
    </div>
    <div class="flex items-center">
      <p class="mb-2">Tapi kita juga harus bisa memvisualisasikan apa yang akan kita katakan.</p>
    </div>
    <div class="flex items-center">
      <i class="fas fa-lightbulb text-yellow-300 mr-1 mb-2"></i>
      <p>Tidak hanya desain.</p>
    </div>
    <div class="flex items-center">
      <p>Namun kita harus memiliki kekuatan komunikasi untuk menyampaikan pesan kepada orang yang tepat.</p>
    </div>
  </div>
</div>

<footer class="bg-gray-800 text-white py-5 px-4 text-center mt-16 relative overflow-hidden">
  <div class="mb-[0px]">
    <img src="{terserah}" alt="Company Logo" class="max-w-[100px] justify-left">
  </div>
  <div class="mt-6 font-semibold text-xs">
    <a href="#home" class="text-orange-500 hover:text-yellow-500 mx-1">Home</a>
    <a href="#about" class="text-orange-500 hover:text-yellow-500 mx-1">About Us</a>
    <a href="#portofolio" class="text-orange-500 hover:text-yellow-500 mx-1">Portofolio</a>
    <a href="#contact" class="text-orange-500 hover:text-yellow-500 mx-1">Contact</a>
  </div>
  <div class="mt-5 flex justify-center">
    <a href="https://www.facebook.com/profile.php?id=100077675104283" target="_blank" aria-label="Facebook" class="text-white hover:text-orange-500 mx-2 text-2xl">
      <i class="fab fa-facebook-f"></i>
    </a>
    <a href="https://www.instagram.com/tuaide_id?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==/" target="_blank" aria-label="Instagram" class="text-white hover:text-orange-500 mx-2 text-2xl">
      <i class="fab fa-instagram"></i>
    </a>
    <a href="mailto:menanamide@gmail.com" target="_blank" aria-label="Google" class="text-white hover:text-orange-500 mx-2 text-2xl">
      <i class="fab fa-google"></i>
    </a>
  </div>
  <div class="mt-4 text-[12px]">
    <p>&copy; 2024 Your Company Name. All rights reserved. | <a href="#privacy-policy" class="text-orange-500 hover:text-yellow-500">Privacy Policy</a></p>
  </div>
</footer>

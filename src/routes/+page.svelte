<script lang="ts">
  import { onMount } from "svelte";
  import Buttons from "$lib/components/contactButton.svelte";
  import svelteTilt from "vanilla-tilt-svelte";
  import { goto } from "$app/navigation";
  import Splide from "@splidejs/splide";
  import "@splidejs/splide/dist/css/splide.min.css";
  import { fly } from "svelte/transition";

  let splide;

  onMount(() => {
    splide = new Splide(".splide", {
      type: "loop",
      perPage: 1,
      perMove: 1,
      autoplay: true,
      pagination: true,
      arrows: false,
      interval: 2500,
    }).mount();
  });
  const clientImages = [
    "logo2.png",
    "logo3.png",
    "logo4.png",
    "logo5.png",
    "logo6.png",
    "logo7.png",
    "logo8.png",
    "logo9.png",
  ];

  export let data: {
    PortofolioImages: string[];
    folder: string;
    comments: {
      komentar: string;
      nama_customer: string;
      keterangan_customer: string;
    }[];
  };
  function handleButtonClick(folderId: string) {
    window.history.replaceState(null, "", `?folder=${folderId}`);
    goto(window.location.pathname + window.location.search);
  }

  onMount(() => {
    const buttons = document.querySelectorAll(".button-portofolio");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((btn) =>
          btn.classList.remove("active", "active-button")
        );
        button.classList.add("active", "active-button");
      });
    });
  });

  onMount(() => {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    // Mendefinisikan tinggi navbar untuk mobile dan desktop
    const defaultHeightMobile = "70px";
    const scrolledHeightMobile = "55px";
    const defaultHeightDesktop = "100px";
    const scrolledHeightDesktop = "70px";

    const isMobile = window.innerWidth < 768;
    navbar.style.height = isMobile ? defaultHeightMobile : defaultHeightDesktop;

    const handleScroll = () => {
      if (window.scrollY > 20) {
        navbar.style.height = isMobile
          ? scrolledHeightMobile
          : scrolledHeightDesktop;
        navbar.style.boxShadow = "0 2px 10px black";
      } else {
        navbar.style.height = isMobile
          ? defaultHeightMobile
          : defaultHeightDesktop;
        navbar.style.boxShadow = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  let isOpen = false;
  const toggleMenu = () => {
    isOpen = !isOpen;
  };
  function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;  
    const offset = window.innerWidth >= 768 ? 70 : 55;
    window.scrollTo({
      top: elementPosition - offset, 
      behavior: "smooth", 
    });
  }
}

</script>

<div class="w-auto h-auto main-content overflow-x-hidden">
  <!-- Navbar -->
  <nav id="navbar">
    <div
      class="container flex flex-row justify-between items-center px-4 sm:px-9 sm:w-[1000px] h-full w-full"
    >
      <!-- Logo -->
      <div class="flex items-center h-[54px] w-[99px] md:h-[]">
        <img src="/images/logo-icon.png" alt="Logo-Icon" />
      </div>

      <!-- Navbar Menu Larger Screen -->
      <div
        class="menu-navbar flex flex-row items-center space-x-4 font-Kanit font-medium text-[1rem] text-center"
      >
        <button
          on:click={() => scrollToSection("home")}
          class="relative text-black hover:text-green-600 hover:border-b-2 border-green-600 py-1 group"
          >Home</button
        >
        <button
          on:click={() => scrollToSection("our-service")}
          class="relative text-black hover:text-green-700 hover:border-b-2 border-green-700 py-1 group"
          >Our Service</button
        >
        <button
          on:click={() => scrollToSection("portofolio")}
          class="relative text-black hover:text-orange-600 hover:border-b-2 border-orange-600 py-1 group"
          >Portofolio</button
        >
        <button
          on:click={() => scrollToSection("contact")}
          class="relative text-black hover:text-orange-700 hover:border-b-2 border-orange-700 py-1 group"
          >Contact</button
        >
      </div>
      <div class="md:hidden flex items-center">
        <button on:click={toggleMenu} class=" focus:outline-none">
          <!-- Ikon Burger (3 garis horizontal) -->
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <!-- Menu yang ditampilkan ketika isOpen = true -->
      {#if isOpen}
        <div
          class="flex flex-col items-center space-y-4 absolute bg-black bg-opacity-75 top-full left-0 w-full py-4 z-40"
          in:fly={{ x: -50, duration: 300 }}
          out:fly={{ x: -50, duration: 300 }}
        >
          <button
            on:click={() => scrollToSection("home")}
            class="font-Montserrat font-medium text-lg text-white">Home</button
          >
          <button
            on:click={() => scrollToSection("our-service")}
            class="font-Montserrat font-medium text-lg text-white"
            >Our Service</button
          >
          <button
            on:click={() => scrollToSection("portofolio")}
            class="font-Montserrat font-medium text-lg text-white"
            >Portofolio</button
          >
          <button
            on:click={() => scrollToSection("contact")}
            class="font-Montserrat font-medium text-lg text-white"
            >Contact</button
          >
        </div>
      {/if}
    </div>
  </nav>

  <!-- Hero Section -->
  <div
    class="hero-section w-screen h-[105vh] md:h-[120vh] flex justify-center items-center relative"
    id="home"
  >
    <div class="overlay absolute inset-0 bg-black opacity-50"></div>
    <div
      class="flex flex-col z-10 md:h-[86vh] md:w-[1000px] px-5 items-center md:items-start md:px-10 py-10 relative"
    >
      <div class="md:w-[650px] h-full md:space-y-3 flex flex-col md:mt-5">
        <h1
          class="text-[#cecece] text-[2rem] md:text-[4rem] font-medium leading-10 md:leading-[4.2rem] mb-[20px] md:mb-3 font-Kanit"
        >
          Transformasi Merek Anda dengan Sentuhan Desain Grafis yang Memukau!
        </h1>
        <p
          class="text-[#cecece] text-xs md:text-lg pr-10 font-Kanit font-light leading-[1.1rem] mb-2 md:mb-0"
        >
          Butuh visual yang memukau? <br />
          Tuaide siap membantu. Dengan tim desainer profesional, kami akan menerjemahkan
          visi Anda menjadi desain grafis yang kuat dan efektif. <br />
          Biarkan kami menjadi partner kreatifmu.
        </p>
        <div class="pt-[10px]">
          <Buttons />
        </div>
      </div>
    </div>
  </div>

  <!-- Layanan Kami Section -->
  <div
    class="mx-auto justify-center text-center pt-10 pb-10 w-full"
    id="our-service"
  >
    <h1 class="text-2xl font-Kanit font-bold md:text-4xl">Layanan Kami</h1>
    <p
      class="mt-2 mb-5 font-ubuntu font-medium text-[0.55rem] md:text-[0.9rem] md:mt-4"
    >
      Kami menyediakan jasa desain grafis dan strategis periklanan untuk <br />
      memikat calon pembeli anda. Cari Tahu layanan yang kami tawarkan kepada anda
      disini:
    </p>
  </div>

  <!-- Tilt Image Area -->
  <div
    class="flex flex-col md:flex-row justify-center justify-items-center h-[1200px] md:h-[450px] items-center w-screen"
  >
    <!-- Service 1: Branding Logo -->
    <div
      use:svelteTilt={{
        reverse: false,
        max: 5,
        startX: 0,
        startY: 0,
        perspective: 2000,
        scale: 1.05,
        speed: 3000,
        transition: true,
        axis: null,
        reset: true,
      }}
      class="ImagesContent satu flex flex-col justify-center items-center relative md:border-0 h-full w-screen md:h-[420px] md:w-[25%] hover:z-20 bg-yellow-300"
    >
      <div class="absolute inset-0 bg-black opacity-60"></div>
      <div
        class="z-10 hover:z-50 text-white ContentImages w-full h-full flex justify-center items-center"
      >
        <div class="w-[280px] h-[200px] flex flex-col font-ubuntu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 25 25"
            stroke-width="0.5"
            stroke="white"
            class="size-14"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L20.75 4l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z"
            />
          </svg>
          <h1 class="text-3xl font-medium mb-5">Branding & Design</h1>
          <p class="text-sm font-light">
            Kami adalah penyedia layanan branding logo yang membantu menciptakan
            identitas unik dan profesional untuk bisnis Anda.
          </p>
        </div>
      </div>
    </div>

    <div
      use:svelteTilt={{
        reverse: false,
        max: 5,
        startX: 0,
        startY: 0,
        perspective: 2000,
        scale: 1.05,
        speed: 3000,
        transition: true,
        axis: null,
        reset: true,
      }}
      class="ImagesContent dua flex flex-col justify-center items-center relative md:border-0 h-full w-screen md:h-[420px] md:w-[25%] hover:z-20 bg-yellow-300"
    >
      <div class="absolute inset-0 bg-black opacity-60"></div>
      <div
        class="z-10 hover:z-50 text-white ContentImages w-full h-full flex justify-center items-center"
      >
        <div class="w-[280px] h-[200px] flex flex-col font-ubuntu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 25 25"
            stroke-width="0.5"
            stroke="white"
            class="size-14"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
          <h1 class="text-3xl font-medium mb-5">Desain Produk</h1>
          <p class="text-sm font-light">
            Kami membantu anda dalam perancangan dan membuat desain produk yang
            dapat menarik konsumen untuk anda.
          </p>
        </div>
      </div>
    </div>

    <div
      use:svelteTilt={{
        reverse: false,
        max: 5,
        startX: 0,
        startY: 0,
        perspective: 2000,
        scale: 1.05,
        speed: 3000,
        transition: true,
        axis: null,
        reset: true,
      }}
      class="ImagesContent tiga flex flex-col justify-center items-center relative md:border-0 h-full w-screen md:h-[420px] md:w-[25%] hover:z-20 bg-yellow-300"
    >
      <div class="absolute inset-0 bg-black opacity-60"></div>
      <div
        class="z-10 hover:z-50 text-white ContentImages w-full h-full flex justify-center items-center"
      >
        <div class="w-[280px] h-[200px] flex flex-col font-ubuntu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 25 25"
            stroke-width="0.5"
            stroke="white"
            class="size-14"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
          <h1 class="text-3xl font-medium mb-5">Mockup Produk</h1>
          <p class="text-sm font-light">
            Kami adalah penyedia layanan branding logo yang membantu menciptakan
            identitas unik dan profesional untuk bisnis Anda.
          </p>
        </div>
      </div>
    </div>

    <div
      use:svelteTilt={{
        reverse: false,
        max: 5,
        startX: 0,
        startY: 0,
        perspective: 2000,
        scale: 1.05,
        speed: 3000,
        transition: true,
        axis: null,
        reset: true,
      }}
      class="ImagesContent empat flex flex-col justify-center items-center relative md:border-0 h-full w-screen md:h-[420px] md:w-[25%] hover:z-20 bg-yellow-300"
    >
      <div class="absolute inset-0 bg-black opacity-60"></div>
      <div
        class="z-10 hover:z-50 text-white ContentImages w-full h-full flex justify-center items-center"
      >
        <div class="w-[280px] h-[200px] flex flex-col font-ubuntu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 25 25"
            stroke-width="0.5"
            stroke="white"
            class="size-14"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
          <h1 class="text-3xl kanit-bold text-white mb-5">Branding Logo</h1>
          <div class="text-sm kanit-medium text-white">
            Kami adalah penyedia layanan branding logo yang membantu menciptakan
            identitas unik dan profesional untuk bisnis Anda.
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Portofolio Section -->
  <!-- Header Portofolio-->
  <div class="w-full h-[120px] sm:h-[180px]" id="portofolio">
    <div class="text-center py-10">
      <h1 class="text-2xl font-Kanit font-bold md:text-4xl">Portofolio</h1>
      <p
        class="mt-2 mb-5 font-ubuntu font-medium text-[0.6rem] md:text-[0.9rem] md:mt-4"
      >
        Dibawah ini adalah lampiran project portofolio yang kami telah kerjakan.
      </p>
    </div>
  </div>
  <!-- Portofolio Section IMG  -->
  <div class="w-full sm:px-[40px] flex justify-center flex-col items-center">
    <div
      class="w-full md:w-[1000px] h-[250px] md:h-20 flex flex-col sm:flex-row items-center"
    >
      <!-- Button 1 -->
      <button
        class="button-portofolio active active-button flex flex-1 flex-col justify-center items-center sm:rounded-tl-lg sm:rounded-tr-lg w-full sm:h-full"
        id="button1"
        on:click={() => handleButtonClick("1")}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="mx-auto"
        >
          <path
            d="M12 21L12 9L6 9L6 15L12 21Z"
            fill="currentColor"
            fill-opacity="0.5"
          />
          <path d="M18 9V3H6L12 9H6V15H18L12 9H18Z" fill="currentColor" />
        </svg>
        <span class="text-xs md:text-sm font-semibold">BRANDING LOGO</span>
      </button>

      <!-- Button 2 -->
      <button
        class="button-portofolio flex flex-1 flex-col justify-center items-center sm:rounded-tl-lg sm:rounded-tr-lg w-full sm:h-full"
        id="button2"
        on:click={() => handleButtonClick("2")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-printer mx-auto"
          viewBox="0 0 17 17"
        >
          <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
          <path
            d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"
          />
        </svg>
        <span class="text-xs md:text-sm font-semibold">PRINT MEDIA</span>
      </button>

      <!-- Button 3 -->
      <button
        class="button-portofolio flex flex-1 flex-col justify-center items-center sm:rounded-tl-lg sm:rounded-tr-lg w-full sm:h-full"
        id="button3"
        on:click={() => handleButtonClick("3")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-camera mx-auto"
          viewBox="0 0 17 17"
        >
          <path
            d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 4H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 6z"
          />
          <path
            d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
          />
        </svg>
        <span class="text-xs md:text-sm font-semibold"
          >DIGITAL PHOTO PRODUCT</span
        >
      </button>

      <!-- Button 4 -->
      <button
        class="button-portofolio flex flex-1 flex-col justify-center items-center sm:rounded-tl-lg sm:rounded-tr-lg w-full sm:h-full"
        id="button4"
        on:click={() => handleButtonClick("4")}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="mx-auto"
        >
          <path
            d="M14.8284 6.34313L16.2426 4.92892L12 0.686279L7.75735 4.92892L9.17156 6.34313L12 3.51471L14.8284 6.34313Z"
            fill="currentColor"
          />
          <path
            d="M4.92892 16.2426L6.34313 14.8284L3.51471 12L6.34313 9.17156L4.92892 7.75735L0.686279 12L4.92892 16.2426Z"
            fill="currentColor"
          />
          <path
            d="M7.75735 19.0711L12 23.3137L16.2426 19.0711L14.8284 17.6568L12 20.4853L9.17156 17.6568L7.75735 19.0711Z"
            fill="currentColor"
          />
          <path
            d="M17.6568 9.17156L20.4853 12L17.6568 14.8284L19.0711 16.2426L23.3137 12L19.0711 7.75735L17.6568 9.17156Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"
            fill="currentColor"
          />
        </svg>
        <span class="text-xs md:text-sm font-semibold">WEBSITE DESIGN</span>
      </button>
    </div>

    <!-- Grid IMG  -->
    <div class="flex justify-center max-w-[1250px] mt-6">
      <div class="grid grid-cols-3 md:grid-cols-3 gap-2">
        {#each data.PortofolioImages.slice(0, 9) as img, index}
          <div class="grid-item overflow-hidden md:min-h-[350px]">
            <img
              src={img}
              alt={`Portofolio Gambar ${index + 1}`}
              class="w-full h-full hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Comennt List Testimonial -->
  <div class="mx-auto justify-center text-center mt-10 w-full">
    <h1 class="text-2xl font-Kanit font-bold md:text-4xl">Testimoni</h1>
    <p
      class="mt-2 font-ubuntu font-medium text-[0.55rem] md:text-[0.9rem] md:mt-4"
    >
      Berikut ini adalah testimoni dari client kami yang telah kami layani:
    </p>
  </div>
  <div class="flex justify-center mt-[10px]">
    <div class="splide w-full sm:w-[600px] pb-10">
      <div class="splide__track">
        <ul class="splide__list border">
          {#each data.comments as comment}
            <li class="splide__slide flex justify-center items-center p-5">
              <div
                class="bg-orange-500 text-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:-translate-y-3 relative sm:max-w-md w-[350px] sm:w-[500px] h-[200px] flex flex-col justify-between"
              >
                <div class=" text-base mb-4 flex-grow text-center font-Kanit">
                  <p>"{comment.komentar}."</p>
                </div>
                <div
                  class="flex flex-col items-center justify-center pb-3 sm:pb-0 sm: font-Kanit text-center"
                >
                  <p class="text-base">{comment.nama_customer}</p>
                  <p class="text-xs">
                    {comment.keterangan_customer}
                  </p>
                </div>
                <span
                  class="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-5 h-5 bg-orange-500 rotate-45 -z-10"
                ></span>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
  <!-- Near Footer -->
  <div class="text-center py-10 mt-4 px-4 bg-gray-100 font-Kanit" id="contact">
    <h2 class="text-2xl sm:text-3xl font-semibold mb-4">
      Kami Adalah Desainer Terbaik Yang Tak Perlu Diragukan Lagi!
    </h2>
    <p class="text-base font-light mb-4">
      Masih bingung? Langsung konsultasi secara <span class="font-bold"
        >GRATIS</span
      > oleh tim TUAIDE.
    </p>
    <a
      href="https://wa.me/+628151852575"
      target="_blank"
      class="bg-green-500 text-white py-2 px-4 rounded-full shadow-lg flex items-center justify-center mx-auto max-w-xs transition-colors duration-300 hover:bg-green-700"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        class="w-7 h-7 mr-2"
      />
      <span class="font-medium text-sm">Hubungi Kami</span>
    </a>
  </div>
  <div
    class="my-[20px] flex flex-col justify-center items-center bg-white font-Kanit"
  >
    <h2 class="text-2xl sm:text-3xl font-semibold my-4">Our Clients</h2>

    <!-- Kontainer flex yang membungkus gambar-gambar dalam dua baris -->
    <div class="max-w-[1000px] flex flex-wrap justify-center gap-5">
      {#each clientImages as image}
        <img
          src={`/images/clients/${image}`}
          alt="Logo Clients"
          class="w-1/4 max-w-[210px] max-h-[120px] object-contain"
        />
      {/each}
    </div>
  </div>
  <!-- Footer -->
  <div
    class="w-full px-4 sm:px-9 bg-[#0a0a0a] py-5 sm:py-0 sm:h-[300px] flex items-center justify-center"
  >
    <div
      class="w-full sm:w-[1000px] flex flex-row items-center justify-between"
    >
      <div
        class="flex text-white flex-1 h-[200px] sm:h-[250px]text-center font-Kanit"
      >
        <div class="flex flex-col ml-4 text-left" id="navbar">
          <div class="p-2 mb-1">
            <p>Nav Menu</p>
            <span class="block w-full h-[2px] bg-white mt-1"></span>
          </div>
          <div class="p-2 flex flex-col items-start">
            <button on:click={() => scrollToSection("our-service")}>Our Service</button>
            <button on:click={() => scrollToSection("portofolio")}>Portofolio</button>
            <button on:click={() => scrollToSection("contact")}>Contact</button>
          </div>
          
          <div>
            <a
              href="https://www.instagram.com/tuaide_id?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              class="text-white flex flex-row items-center px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 26 26"
                class="mr-2"
                style="fill:#FFFFFF;"
              >
                <path
                  d="M 7.546875 0 C 3.390625 0 0 3.390625 0 7.546875 L 0 18.453125 C 0 22.609375 3.390625 26 7.546875 26 L 18.453125 26 C 22.609375 26 26 22.609375 26 18.453125 L 26 7.546875 C 26 3.390625 22.609375 0 18.453125 0 Z M 7.546875 2 L 18.453125 2 C 21.527344 2 24 4.46875 24 7.546875 L 24 18.453125 C 24 21.527344 21.53125 24 18.453125 24 L 7.546875 24 C 4.472656 24 2 21.53125 2 18.453125 L 2 7.546875 C 2 4.472656 4.46875 2 7.546875 2 Z M 20.5 4 C 19.671875 4 19 4.671875 19 5.5 C 19 6.328125 19.671875 7 20.5 7 C 21.328125 7 22 6.328125 22 5.5 C 22 4.671875 21.328125 4 20.5 4 Z M 13 6 C 9.144531 6 6 9.144531 6 13 C 6 16.855469 9.144531 20 13 20 C 16.855469 20 20 16.855469 20 13 C 20 9.144531 16.855469 6 13 6 Z M 13 8 C 15.773438 8 18 10.226563 18 13 C 18 15.773438 15.773438 18 13 18 C 10.226563 18 8 15.773438 8 13 C 8 10.226563 10.226563 8 13 8 Z"
                ></path>
              </svg>
              <div>@Tuaide_id</div>
            </a>
          </div>
        </div>
      </div>
      <div
        class="flex justify-center flex-1 sm:w-[200px] h-[200px] sm:h-[250px]"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4901064982632!2d106.76732737604503!3d-6.585835493407773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c4ff9cab608f%3A0x2486a89bdd9f4d68!2sJl.%20Wijaya%20Kusuma%20No.11%2C%20RT.04%2FRW.12%2C%20Loji%2C%20Kec.%20Bogor%20Bar.%2C%20Kota%20Bogor%2C%20Jawa%20Barat%2016117!5e0!3m2!1sid!2sid!4v1731210245890!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Tuaide Company House"
        ></iframe>
      </div>
    </div>
  </div>
  <footer class="text-white py-4 bg-[#0a0a0a] font-Kanit">
    <div class="container mx-auto text-center">
      <p>&copy; 2024 Undimension. CV Tuai Dimensi Kreasi.</p>
    </div>
  </footer>
</div>

<style>
  nav {
    background-color: white;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    z-index: 50;
    width: 100%;
    transition:
      height 0.5s ease,
      box-shadow 0.5s ease;
  }
  .hero-section {
    background-image: url("/images/hero.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 13% 100%;
  }
  .menu-navbar {
    display: none;
  }
  .ImagesContent {
    transform-style: preserve-3d;
    transform: perspective(1000px);
    transition: all 200ms;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  /* Different content sections with respective images */
  .ImagesContent.satu {
    background-image: url("/images/content/NDS.jpg");
  }
  .ImagesContent.dua {
    background-image: url("/images/content/Bumi-Aki.jpg");
  }
  .ImagesContent.tiga {
    background-image: url("/images/content/instagram.jpg");
  }
  .ImagesContent.empat {
    background-image: url("/images/content/sos.jpg");
  }
  .ContentImages {
    transform: translateZ(50px);
  }

  .button-portofolio {
    color: #aeaeae;
    transition:
      color 300ms ease-in-out,
      fill 500ms ease-in-out;
  }
  .button-portofolio svg {
    margin-bottom: 5px;
    width: 24px;
    height: 24px;
  }
  .button-portofolio:hover {
    color: #ff6f00;
  }
  .active {
    color: #ffffff;
    background-color: #ff6f00;
    box-shadow: 0px 8px 15px 0px #faccaa;
  }
  .active-button:hover {
    color: #ffffff;
    background-color: #ff6f00;
  }
  @media (min-width: 768px) {
    .hero-section {
      background-position: center;
    }

    .menu-navbar {
      display: block;
    }
  }
</style>

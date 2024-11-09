<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  export let data: { total: number; imageUrls: string[] };
  let currentIndex = 0;
  let currentImage = '';
  let isVisible = true;
  let isFading = false;

  const updateImage = () => {
    currentIndex = (currentIndex + 1) % data.imageUrls.length;
    currentImage = data.imageUrls[currentIndex];
    isVisible = true; 
    isFading = false;
  };

  const fadeIn = () => {
    isVisible = true;
    setTimeout(() => {
      isFading = false; 
    }, 500); 
  };

  const fadeOut = () => {
    isFading = true;
    setTimeout(() => {
      updateImage();
      fadeIn(); 
    }, 500);
  };

  onMount(() => {
    if (data.imageUrls.length > 0) {
      currentImage = data.imageUrls[currentIndex];
      const interval = setInterval(() => {
        fadeOut(); 
      }, 10000); 
      fadeIn(); 
      return () => clearInterval(interval);
    }
  });

  const handlePortfolioClick = async (event: MouseEvent) => {
    event.preventDefault();
    await goto('/dashboard/portofolio');
  };

  const handleTestimonialClick = async (event: MouseEvent) => {
    event.preventDefault();
    await goto('/dashboard/testimoni');
  };
  function BacktoPages(){
    goto ('/')
  }
</script>

<style>
  .testimonial-text {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 2rem; 
    padding: 16px; 
    text-align: center; 
  }

  img {
    transition: opacity 0.6s ease-in-out; 
  }
</style>

<body class="bg-white font-Kanit">
  <div class="max-h-screen w-screen md:max-w-[1000px] md:max-h-[500px] mx-auto">
    <div class="content md:mt-10 sm:flex sm:flex-row sm:flex-wrap">
      <!-- Portfolio Button -->
      <button
        on:click={handlePortfolioClick}
        class="flex flex-row w-full h-[200px] mb-5 sm:mb-0 md:h-[300px] p-4 sm:flex-col sm:w-1/2"
        aria-label="Go to Portfolio"
      >
        <div class="relative w-full bg-white shadow-[5px_5px_0px_black] rounded-lg border-2 border-black">
          <div class="flex flex-row h-[200px] md:h-[260px]">
            <div class="w-[25%] flex flex-col justify-between py-6 md:px-2 md:pt-8 md:pb-10">
              <h2 class="text-md font-bold text-center">Portofolio</h2>
              <h3 class="text-md font-semibold text-center">Total:</h3>
              <p class="text-lg font-bold text-center">{data.total}</p>
            </div>
            <div class="w-[75%] py-2 pr-2">
              <img
                src={currentImage}
                alt="Gambar Portofolio"
                class="object-cover h-full w-full mx-auto transition-opacity duration-1000"
                class:opacity-0={isFading}
                class:opacity-100={!isFading && isVisible}
                on:transitionend={() => { if (isFading) isVisible = false; }}
              />
            </div>
          </div>
        </div>
      </button>
  
      <!-- Testimonial Button -->
      <button
        on:click={handleTestimonialClick}
        class="flex flex-row w-full h-[200px] md:h-[300px] p-4 sm:flex-col sm:w-1/2"
        aria-label="Go to Testimonials"
      >
        <div class="relative w-full bg-white shadow-[5px_5px_0px_black] border-2 border-black rounded-lg">
          <div class="h-[200px] md:h-[260px]">
            <p class="testimonial-text font-bold">Testimoni</p>
          </div>
        </div>
      </button>
    </div>
  
    <!-- Go to Landing Page Button (placed below the first two buttons) -->
    <div class="sm:mt-0 mt-5 mx-auto p-4">
      <button class="flex justify-center p-2 sm:p-4 border border-black shadow-[7px_7px_0px_black] font-Kanit hover:translate-y-1 hover:translate-x-1 hover:shadow-[3px_3px_0px_black] transition-all ease-in-out te rounded-lg" on:click={BacktoPages}>
        Back to Pages
      </button>
    </div>
  </div>
  
</body>

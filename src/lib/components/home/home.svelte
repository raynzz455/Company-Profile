<script lang="ts">
  import "../../../app.css";
  import bangor from "$lib/images/lucuanj-mirror.jpg";

  // Function to handle button click
  function handleButtonClick() {
    console.log('Button clicked'); // Add this to check if the function is being called
    window.location.href = 'https://wa.me/+628151852575';
  }
</script>


<style>
  .animated-button {
    position: relative;
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 8px 2.7rem;
    border: 4px solid transparent;
    background-color: transparent;
    border-radius: 100px;
    font-weight: 700;
    color: #cecece;
    box-shadow: 0 0 0 2px #cecece;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button svg {
    position: absolute;
    width: 24px;
    fill: #fffbfb;
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button .arr-1 {
    right: 16px;
  }

  .animated-button .arr-2 {
    left: -25%;
  }

  .animated-button .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 26px;
    height: 26px;
    background-color: #f28928;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button .text {
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button:hover {
    box-shadow: 0 0 0 12px transparent;
    color: #fff;
    border-radius: 12px;
  }

  .animated-button:hover .arr-1 {
    right: -25%;
  }

  .animated-button:hover .arr-2 {
    left: 16px;
  }

  .animated-button:hover .text {
    transform: translateX(12px);
  }

  .animated-button:hover svg {
    fill: #fff;
  }

  .animated-button:active {
    scale: 0.95;
    box-shadow: 0 0 0 4px #fff;
  }

  .animated-button:hover .circle {
    width: 220px;
    height: 220px;
    opacity: 1;
  }

  /* Media Queries for Responsive Design */

  @media (max-width: 640px) {
    .animated-button {
      padding: 6px 1.5rem;
      font-size: 0.875rem; /* text-sm */
    }

    .animated-button svg {
      width: 20px;
    }

    .animated-button .circle {
      width: 20px;
      height: 20px;
    }
  }

  @media (min-width: 641px) and (max-width: 1024px) {
    .animated-button {
      padding: 8px 2.7rem;
      font-size: 1.125rem; /* text-lg */
    }

    .animated-button svg {
      width: 24px;
    }

    .animated-button .circle {
      width: 30px;
      height: 30px;
    }

    .w-full {
      width: 100%; /* Keep width same as desktop */
    }

    .text-2xl {
      font-size: 2rem; /* Adjust font size to be similar to desktop */
    }
  }

  @media (min-width: 1025px) {
    .animated-button {
      padding: 8px 2.7rem;
    }
  }
</style>

<div class="h-[100%] w-full mx-auto relative bg-cover bg-no-repeat bg-center bg-opacity-50" style="background-image: url('/pler/lucuanj-mirror.jpg');">
  <div class="absolute inset-0 opacity-55"></div>

  <!-- Content Hero -->
  <div class="w-full max-w-6xl mx-auto h-auto flex flex-col items-center justify-center py-20 px-6 lg:py-32 lg:px-12">
    <div class="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center">
      <!-- Text Content -->
      <div class="flex flex-col lg:w-1/2 mb-[10px] lg:mb-0 lg:text-left">
        <h1 class="text-[#cecece] text-2xl lg:text-5xl mt-[2rem] font-bold leading-tight">
          Transformasi Merek Anda dengan Sentuhan Desain Grafis yang Memukau!
        </h1>
        <p class="text-[#cecece] text-sm lg:text-xl max-w-md lg:mx-0 mt-[2rem]">
          Butuh visual yang memukau? <br>
          Tuaide siap membantu. Dengan tim desainer profesional, kami akan menerjemahkan 
          visi Anda menjadi desain grafis yang <br>
          kuat dan efektif.
          Biarkan kami menjadi partner kreatifmu.
        </p>

        <!-- Button Banner -->
        <div class="mt-[2rem]">
          <button class="animated-button px-4 py-2 text-base lg:text-lg" on:click={handleButtonClick} style="outline: none;">
            <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span class="text">Contact Us</span>
            <span class="circle"></span>
            <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Dummy -->
      <div class="hidden lg:flex lg:w-1/2">
        <!-- Empty space for potential image or content -->
      </div>
    </div>
  </div>
</div>
<slot></slot>

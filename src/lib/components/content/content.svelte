<script>
      import "../../../app.css";
      import kopi from '$lib/images/star.jpeg'
      import bumi from '$lib/images/Bumi-Aki1.jpg'
      import sos from '$lib/images/instagram.jpg'
      import ipen from '$lib/images/sos.jpg'
      import svelteTilt from 'vanilla-tilt-svelte';
    </script>
    
    <style>
      /* Default Styles */
      .content {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    
      .containerImage {
        flex: 1 1 calc(25% - 1rem);
        transform-style: preserve-3d;
        transform: perspective(1000px);
        transition: all 200ms;
        position: relative;
        min-height: 450px;
        background-size: cover;
        background-position: center;
        color: white;
      }
    
      .contentImage {
        transform: translateZ(50px);
        position: absolute;
        padding: 2rem;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    
      /* Mobile (small screens) */
      @media (max-width: 600px) {
        .content {
          flex-direction: column;
        }
    
        .containerImage {
          width: 100%;
          min-height: 300px;
        }
    
        .contentImage {
          padding: 1rem;
        }
      }
    
      /* Tablet (medium screens) */
      @media (min-width: 601px) and (max-width: 900px) {
        .content {
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
        }
    
        .containerImage {
          width: 100%;
          min-height: 350px;
        }
    
        .contentImage {
          padding: 1.875rem;
        }
    
      }
    
      /* Laptop/desktop (large screens) */
      @media (min-width: 901px) {
        .content {
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
        }
    
        .containerImage {
          width: 23%;
          min-height: 450px;
        }
    
        .contentImage {
          padding: 3rem;
          margin-top:4rem;
        }
    
      .size-14 {
        width: 24px;
        height: 24px;
      }
      }
    
    </style>
    
    <div class="main-content mx-auto w-full justify-center my-[4rem]">
      <!-- Header Content -->
      <div class="mx-auto justify-center text-center p-10">
        <h1 class="text-3xl kanit-extrabold">Layanan Kami</h1>
        <p class="mt-5 mb-5 roboto-regular text-base">Kami menyediakan jasa desain grafis dan strategis periklanan untuk <br/>
        memikat calon pembeli anda. Cari Tahu layanan yang kami tawarkan kepada anda disini:</p>
      </div>
    
      <!-- Image Content -->
      <div class="content w-[100vw] flex flex-warp">
        <div use:svelteTilt={{
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
        }} style="background-image: url('{kopi}')" class="containerImage relative flex min-h-[450px] w-1/4 bg-cover bg-no-repeat bg-right-bottom text-white hover:z-10">
          <div class="absolute inset-0 bg-black opacity-60"></div>
          <div class="contentImage absolute p-[60px] text-white md:mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" stroke-width="1" stroke="white" class="size-14 mb-5 mt-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
            <h1 class="text-3xl kanit-bold text-white mb-5">Branding Logo</h1>
            <p class="text-sm kanit-medium text-white">Kami adalah penyedia layanan branding logo yang membantu menciptakan identitas unik dan profesional untuk bisnis Anda.</p>
          </div>
        </div>
    
        <div use:svelteTilt={{
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
        }} style="background-image: url('{bumi}')" class="containerImage relative flex min-h-[450px] w-1/4 bg-cover bg-no-repeat bg-right-bottom text-white hover:z-10">
          <div class="absolute inset-0 bg-black opacity-60"></div>
          <div class="contentImage absolute p-[60px] text-white md:mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" stroke-width="1" stroke="white" class="size-14 mb-5 mt-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
            <h1 class="text-3xl kanit-bold text-white mb-5">Digital Design</h1>
            <p class="text-sm kanit-medium text-white">Kami memberikan desain digital yang menonjol dan efektif untuk meningkatkan visibilitas dan daya tarik merek Anda.</p>
          </div>
        </div>
    
        <div use:svelteTilt={{
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
        }} style="background-image: url('{sos}')" class="containerImage relative flex min-h-[450px] w-1/4 bg-cover bg-no-repeat bg-right-bottom text-white hover:z-10">
          <div class="absolute inset-0 bg-black opacity-60"></div>
          <div class="contentImage absolute p-[60px] text-white md:mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" stroke-width="1" stroke="white" class="size-14 mb-5 mt-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
            <h1 class="text-3xl kanit-bold text-white mb-5">Social Media</h1>
            <p class="text-sm kanit-medium text-white">Meningkatkan kehadiran media sosial Anda dengan desain yang menarik dan strategi konten yang efektif.</p>
          </div>
        </div>
    
        <div use:svelteTilt={{
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
        }} style="background-image: url('{ipen}')" class="containerImage relative flex min-h-[450px] w-1/4 bg-cover bg-no-repeat bg-right-bottom text-white hover:z-10">
          <div class="absolute inset-0 bg-black opacity-60"></div>
          <div class="contentImage absolute p-[60px] text-white md:mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" stroke-width="1" stroke="white" class="size-14 mb-5 mt-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
            <h1 class="text-3xl kanit-bold text-white mb-5">Digital Marketing</h1>
            <p class="text-sm kanit-medium text-white">Strategi pemasaran digital yang dirancang untuk meningkatkan jangkauan dan hasil bisnis Anda secara efektif.</p>
          </div>
        </div>
      </div>
    </div>
    
    
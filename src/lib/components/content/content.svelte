<<<<<<< HEAD
      <script>
            import "../../../app.css";
            import kopi from '$lib/images/star.jpeg'
            import bumi from '$lib/images/Bumi-Aki1.jpg'
            import sos from '$lib/images/instagram.jpg'
            import ipen from '$lib/images/sos.jpg'
            import svelteTilt from 'vanilla-tilt-svelte';
      
            </script>
                  <style>
            .hover-button svg path:nth-child(1) {
                  stroke-dasharray: 100%;
                  stroke-dashoffset: 0;  /* Nilai awal: 0 */
                  transition: stroke-dashoffset 0.3s ease-in-out;
                  position: absolute;
                  }
      
                  .hover-button:hover svg path:nth-child(1) {
                  stroke-dashoffset: 100%;
                  }
                  
                  .content{
                  justify-content: center;
                  display: flex;
                  flex-wrap: wrap;
              
                  }
                  .containerImage {
                  transform-style: preserve-3d;
                  transform: perspective(1000px);
                  transition: all 200ms;  
                  margin: auto;
                  padding: 0px;
                  }
                  .contentImage{
                  transform: translateZ(50px);
                  }
                  </style>
      
      
                        <div class="main-content mx-auto w-full justify-center my-[4rem] ">
      
                              <!--  Header Content  -->
                              <div class=" mx-auto justify-center text-center p-10">
                                    <h1 class="text-4xl kanit-extrabold">Layanan Kami</h1>
                                    <p class="mt-5 mb-5 roboto-medium">Kami menyediakan jasa desain grafis dan strategis periklanan untuk  <br/>
                                    memikat calon pembeli anda. Cari Tahu layanan yang kami tawarkan kepada anda disini:
                                    </p>
=======
<script>
      import "../../../app.css";
      import kopi from '$lib/images/star.jpeg'
      import bumi from '$lib/images/Bumi-Aki1.jpg'
      import sos from '$lib/images/instagram.jpg'
      import ipen from '$lib/images/sos.jpg'
      import svelteTilt from 'vanilla-tilt-svelte';
  
      </script>
            <style>
           .hover-buttton svg path:nth-child(1) {
            stroke-dasharray: 100%;
            stroke-dashoffset: 0;  /* Nilai awal: 0 */
            transition: stroke-dashoffset 0.3s ease-in-out;
            position: absolute;
            }
  
            .hover-button:hover svg path:nth-child(1) {
            stroke-dashoffset: 100%;
            }
            
            .content{
              margin-left: auto;
              margin-right: auto;
              justify-content: center;
              display: flex;
              flex-wrap: wrap;
              gap: 0px;
            }
            .containerImage {
              transform-style: preserve-3d;
              transform: perspective(1000px);
              transition: all 200ms;
            }
            .contentImage{
              transform: translateZ(50px);
            }
            </style>
  
  
                  <div class="main-content mx-auto w-full justify-center my-[4rem] ">
  
                        <!--  Header Content  -->
                        <div class=" mx-auto justify-center text-center p-10">
                              <h1 class="text-4xl kanit-extrabold">Layanan Kami</h1>
                              <p class="mt-5 mb-5 roboto-medium">Kami menyediakan jasa desain grafis dan strategis periklanan untuk  <br/>
                              memikat calon pembeli anda. Cari Tahu layanan yang kami tawarkan kepada anda disini:
                              </p>
                        </div>
  
                        <!--  Image Content  -->
                        <div class="content w-[100vw]">
  
                              <div use:svelteTilt ={{
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
                                style="background-image: url('{kopi}')" class="containerImage relative flex min-h-[450px] w-1/4 bg-cover bg-no-repeat bg-right-bottom text-white hover:z-10 ">
                                    <div class="absolute inset-0 bg-black opacity-60"></div>
                                    <div class="contentImage absolute p-[60px] text-white mt-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" stroke-width="1" stroke="white" class="size-14 mb-5 mt-3">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                                    </svg>                    
                                    <h1 class="text-3xl kanit-bold text-white mb-5 ">Branding Logo</h1>
                                    <p class="text-sm kanit-medium text-white">Kami adalah penyedia layanan branding logo yang membantu menciptakan identitas unik dan profesional untuk bisnis Anda.</p>
                                    </div>
>>>>>>> refs/remotes/origin/main
                              </div>
      
                              <!--  Image Content  -->
                              <div class="content w-[100vw]">
      
                                    <div use:svelteTilt ={{
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
                                    style="background-image: url('{kopi}')" class="containerImage relative flex min-h-[450px] w-1/4 bg-cover bg-no-repeat bg-right-bottom text-white hover:z-10 ">
                                          <div class="absolute inset-0 bg-black opacity-60"></div>
                                          <div class="contentImage absolute p-[60px] text-white mt-6">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" stroke-width="1" stroke="white" class="size-14 mb-5 mt-3">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                                          </svg>                    
                                          <h1 class="text-3xl kanit-bold text-white mb-5 ">Branding Logo</h1>
                                          <p class="text-sm kanit-medium text-white">Kami adalah penyedia layanan branding logo yang membantu menciptakan identitas unik dan profesional untuk bisnis Anda.</p>
                                          </div>
                                    </div>
                                    
                                    <div use:svelteTilt ={{
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
                                    style="background-image: url('{bumi}')" class="containerImage relative flex min-h-[450px] w-1/4 bg-cover bg-no-repeat bg-right-bottom text-white hover:z-10">
                                          <div class="absolute inset-0 bg-black opacity-60"></div>
                                          <div class="contentImage absolute p-[60px] text-white mt-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" stroke-width="1" stroke="white" class="size-14 mb-5 mt-3">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                                          </svg>                    
                                                <h1 class="text-3xl kanit-bold text-white mb-5">Branding Logo</h1>
                                                <p class="text-sm kanit-medium text-white">Kami adalah penyedia layanan branding logo yang membantu menciptakan identitas unik dan profesional untuk bisnis Anda.</p>
                                          </div>
                                    </div>
                                    
      
                                    <div use:svelteTilt ={{
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
                                    style="background-image: url('{sos}')" class="containerImage relative flex min-h-[450px] w-1/4 bg-cover bg-no-repeat bg-right-bottom text-white hover:z-10">
                                          <div class="absolute inset-0 bg-black opacity-60"></div>
                                          <div class="contentImage absolute p-[60px] text-white mt-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" stroke-width="1" stroke="white" class="size-14 mb-5 mt-3">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                                          </svg>                    
                                                <h1 class="text-3xl kanit-bold text-white mb-5 ">Branding Logo</h1>
                                                <p class="text-sm kanit-medium text-white">Kami adalah penyedia layanan branding logo yang membantu menciptakan identitas unik dan profesional untuk bisnis Anda.</p>
                                          </div>
                                    </div>
                                    
                                    <div use:svelteTilt ={{
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
                                    style="background-image: url('{ipen}')" class="containerImage relative flex min-h-[450px] w-1/4 bg-cover bg-no-repeat bg-right-bottom text-white hover:z-10">
                                          <div class="absolute inset-0 bg-black opacity-60"></div>
                                          <div class="contentImage absolute p-[60px] text-white mt-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" stroke-width="1" stroke="white" class="size-14 mb-5 mt-3">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                                          </svg>                    
                                                <h1 class="text-3xl kanit-bold text-white mb-5 ">Branding Logo</h1>
                                                <p class="text-sm kanit-medium text-white">Kami adalah penyedia layanan branding logo yang membantu menciptakan identitas unik dan profesional untuk bisnis Anda.</p>
                                          </div>
                                    </div>
                              </div>
      
                                    <!--  Footer Content  -->
      
                              <div class="w-full mx-auto mt-[100px] min-h-[20vh] justify-center my-20 pt-20">
      
                                    <div class="mx-auto w-3/4 flex">
      
                                          <div class=" mx-auto w-1/2 h-auto flex flex-col justify-center">        
                                          <!-- Div kiri -->
                                          <div class=" flex text-start ml-[99px]">
                                          <p class="kanit-bold text-2xl"><span class="kanit-bold  text-orange-500">Tuaide</span> adalah agensi yang berpengalaman sejak tahun 2012. 
                                                Kami berspesialis pada creative branding, marketing, animation, website & interface desain.</p>
                                          </div>
                                          </div>
      
                                          <div class=" mx-auto w-1/2 flex flex-col h-auto pt-1 text-sm ">  
                                          <!-- Div kanan -->
                                          <div class="flex">
                                                
                                                <button class="hover-button flex align-items-center text-white rounded-3xl px-5 py-3 bg-[#486c32] hover:bg-[#8ca33c] ml-5">
                                                      <div class="relative flex flex-wrap">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="icon size-6 hover:stroke-current">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                                            </svg>
                                                      </div>
                                                      <span class="ml-2 mt-[0.5px]">Penawaran Kami</span>
                                                </button>
                                                <button class="hover-button flex align-items-center text-white rounded-3xl px-5 py-3 bg-[#486c32] hover:bg-[#8ca33c] ml-10">
                                                      <div class="flex flex-wrap">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.4" class="icon size-6 hover:stroke-current">
                                                                  <line x1="0" y1="12" x2="24" y2="12" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                                                  <!---SVG2-->
                                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.4" stroke="currentColor" class="icon size-6 hover:stroke-current">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                                                  </svg>
                                                                  </div>
                                                      <span class="ml-2 mt-[0.5px]">Hubungi Kami</span>
                                                </button>
      
                                                </div>
                                          </div>              
                              </div>   
                              </div>
                  </div>
      
      <slot>
      
      </slot>
      
      
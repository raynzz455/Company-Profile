<script>
    import "../../../app.css";
    import icon from '$lib/images/logo-icon.png';
  </script>
  
  <div class=" bg-transparent mx-auto w-full justify-items-center h-[100px]">
      <div class="mx-auto max-w-8xl w-[66vw] px-2 sm:px-6 lg:px-8 ">
          <div class="relative flex items-center justify-center py-4"> <!-- Perubahan pada kelas ini -->
              <div class="mr-auto ml-10">
                  <a href="/">
                      <img class="w-[7rem] h-[4rem]" src="{icon}" alt="Logo Icon" />
                  </a>
              </div>
              <div class="hidden sm:ml-30 sm:block">
                  <div class="flex space-x-12 px-10 ubuntu-bold text-sm">
                      <!-- Contoh link dengan efek underline yang muncul saat di-hover -->
                      <a href="/" class="group relative inline-block text-[#000000]  hover:text-[#428625] whitespace-nowrap  mt-2 pb-1">
                          Home
                          <!-- Pseudo-element untuk underline -->
                          <span class="absolute bottom-0 left-0 block w-full h-0.5 bg-[#428625] scale-0 group-hover:scale-100 transform transition-transform duration-500 ease-in-out"></span>
                      </a>
                      <a href="/" class="group relative inline-block text-[#000000  hover:text-[#799B2C] whitespace-nowrap  mt-2 pb-1">
                          About Us
                          <!-- Pseudo-element untuk underline -->
                          <span class="absolute bottom-0 left-0 block w-full h-0.5 bg-[#799B2C] scale-0 group-hover:scale-100 transform transition-transform duration-500 ease-in-out"></span>
                      </a>
                      <a href="/" class="group relative inline-block text-[#000000]  hover:text-[#E1881E] whitespace-nowrap  mt-2 pb-1">
                          Portfolio
                          <!-- Pseudo-element untuk underline -->
                          <span class="absolute bottom-0 left-0 block w-full h-0.5 bg-[#E1881E] scale-0 group-hover:scale-100 transform transition-transform duration-500 ease-in-out"></span>
                      </a>
                      <a href="/" class="group relative inline-block text-[#000000]  hover:text-[#F39A4A] whitespace-nowrap  mt-2 pb-1">
                          Contact
                          <!-- Pseudo-element untuk underline -->
                          <span class="absolute bottom-0 left-0 block w-full h-0.5 bg-[#F39A4A] scale-0 group-hover:scale-100 transform transition-transform duration-500 ease-in-out"></span>
                      </a>
                  </div>
              </div>
          </div>
      </div>
  </div>
  
  
  <style>
  
  </style>
  
<script>
    import "../../../app.css";
    import bangor from "$lib/images/lucuanj-mirror.jpg"
    
  
    
  </script>
  <style>
.animated-button {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 8px 2.7rem;
  border: 4px solid;
  border-color: transparent;
  font-size: 16px;
  background-color:transparent ;
  border-radius: 100px;
  font-weight: 600;
  color: #aeaeae;
  box-shadow: 0 0 0 2px #aeaeae;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}
.animated-button svg {
  position: absolute;
  width: 24px;
  fill: #aeaeae;
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
</style>
  <!------Background-->
  <div class="h-screen w-full mx-auto relative bg-image bg-cover bg-no-repeat bg-center bg-opacity-50" style="background-image: url({bangor});">
    <div class="absolute inset-0 bg-black opacity-55 mx-auto"></div>

  <!--Content Hero-->
  <div class="w-3/4 relative mx-auto h-auto justify-center">
    <div class="mx-auto items-cemter relative py-[10rem]">
      <div class="w-3/4 mx-auto h-[800px] flex">
        <!--Text Content-->
        <div class="flex flex-col w-1/2 mx-auto">
          <h1 class="text-white text-[3rem] mb-5 roboto-bold pr-[1rem] mt-[7rem]">
            Transformasi Merek Anda dengan Sentuhan Desain Grafis yang Memukau!
          </h1>
          <p class="text-[#aeaeae] text-[1rem] roboto-bold max-w-[400px]">
            Butuh visual yang memukau? <br>
            Tuaide siap membantu. Dengan tim desainer profesional, kami akan menerjemahkan 
            visi Anda menjadi desain grafis yang  <br />
            kuat dan efektif.
            Biarkan kami menjadi partner kreatifmu.
          </p>

            <!--Button Banner-->
            <div class="w-[11rem] mt-[2.5rem]"> 
                <button class="animated-button">
                  <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
                    <path
                      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                    ></path>
                  </svg>
                  <span class="text">Contact Us</span>
                  <span class="circle"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
                    <path
                      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                    ></path>
                  </svg>
              </button>
            </div>
        </div>
        <!--dummby-->
        <div class="flex w-1/2 mx-auto">
        </div>
      






        
      <!--Close Div image banner-->
      </div>
    </div>
  </div>
  
    
  </div>
  

<slot></slot>

  
<script>
  import "../../../app.css";

  //Logo Image
  import images1 from "$lib/images/1/Asyita Cookies.jpg";
  import images2 from "$lib/images/1/baginda2.jpg";
  import images3 from "$lib/images/1/certea.jpg";
  import images4 from "$lib/images/1/GN.jpg";
  import images5 from "$lib/images/1/Hanum.jpg";
  import images6 from "$lib/images/1/logo-02-1030x745.jpg";
  import images7 from "$lib/images/1/loggo.jpg";
  import images8 from "$lib/images/1/NDS.jpg";
  import images9 from "$lib/images/1/ticau.jpg";

  //Print Media Image
  import ima1 from "$lib/images/2/400 x 130 kuntum backdrop.jpg";
  import ima2 from "$lib/images/2/Book1.jpg";
  import ima3 from "$lib/images/2/Brosur Kuntum 1.jpg";
  import ima4 from "$lib/images/2/Bumi-Aki.jpg";
  import ima5 from "$lib/images/2/FA_COVER DP BNI•cs4.jpg";
  import ima6 from "$lib/images/2/FINAL FILE DP BNI 2016.jpg";
  import ima7 from "$lib/images/2/Instagram-1.jpg";
  import ima8 from "$lib/images/2/kedai.jpg";
  import ima9 from "$lib/images/2/SSI Pay.jpg";

  //Digital Photo Image
  import incar1 from "$lib/images/3/baginda.jpg";
  import incar2 from "$lib/images/3/certea.jpg";
  import incar3 from "$lib/images/3/lipen-01.jpg";
  import incar4 from "$lib/images/3/lipen-02.jpg";
  import incar5 from "$lib/images/3/nuroll.jpg";
  import incar6 from "$lib/images/3/Packaging Tube_design_ 15ml.jpg";
  import incar7 from "$lib/images/3/Packaging Tube_design_100 • 2.jpg";
  import incar8 from "$lib/images/3/Packaging Tube_design_50 ml • 2.jpg";
  import incar9 from "$lib/images/3/silaris stationary.jpg";

  const uta = [ images1, images2, images3, images4, images5, images6, images7, images8, images9];
  const pula = [ ima1, ima2, ima3, ima4, ima5, ima6, ima7, ima8, ima9];
  const lurr = [ incar1, incar2, incar3, incar4, incar5, incar6, incar7, incar8, incar9];
 
import { onMount } from 'svelte';

let buttons;
let buttonsAndGrids = [
  { buttonId: 'button1', gridId: 'grid1' },
  { buttonId: 'button2', gridId: 'grid2' },
  { buttonId: 'button3', gridId: 'grid3' },
  { buttonId: 'button4', gridId: 'grid4' }
];

onMount(() => {
  buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.button').forEach(btn => btn.classList.remove('active','active-button'));
      button.classList.add('active','active-button');
      buttonsAndGrids.forEach(item => {
        const grid = document.getElementById(item.gridId);
        if (grid) {
          grid.classList.add('transition');
          grid.classList.toggle('non-active-grid', item.buttonId !== button.id);
        }
      });
    });
  });
});
</script>
  <style>
  .button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-grow: 1;
    height: 100%;
    padding: 0.25rem;
    border: 1px solid currentColor; 
    color: #aeaeae;
    transition: color 300ms ease-in-out, fill 500ms ease-in-out;
  }
  .button:hover {
    color: #ff6f00; 
  }
  .button svg:hover {
    fill: #ff6f00; 
  }
  .active{
    color: #ffffff; 
    background-color: #ff6f00;
    box-shadow: #ff6f00;
  }
  .active-button:hover {
    color: #ffffff; 
    background-color: #ff6f00;
    box-shadow: #ff6f00;
  }
  
  .non-active-grid{
    display: none;
  }
  .transition-grid {
transition: display 0.3s ease-in-out;
}

  </style>
  <div class="mx-auto w-full h-auto">
    <div class="w-3/4 h-auto mx-auto "> 

     <!--  Header Content  -->
    <div class=" mx-auto justify-center text-center p-10">
        <h1 class="text-4xl font-bold ">Portofolio</h1>
        <p class="m-5"> Dibawah ini adalah lampiran project portofolio yang kami telah kerjakan.
        </p>
    </div>

 </div>
    
    <!--Navbar-->
    <div class="w-3/4 h-auto mx-auto "> 
    <div class="mx-auto justify-center h-[13vh]">
        <div class="relative mx-auto w-3/4 h-[8vh] mt-[5vh] flex flex-wrap">
                <button class="button active active-button" id="button1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto">
                      <path d="M12 21L12 9L6 9L6 15L12 21Z" fill="currentColor" fill-opacity="0.5"/>
                      <path d="M18 9V3H6L12 9H6V15H18L12 9H18Z" fill="currentColor" />
                    </svg>
                    <span class="text-sm ">Branding Logo</span>  
                </button>
                     
                <button class="button" id="button2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-printer mx-auto " viewBox="0 0 17 17">
                      <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                      <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"/>
                    </svg>
                    <span class=" text-sm">print media</span>
                </button>

              <button class="button" id="button3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-camera mx-auto" viewBox="0 0 17 17">
                      <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"/>
                      <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                    </svg>
                    <span class=" text-sm">digital photo product</span>
            </button>
            
            <button class="button" id="button4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto">
                      <path d="M14.8284 6.34313L16.2426 4.92892L12 0.686279L7.75735 4.92892L9.17156 6.34313L12 3.51471L14.8284 6.34313Z" fill="currentColor" />
                      <path d="M4.92892 16.2426L6.34313 14.8284L3.51471 12L6.34313 9.17156L4.92892 7.75735L0.686279 12L4.92892 16.2426Z" fill="currentColor" />
                      <path d="M7.75735 19.0711L12 23.3137L16.2426 19.0711L14.8284 17.6568L12 20.4853L9.17156 17.6568L7.75735 19.0711Z" fill="currentColor" />
                      <path d="M17.6568 9.17156L20.4853 12L17.6568 14.8284L19.0711 16.2426L23.3137 12L19.0711 7.75735L17.6568 9.17156Z" fill="currentColor" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z" fill="currentColor" />
                    </svg>
                <span class="text-sm">website design</span>
            </button>
          </div>
          
          
      </div>
    <!--Image-->
      <div class="mx-auto border">
      <div class="relative mx-auto border w-3/4 h-auto">

        <!---Logo-->
        <div class="grid grid-cols-3 gap-8" id="grid1">
          {#each uta as un, i}
            <div class="relative h-[320px] group">
              <div class="w-full h-full overflow-hidden">
                <img class="w-full h-full object-cover object-center transition-transform duration-[350ms] group-hover:scale-110" src={un} alt="Gambar Portofolio Logo" />
              </div>
            </div>
          {/each}
        </div>

        <!---Print Media-->
        <div class="grid grid-cols-3 gap-10 non-active-grid transition-grid" id="grid2">
          {#each pula as pu, i}
            <div class="relative h-[320px] group ">
              <div class="w-full h-full overflow-hidden">
                <img class="w-full h-full object-cover object-center transition-transform duration-[350ms] group-hover:scale-110" src={pu} alt="Gambar Portofolio Print Media" />
              </div>
            </div>
          {/each}
        </div>

        <!--Digial Photo Product-->
        <div class="grid grid-cols-3 gap-10 non-active-grid transition-grid" id="grid3">
          {#each lurr as lu, i}
            <div class="relative h-[320px] group">
              <div class="w-full h-full overflow-hidden">
                <img class="w-full h-full object-cover object-center transition-transform duration-[350ms] group-hover:scale-110" src={lu} alt="Gambar Portofolio Digital" />
              </div>
            </div>
          {/each}
        </div>

        <!---Website-->
        <div class="grid grid-cols-3 gap-10 non-active-grid transition-grid" id="grid4">
          {#each lurr as lu, i}
            <div class="relative h-[320px] group">
              <div class="w-full h-full overflow-hidden">
                <img class="w-full h-full object-cover object-center transition-transform duration-[350ms] group-hover:scale-110" src={lu} alt="Gambar Portofolio Website" />
              </div>
            </div>
          {/each}
        </div>


        
        
        
        
        

      </div>

      </div>

    </div>


































</div>
<slot>

</slot>
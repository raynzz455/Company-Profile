<script>
  import "../../../app.css";

  // Import images
  import images1 from "$lib/images/1/Asyita Cookies.jpg";
  import images2 from "$lib/images/1/baginda2.jpg";
  import images3 from "$lib/images/1/certea.jpg";
  import images4 from "$lib/images/1/GN.jpg";
  import images5 from "$lib/images/1/Hanum.jpg";
  import images6 from "$lib/images/1/logo-02-1030x745.jpg";
  import images7 from "$lib/images/1/loggo.jpg";
  import images8 from "$lib/images/1/NDS.jpg";
  import images9 from "$lib/images/1/ticau.jpg";

  import ima1 from "$lib/images/2/400 x 130 kuntum backdrop.jpg";
  import ima2 from "$lib/images/2/Book1.jpg";
  import ima3 from "$lib/images/2/Brosur Kuntum 1.jpg";
  import ima4 from "$lib/images/2/Bumi-Aki.jpg";
  import ima5 from "$lib/images/2/FA_COVER DP BNI•cs4.jpg";
  import ima6 from "$lib/images/2/FINAL FILE DP BNI 2016.jpg";
  import ima7 from "$lib/images/2/Instagram-1.jpg";
  import ima8 from "$lib/images/2/kedai.jpg";
  import ima9 from "$lib/images/2/SSI Pay.jpg";

  import incar1 from "$lib/images/3/baginda.jpg";
  import incar2 from "$lib/images/3/certea.jpg";
  import incar3 from "$lib/images/3/lipen-01.jpg";
  import incar4 from "$lib/images/3/lipen-02.jpg";
  import incar5 from "$lib/images/3/nuroll.jpg";
  import incar6 from "$lib/images/3/Packaging Tube_design_ 15ml.jpg";
  import incar7 from "$lib/images/3/Packaging Tube_design_100 • 2.jpg";
  import incar8 from "$lib/images/3/Packaging Tube_design_50 ml • 2.jpg";
  import incar9 from "$lib/images/3/silaris stationary.jpg";

  const uta = [images1, images2, images3, images4, images5, images6, images7, images8, images9];
  const pula = [ima1, ima2, ima3, ima4, ima5, ima6, ima7, ima8, ima9];
  const lurr = [incar1, incar2, incar3, incar4, incar5, incar6, incar7, incar8, incar9];

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
      console.log(`Button ${button.id} clicked`);
      document.querySelectorAll('.button').forEach(btn => btn.classList.remove('active', 'active-button'));
      button.classList.add('active', 'active-button');
      buttonsAndGrids.forEach(item => {
        const grid = document.getElementById(item.gridId);
        if (grid) {
          console.log(`Toggling ${item.gridId}`);
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
    flex-direction:row;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-grow: 1;
    padding: 0.25rem;
    color: #aeaeae;
    transition: color 300ms ease-in-out, fill 500ms ease-in-out;
    min-width: 120px; /* Minimum lebar tombol */
    margin: 0.5rem;
  }

  .button:hover {
    color: #ff6f00; 
  }
  .button svg :hover {
    fill: #ff6f00; 
  }
  .active {
    color: #ffffff; 
    background-color: #ff6f00;
    box-shadow: 0px 8px 15px 0px #faccaa;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
  }
  .active-button:hover {
    color: #ffffff; 
    background-color: #ff6f00;
  }
  .non-active-grid {
  display: none !important;
}
.transition-grid {
  transition: all 0.3s ease-in-out;
}


  /* Gambar Grid */
  .grid-item {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1; /* Menjaga rasio aspek gambar agar tetap kotak */
  overflow: hidden;
  display: flex; /* Memastikan semua grid item memiliki fleksibilitas */
  align-items: center; /* Menyelaraskan gambar secara vertikal di tengah */
  justify-content: center; /* Menyelaraskan gambar secara horizontal di tengah */
  border: 1px solid #ddd; /* Menambahkan border ringan untuk visualisasi */
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Menjaga proporsi gambar dengan mengisi elemen secara penuh */
  object-position: center;
  transition: transform 350ms ease-in-out;
}

.grid-item:hover img {
  transform: scale(1.1); /* Zoom effect on hover */
}

.non-active-grid {
  display: none;
}

.transition-grid {
  transition: display 0.3s ease-in-out;
}

</style>

<div class="mx-auto w-full h-auto">
  <div class="w-full max-w-7xl mx-auto px-4"> 

    <!-- Header Content -->
    <div class="text-center py-10">
      <h1 class="text-3xl md:text-4xl font-bold">Portofolio</h1>
      <p class="mt-4 text-sm md:text-base">Dibawah ini adalah lampiran project portofolio yang kami telah kerjakan.</p>
    </div>

    <!-- Navbar -->
    <div class="text-center mb-8">
      <div class="flex flex-wrap justify-center space-x-4">
        <!-- Buttons -->
        <button class="button active active-button" id="button1">
          <!-- SVG Icon -->
          <span class="text-xs md:text-sm font-semibold">BRANDING LOGO</span>  
        </button>
        <button class="button" id="button2">
          <!-- SVG Icon -->
          <span class="text-xs md:text-sm font-semibold">PRINT MEDIA</span>
        </button>
        <button class="button" id="button3">
          <!-- SVG Icon -->
          <span class="text-xs md:text-sm font-semibold">DIGITAL PHOTO PRODUCT</span>
        </button>
        <button class="button" id="button4">
          <!-- SVG Icon -->
          <span class="text-xs md:text-sm font-semibold">WEBSITE DESIGN</span>
        </button>
      </div>
    </div>

    <!-- Image Grids -->
    <div class="mx-auto">
      <div class="relative mx-auto w-full max-w-7xl">

        <!-- Logo -->
        <div class="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-2" id="grid1">
          {#each uta as un, i}
            <div class="grid-item">
              <img src={un} alt="Gambar Portofolio Logo" />
            </div>
          {/each}
        </div>

       <!-- Print Media -->
<div class="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-8 non-active-grid transition-grid" id="grid2">
  {#each pula as pu, i}
    <div class="grid-item">
      <img src={pu} alt="Gambar Portofolio Print Media" />
    </div>
  {/each}
</div>


        <!-- Digital Photo Product -->
        <div class="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-8 non-active-grid transition-grid" id="grid3">
          {#each lurr as lu, i}
            <div class="grid-item">
              <img src={lu} alt="Gambar Portofolio Digital" />
            </div>
          {/each}
        </div>

        <!-- Website -->
        <div class="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-8 non-active-grid transition-grid" id="grid4">
          {#each lurr as lu, i}
            <div class="grid-item">
              <img src={lu} alt="Gambar Portofolio Website" />
            </div>
          {/each}
        </div>

      </div>
    </div>

  </div>
</div>

<slot></slot>

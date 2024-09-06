<script>
    import "../app.css";
    import Navbar from '$lib/components/navbars/nav.svelte';
    import Stroke from '$lib/components/navbars/stroke.svelte';
  </script>
  <div class="w-full overflow-hidden">
  <Navbar />
  <div class="z-70">
    <Stroke />
  </div>
  

  <!-- Konten lain dari layout Anda -->
  <slot>
  </slot>
</div>
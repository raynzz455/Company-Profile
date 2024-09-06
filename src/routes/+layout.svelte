<script>
    import "../app.css";
    import Navbar from '$lib/components/navbars/nav.svelte';
  </script>
  <div class="w-full overflow-hidden">
  <Navbar />
  <slot>
  </slot>
</div>
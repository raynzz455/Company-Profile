<script lang="ts">
  import "../../app.css";
  export let data;
  let isOpen = false;

  $: ({ supabase } = data);

  $: logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
    } else {
      alert("Anda telah logout");
      window.location.href = "/";
    }
  };

  function toggleDropdown() {
    isOpen = !isOpen;
  }
</script>

  <nav
    class="mx-auto h-[50px] border-b flex items-center justify-between px-4 sm:max-w-[1000px] sm:min-h-[80px] font-Kanit"
  >
    <img
      src="/images/logo-icon.png"
      alt="logo"
      class="max-w-[65%] max-h-[65%]"
    />
    <div class="relative sm:hidden">
      <button
        on:click={toggleDropdown}
        class="text-black font-medium rounded-lg text-sm py-4 text-center inline-flex items-center"
      >
        Menu
        <svg
          class="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {#if isOpen}
        <div
          class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20"
        >
          <a
            href="/dashboard"
            class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Dashboard</a
          >
          <button
            on:click={logout}
            class="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
            >Logout</button
          >
        </div>
      {/if}
    </div>
    <div class="hidden sm:flex space-x-4">
      <a href="/dashboard" class="text-black">Dashboard</a>
      <button on:click={logout} class="text-black">Logout</button>
    </div>
  </nav>
  <slot />

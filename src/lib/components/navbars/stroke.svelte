<script lang="ts">
    import "../../../app.css";
    import icon from '$lib/images/logo-icon.png';
    import Home from '$lib/components/home/home.svelte';
    import About from '$lib/components/content/content.svelte';
    import Portfolio from '$lib/components/portofolio/portofolio.svelte';
    import Contact from '$lib/components/footer/footer.svelte';

    let isMenuOpen = false;
    let padding = 'p-4';  // Padding default
    let isScrolled = false;

    function toggleMenu(): void {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }
    }

    function handleClickOutside(event: MouseEvent): void {
        const dropdown = document.querySelector('.dropdown-menu') as HTMLElement | null;
        const button = document.querySelector('.dropdown-button') as HTMLElement | null;
        if (dropdown && button) {
            if (!dropdown.contains(event.target as Node) && !button.contains(event.target as Node)) {
                isMenuOpen = false;
                document.removeEventListener('click', handleClickOutside);
            }
        }
    }

    function handleScroll() {
        const threshold = 50;  // Anda bisa menyesuaikan nilai ini sesuai kebutuhan
        if (window.scrollY > threshold) {
            if (!isScrolled) {
                isScrolled = true;
                padding = 'p-2';  // Padding setelah scroll
            }
        } else {
            if (isScrolled) {
                isScrolled = false;
                padding = 'p-4';  // Padding default
            }
        }
    }

    import { onMount } from 'svelte';
    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
</script>

<style>
    .transition-padding {
  transition: padding 0.3s ease-in-out;
}

.fixed-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: translateY(-100%); /* Sembunyikan navbar dengan cara ini */
  transition: transform 0.3s ease;
}

.fixed-navbar.visible {
  transform: translateY(0); /* Tampilkan navbar */
}
</style>

<div class={`fixed top-0 left-0 w-full bg-white shadow-lg z-50 ubuntu-bold transition-padding ${padding}`}>
    <div class="container mx-auto flex items-center justify-between px-4">
        <!-- Logo -->
        <div class="flex items-center">
            <img class="w-20 h-12 sm:w-28 sm:h-16 mr-4" src="{icon}" alt="Logo Icon" />
        </div>

        <!-- Dropdown menu button for mobile -->
        <div class="block sm:hidden relative flex items-center">
            <button on:click={toggleMenu} class="text-black focus:outline-none dropdown-button">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
            <!-- Dropdown menu for mobile -->
            <div class={`absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'} dropdown-menu`}>
                <a href="#home" class="block px-4 py-2 text-sm text-black hover:bg-gray-200">Home</a>
                <a href="#about" class="block px-4 py-2 text-sm text-black hover:bg-gray-200">About Us</a>
                <a href="#portfolio" class="block px-4 py-2 text-sm text-black hover:bg-gray-200">Portfolio</a>
                <a href="#contact" class="block px-4 py-2 text-sm text-black hover:bg-gray-200">Contact</a>
            </div>
        </div>

        <!-- Menu for larger screens -->
        <div class="hidden sm:flex space-x-12">
            <a href="#home" class="relative text-black hover:text-green-600 group">
                Home
                <span class="absolute bottom-0 left-0 block w-full h-0.5 bg-green-600 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
            </a>
            <a href="#about" class="relative text-black hover:text-green-700 group">
                About Us
                <span class="absolute bottom-0 left-0 block w-full h-0.5 bg-green-700 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
            </a>
            <a href="#portfolio" class="relative text-black hover:text-orange-600 group">
                Portfolio
                <span class="absolute bottom-0 left-0 block w-full h-0.5 bg-orange-600 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
            </a>
            <a href="#contact" class="relative text-black hover:text-orange-700 group">
                Contact
                <span class="absolute bottom-0 left-0 block w-full h-0.5 bg-orange-700 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
            </a>
        </div>
    </div>
</div>

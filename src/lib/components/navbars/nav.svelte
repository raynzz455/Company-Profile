<script lang="ts">
    import "../../../app.css";
    import { onMount } from 'svelte';
    import icon from '$lib/images/logo-icon.png';
    import Home from '$lib/components/home/home.svelte';
    import About from '$lib/components/content/content.svelte';
    import Portfolio from '$lib/components/portofolio/portofolio.svelte';
    import Contact from '$lib/components/footer/footer.svelte';

    let isMenuOpen = false;

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

    onMount(() => {
    const header = document.querySelector('.header') as HTMLElement | null;

    function handleScroll() {
        if (window.scrollY > 50) { // Sesuaikan nilai ini sesuai kebutuhan
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Remove event listener on component destroy
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
});
</script>

<style>
    .dropdown-menu {
        position: absolute;
        top: 100%; /* Position the dropdown menu below the button */
        right: 0;
        margin-top: 0.5rem;
        width: 12rem; /* Width of the dropdown menu */
        background-color: white;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 0.5rem;
        z-index: 2000; /* Ensure dropdown is above other elements */
        opacity: 0; /* Start with opacity 0 */
        transform: translateY(-10px); /* Initial position slightly above the button */
        transition: opacity 0.3s ease, transform 0.3s ease; /* Transition for opacity and transform */
    }

    .dropdown-menu.show {
        opacity: 1; /* Full opacity when visible */
        transform: translateY(0); /* Move dropdown to normal position */
    }

    .dropdown-menu.hide {
        opacity: 0; /* Zero opacity when hidden */
        transform: translateY(-10px); /* Dropdown stays slightly above button */
    }

    .dropdown-button {
        position: relative;
    }

    /* Padding untuk header dan elemen lain */
.header {
    padding: 10px 0.1rem; /* Padding default */
    transition: padding 0.3s ease; /* Transisi padding */
}

.header.scrolled {
    padding: 0.1vh 0.2rem; /* Padding saat scroll lebih kecil */
}

/* Padding untuk div utama agar konsisten dengan header */
.bg-padding {
    padding: 10px; /* Padding default sama dengan header */
    /* Responsif */
    @media (min-width: 768px) {
        padding: 8vh 1rem; /* Contoh padding untuk perangkat lebih besar */
    }
}

@media (max-width: 1024px) {
        .header {
            padding: 20px; /* Padding untuk laptop */
        }
        
        .bg-padding {
            padding: 68px; /* Padding lebih kecil untuk laptop */
        }
    }

    @media (max-width: 480px) {
        .header {
            padding: 4px 0.5rem; /* Padding lebih kecil untuk ponsel */
        }

        .bg-padding {
            padding: 40px 0.5rem; /* Padding lebih kecil untuk ponsel */
        }

        .dropdown-menu {
            width: 20rem; /* Lebar dropdown menu untuk ponsel */
        }
    }

</style>

<div class="bg-white bg-padding">
    <div class="header fixed top-0 left-0 w-full bg-white shadow-lg z-50 ubuntu-bold">
        <div class="container mx-auto flex items-center justify-between p-4">
            <!-- Logo -->
            <div class="flex items-center">
                <img class="w-20 h-12 sm:w-28 sm:h-16 mr-4" src="{icon}" alt="Logo Icon" />
            </div>

            <!-- Menu for larger screens -->
            <div class="hidden md:flex space-x-12">
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

            <!-- Dropdown menu button for mobile -->
            <div class="relative flex items-center md:hidden">
                <button on:click={toggleMenu} class="text-black focus:outline-none dropdown-button">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                <!-- Dropdown menu for mobile -->
                <div class={`absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'show' : 'hide'} dropdown-menu`}>
                    <a href="#home" class="block px-4 py-2 text-sm text-black hover:bg-gray-200">Home</a>
                    <a href="#about" class="block px-4 py-2 text-sm text-black hover:bg-gray-200">About Us</a>
                    <a href="#portfolio" class="block px-4 py-2 text-sm text-black hover:bg-gray-200">Portfolio</a>
                    <a href="#contact" class="block px-4 py-2 text-sm text-black hover:bg-gray-200">Contact</a>
                </div>
            </div>
        </div>
    </div>
</div>

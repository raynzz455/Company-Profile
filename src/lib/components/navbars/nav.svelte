<script>
    import "../../../app.css";
    import icon from '$lib/images/logo-icon.png';

    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    // Menutup menu jika klik di luar dropdown
    document.addEventListener('click', (event) => {
        const isClickInside = document.querySelector('.dropdown-container')?.contains(event.target);
        if (!isClickInside) {
            isMenuOpen = false;
        }
    });
</script>

<style>
    @media (max-width: 640px) {
        .logo {
            width: 5rem;
            height: 3rem;
        }
    }
</style>

<div class="bg-transparent mx-auto w-full h-[100px]">
    <div class="mx-auto max-w-8xl w-[66vw] px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between py-4">
            <!-- Logo -->
            <div class="flex items-center">
                <img class="logo w-[7rem] h-[4rem]" src="{icon}" alt="Logo Icon" />
            </div>
            <!-- Dropdown menu button for mobile -->
            <div class="relative block sm:hidden ml-auto dropdown-container">
                <button on:click={toggleMenu} class="text-[#000000] focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                <!-- Dropdown menu for mobile -->
                <div class={`absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg transition-transform duration-300 ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} z-50`}>
                    <a href="/" class="block px-4 py-2 text-sm text-[#000000] hover:bg-[#F3F4F6]">Home</a>
                    <a href="/" class="block px-4 py-2 text-sm text-[#000000] hover:bg-[#F3F4F6]">About Us</a>
                    <a href="/" class="block px-4 py-2 text-sm text-[#000000] hover:bg-[#F3F4F6]">Portfolio</a>
                    <a href="/" class="block px-4 py-2 text-sm text-[#000000] hover:bg-[#F3F4F6]">Contact</a>
                </div>
            </div>
            <!-- Menu for larger screens -->
            <div class="hidden sm:flex space-x-12 px-10 ubuntu-bold text-sm">
                <a href="/" class="group relative inline-block text-[#000000] hover:text-[#428625] whitespace-nowrap mt-2 pb-1">
                    Home
                    <span class="absolute bottom-0 left-0 block w-full h-0.5 bg-[#428625] scale-0 group-hover:scale-100 transform transition-transform duration-500 ease-in-out"></span>
                </a>
                <a href="/" class="group relative inline-block text-[#000000] hover:text-[#799B2C] whitespace-nowrap mt-2 pb-1">
                    About Us
                    <span class="absolute bottom-0 left-0 block w-full h-0.5 bg-[#799B2C] scale-0 group-hover:scale-100 transform transition-transform duration-500 ease-in-out"></span>
                </a>
                <a href="/" class="group relative inline-block text-[#000000] hover:text-[#E1881E] whitespace-nowrap mt-2 pb-1">
                    Portfolio
                    <span class="absolute bottom-0 left-0 block w-full h-0.5 bg-[#E1881E] scale-0 group-hover:scale-100 transform transition-transform duration-500 ease-in-out"></span>
                </a>
                <a href="/" class="group relative inline-block text-[#000000] hover:text-[#F39A4A] whitespace-nowrap mt-2 pb-1">
                    Contact
                    <span class="absolute bottom-0 left-0 block w-full h-0.5 bg-[#F39A4A] scale-0 group-hover:scale-100 transform transition-transform duration-500 ease-in-out"></span>
                </a>
            </div>
        </div>
    </div>
</div>

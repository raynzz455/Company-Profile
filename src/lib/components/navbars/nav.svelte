<script>
    import "../../../app.css";
    import icon from '$lib/images/logo-icon.png';

    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }
    }

    function handleClickOutside(event) {
        const dropdown = document.querySelector('.dropdown-menu');
        const button = document.querySelector('.dropdown-button');
        if (dropdown && !dropdown.contains(event.target) && !button.contains(event.target)) {
            isMenuOpen = false;
            document.removeEventListener('click', handleClickOutside);
        }
    }
</script>

<div class="bg-transparent mx-auto w-full h-[100px] relative">
    <div class="mx-auto max-w-8xl w-[66vw] px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between py-4">
            <!-- Logo -->
            <div class="flex items-center">
                <img class="w-20 h-12 sm:w-[7rem] sm:h-[4rem] mr-4" src="{icon}" alt="Logo Icon" />
            </div>
            <!-- Dropdown menu button for mobile -->
            <div class="block sm:hidden relative z-50 flex items-center ml-auto dropdown-button">
                <button on:click={toggleMenu} class="text-[#000000] focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                <!-- Dropdown menu for mobile -->
                <div class={`absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg transition-transform transform ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'} dropdown-menu`} style="z-index: 100; transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;">
                    <a href="/" class="block px-4 py-2 text-sm text-[#000000] hover:bg-[#F3F4F6]">Home</a>
                    <a href="/" class="block px-4 py-2 text-sm text-[#000000] hover:bg-[#F3F4F6]">About Us</a>
                    <a href="/" class="block px-4 py-2 text-sm text-[#000000] hover:bg-[#F3F4F6]">Portfolio</a>
                    <a href="/" class="block px-4 py-2 text-sm text-[#000000] hover:bg-[#F3F4F6]">Contact</a>
                </div>
            </div>
            <!-- Menu for larger screens -->
            <div class="hidden sm:flex space-x-12 px-10 ubuntu-bold text-sm">
                <a href="/" class="relative inline-block text-[#000000] hover:text-[#428625] whitespace-nowrap mt-2 pb-1 group">
                    Home
                    <span class="absolute bottom-0 left-0 block w-full h-0.5 bg-[#428625] scale-0 group-hover:scale-100 transform transition-transform duration-500 ease-in-out"></span>
                </a>
                <a href="/" class="relative inline-block text-[#000000] hover:text-[#799B2C] whitespace-nowrap mt-2 pb-1 group">
                    About Us
                    <span class="absolute bottom-0 left-0 block w-full h-0.5 bg-[#799B2C] scale-0 group-hover:scale-100 transform transition-transform duration-500 ease-in-out"></span>
                </a>
                <a href="/" class="relative inline-block text-[#000000] hover:text-[#E1881E] whitespace-nowrap mt-2 pb-1 group">
                    Portfolio
                    <span class="absolute bottom-0 left-0 block w-full h-0.5 bg-[#E1881E] scale-0 group-hover:scale-100 transform transition-transform duration-500 ease-in-out"></span>
                </a>
                <a href="/" class="relative inline-block text-[#000000] hover:text-[#F39A4A] whitespace-nowrap mt-2 pb-1 group">
                    Contact
                    <span class="absolute bottom-0 left-0 block w-full h-0.5 bg-[#F39A4A] scale-0 group-hover:scale-100 transform transition-transform duration-500 ease-in-out"></span>
                </a>
            </div>
        </div>
    </div>
</div>

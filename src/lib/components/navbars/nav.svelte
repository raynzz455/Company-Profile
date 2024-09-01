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

<div class="fixed top-0 left-0 w-full bg-white/95 shadow-lg z-50 ubuntu-bold">
    <div class="container mx-auto flex items-center justify-between p-4">
        <!-- Logo -->
        <div class="flex items-center">
            <img class="w-20 h-12 sm:w-28 sm:h-16 mr-4" src="{icon}" alt="Logo Icon" />
        </div>

        <!-- Dropdown menu button for mobile -->
        <div class="block sm:hidden relative flex items-center">
            <button on:click={toggleMenu} class="text-black focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
            <!-- Dropdown menu for mobile -->
            <div class={`absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'} dropdown-menu`}>
                <a href="/" class="block px-4 py-2 text-sm text-black hover:bg-gray-200">Home</a>
                <a href="/" class="block px-4 py-2 text-sm text-black hover:bg-gray-200">About Us</a>
                <a href="/" class="block px-4 py-2 text-sm text-black hover:bg-gray-200">Portfolio</a>
                <a href="/" class="block px-4 py-2 text-sm text-black hover:bg-gray-200">Contact</a>
            </div>
        </div>

        <!-- Menu for larger screens -->
        <div class="hidden sm:flex space-x-12">
            <a href="/" class="relative text-black hover:text-green-600 group">
                Home
                <span class="absolute bottom-0 left-0 block w-full h-0.5 bg-green-600 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
            </a>
            <a href="/" class="relative text-black hover:text-green-700 group">
                About Us
                <span class="absolute bottom-0 left-0 block w-full h-0.5 bg-green-700 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
            </a>
            <a href="/" class="relative text-black hover:text-orange-600 group">
                Portfolio
                <span class="absolute bottom-0 left-0 block w-full h-0.5 bg-orange-600 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
            </a>
            <a href="/" class="relative text-black hover:text-orange-700 group">
                Contact
                <span class="absolute bottom-0 left-0 block w-full h-0.5 bg-orange-700 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
            </a>
        </div>
    </div>
</div>

<script>
    import { onMount, onDestroy } from 'svelte';

    const testimonials = [
        { name: "Nama Lengkap 1", text: "This is a wider card with supporting text below as a natural lead-in to additional content." },
        { name: "Nama Lengkap 2", text: "This is a wider card with supporting text below as a natural lead-in to additional content." },
        { name: "Nama Lengkap 3", text: "This is a wider card with supporting text below as a natural lead-in to additional content." }
    ];

    const slides = [...testimonials, ...testimonials];
    let index = testimonials.length;
    let autoSlideInterval;
    let startX, currentX, isDragging = false;
    const slideWidth = 100;

    onMount(() => {
        const wrapper = document.querySelector('.carousel-wrapper');
        wrapper.addEventListener('mousedown', onMouseDown);
        wrapper.addEventListener('touchstart', onMouseDown, { passive: true });

        autoSlideInterval = setInterval(nextSlide, 3000);
    });

    onDestroy(() => {
        clearInterval(autoSlideInterval);
    });

    function updateSlide() {
        const wrapper = document.querySelector('.carousel-wrapper');
        wrapper.style.transform = `translateX(-${index * slideWidth}%)`;
        updateDots();
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        updateSlide();

        if (index === testimonials.length) {
            setTimeout(() => {
                const wrapper = document.querySelector('.carousel-wrapper');
                wrapper.style.transition = 'none';
                wrapper.style.transform = `translateX(-${index * slideWidth}%)`;
                setTimeout(() => {
                    wrapper.style.transition = 'transform 0.5s ease-in-out';
                }, 50);
            }, 500);
        }
    }

    function prevSlide() {
        index = (index - 1 + slides.length) % slides.length;
        updateSlide();

        if (index === slides.length - 1) {
            setTimeout(() => {
                const wrapper = document.querySelector('.carousel-wrapper');
                wrapper.style.transition = 'none';
                wrapper.style.transform = `translateX(-${(slides.length - testimonials.length) * slideWidth}%)`;
                setTimeout(() => {
                    wrapper.style.transition = 'transform 0.5s ease-in-out';
                }, 50);
            }, 500);
        }
    }

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === (index % testimonials.length));
        });
    }

    function onMouseDown(event) {
        clearInterval(autoSlideInterval);
        startX = event.clientX || event.touches[0].clientX;
        isDragging = true;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('touchmove', onMouseMove, { passive: true });
        document.addEventListener('touchend', onMouseUp);
    }

    function onMouseMove(event) {
        if (isDragging) {
            currentX = event.clientX || event.touches[0].clientX;
            const diffX = startX - currentX;
            document.querySelector('.carousel-wrapper').style.transition = 'none';
            document.querySelector('.carousel-wrapper').style.transform = `translateX(-${(index * slideWidth) + (diffX / window.innerWidth * 100)}%)`;
        }
    }

    function onMouseUp() {
        if (isDragging) {
            const diffX = startX - currentX;
            if (diffX > 100) {
                nextSlide();
            } else if (diffX < -100) {
                prevSlide();
            }
            isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('touchmove', onMouseMove);
            document.removeEventListener('touchend', onMouseUp);
            document.querySelector('.carousel-wrapper').style.transition = 'transform 0.5s ease-in-out';

            autoSlideInterval = setInterval(nextSlide, 3000);
        }
    }
</script>

<style>
/* Background gradient */
.background-gradient {
    background: linear-gradient(135deg, rgba(254, 180, 95, 0.6) 0%, rgba(162, 246, 165, 0.6) 100%);
}

.carousel-wrapper {
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 100%;
    cursor: grab;
}

.carousel-wrapper:active {
    cursor: grabbing;
}

.carousel-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 800px;
    height: 400px;
    margin: 0 auto;
}

.carousel-slide {
    flex: 1 0 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.testimonial-card {
    width: 100%;
    max-width: 800px;
    box-sizing: border-box;
    position: relative;
    background: transparent;
    border-radius: 0;
    padding: 2rem;
    box-shadow: none;
    border: none;
    overflow: hidden;
    user-select: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.testimonial-bubble {
    position: relative;
    background: #e1ffc7;
    padding: 1.5rem 2rem;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    max-width: 90%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.testimonial-bubble:before {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 15px;
    width: 0;
    height: 0;
    border: 15px solid transparent;
    border-top-color: #e1ffc7;
}

.testimonial-bubble h5 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
}

.testimonial-bubble p {
    margin: 0;
    font-size: 1.125rem;
}

.dots-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 8px;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: gray;
    transition: background-color 0.3s;
    border: none;
    cursor: pointer;
}

.dot.active {
    background-color: black;
}

.footer {
    background: #2d3748;
    color: #e2e8f0;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
}

.footer-content {
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.footer-logo {
    font-size: 2rem;
    font-weight: bold;
    background: linear-gradient(to right, #00ff00, #ff6600);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.footer-contact {
    font-size: 0.875rem;
    margin: 1rem 0;
}

.footer-social {
    display: flex;
    gap: 1rem;
}

.footer-social a {
    color: #e2e8f0;
    transition: color 0.3s;
}

.footer-social a:hover {
    color: #f7fafc;
}

/* WhatsApp Button */
.whatsapp-button {
    display: flex;
    align-items: center;
    background-color: #25D366; /* Warna hijau WhatsApp */
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    transition: background-color 0.3s;
}

.whatsapp-button:hover {
    background-color: #128C7E; /* Warna hijau WhatsApp yang lebih gelap */
}

.whatsapp-button img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
}

/* Tuaide Logo */
.logo-container {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.logo-text {
    font-size: 2rem;
    font-weight: bold;
    background: linear-gradient(to right, #00ff00, #ff6600);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 2px 2px 4px #2d3748;
}
</style>

<main class="font-Kanit text-gray-800 min-h-screen flex flex-col background-gradient">
    <div class="flex-1 flex justify-center items-center">
        <div class="p-8">
            <h1 class="text-4xl font-bold mb-4 text-center">Testimoni</h1>
            <div class="border-t border-gray-300 mb-8"></div>

            <!-- Carousel -->
            <div class="relative w-full">
                <div class="carousel-container">
                    <div class="carousel-wrapper">
                        {#each slides as testimonial, i}
                            <div class="carousel-slide">
                                <div class="testimonial-card">
                                    <div class="testimonial-bubble">
                                        <h5>{testimonial.name}</h5>
                                        <p>{testimonial.text}</p>
                                    </div>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>

                <!-- Dots -->
                <div class="dots-container">
                    {#each testimonials as _, dotIndex}
                        <button 
                            class="dot {dotIndex === (index % testimonials.length) ? 'active' : ''}"
                            on:click={() => { index = dotIndex + testimonials.length; updateSlide(); }}
                        ></button>
                    {/each}
                </div>
            </div>
        </div>
    </div>

    <!-- WhatsApp Button -->
    <a 
        href="https://wa.me/+62 815-1852-575" 
        target="_blank" 
        class="whatsapp-button"
    >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp">
        Chat Sekarang!
    </a>

    <footer class="footer">
        <div class="footer-content">
            <div class="logo-container">
                <div class="logo-text">
                    Tuaide
                </div>
            </div>
            <div class="footer-contact">
                <p>Email: info@companyname.com</p>
                <p>12 Jl. Wijaya Kusuma, Kota Bogor, Jawa Barat</p>
            </div>
        </div>
    </footer>
</main>

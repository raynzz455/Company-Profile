<script>
  import terserah from "$lib/images/logo-icon.png";
  import { onMount } from 'svelte';
  import Splide from '@splidejs/splide';
  import '@splidejs/splide/dist/css/splide.min.css';
  
  let splide;

  onMount(() => {
    splide = new Splide('.splide', {
      type       : 'loop',
      perPage    : 1,
      perMove    : 1,
      autoplay   : true,
      pagination : true,
      arrows     : false,
      interval   : 2500, // Set interval to 2 seconds
    }).mount();
  });
</script>


<style>
  .splide {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
}

.splide__slide {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center;     /* Center vertically */
  padding: 20px;
  margin: 0 15px;
  position: relative;
  /* Apply transformation to shift slide content */
  transform: translateX(-15px); /* Adjust this value to shift left if necessary */
}

.splide__pagination {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  margin-bottom: 0;
}

.testimonial-container {
  width: 100%;
  text-align: center;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  margin-bottom: 80px;
}

.testimonial-heading {
  font-size: 37px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.testimonial-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f28928;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 30px;
  text-align: center;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid #ddd;
  color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  /* Adjust this value to shift left */
  transform: translateX(-15px); 
}

.arrow-bottom {
  position: absolute;
  width: 20px;
  height: 20px; 
  display: block;
  background: #f28928;
  transform: rotate(45deg);
  top: 100%;
  left: 50%;
  margin-left: -10px;
  margin-top: -10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.testimonial-card:hover {
  transform: translateY(-15px) translateX(-15px); /* Apply consistent transform on hover */
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.testimonial-content {
  font-size: 18px;
  color: #fff;
  margin-bottom: 20px;
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
}

.author-info {
  text-align: left;
}

.author-name {
  font-weight: bold;
  margin: 0;
  color: #fff;
  font-size: 18px;
}

.author-role {
  margin: 0;
  color: #ddd;
  font-size: 14px;
}

@media (max-width: 768px) {
  .splide__slide {
    margin: 0 5px;
    /* Adjust translateX if needed */
    transform: translateX(-5px);
  }
}


  .whatsapp-button {
    display: flex;
    align-items: center;
    background-color: #25D366;
    color: white;
    padding: 0.5rem 1rem; /* Kecilkan padding untuk tombol utama */
    border-radius: 50px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transition: background-color 0.3s;
    z-index: 1000;
    border: 2px solid #25D366;
  }

  .whatsapp-button:hover {
    background-color: #128C7E;
    border-color: #128C7E;
  }

  .whatsapp-button img {
    width: 35px;
    height: 35px;
    margin-right: 1px;
  }

  .kenapa-container {
    text-align: center;
    padding: 30px 20px;
    background-color: #f9f9f9;
    color: #333;
    padding-top: 30px;
  }

  .kenapa-heading {
    font-size: 2rem;
    color: #000;
    margin-bottom: 10px;
  }

  .text {
    font-size: 1rem;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
    padding: 0;
    text-align: center;
  }

  .text p {
    margin: -5px;
  }

  @media (max-width: 768px) {
    

    .text {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 768px) {
  .whatsapp-button.second-button {
    margin-bottom: 60px; /* Sesuaikan dengan ukuran layar lebih kecil */
  }
}

.whatsapp-button.second-button {
  display: flex;
  align-items: center;
  background-color: #25D366;
  color: white;
  padding: 15px 15px;
  border-radius: 50px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: background-color 0.3s;
  width: 250px;
  margin: 100px auto 0px;
  text-align: center; /* This centers the text inside */
}

  .whatsapp-button.second-button:hover {
    background-color: #128C7E;
    border-color: #128C7E;
  }

  .whatsapp-button.second-button img {
  width: 35px;
  height: 35px;
  margin-right: 10px;
}

.whatsapp-text {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  flex: 1; /* Ensures the text takes the remaining space */
}

  .footer {
    background-color: #333;
    color: #fff;
    padding: 40px 20px;
    text-align: center;
    height: 10rem;
    position: relative;
    overflow: hidden;
    margin-top: 60px;
  }

  .footer-logo {
    margin-bottom: -20px;
  }

  .footer-logo img {
    max-width: 120px;
  }

  .footer-links a {
    color: #f28928;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s;
  }

  .footer-links a:hover {
    color: #ff8c00;
  }

  .footer-social {
    margin-bottom: 20px;
  }

  .footer-social a {
    color: #fff;
    font-size: 18px;
    margin: 0 8px;
  }

  .footer-social a:hover {
    color: #f28928;
  }

  .footer-copy {
    font-size: 12px;
    margin-top: -30px;
  }

  .footer-copy a {
    color: #f28928;
    text-decoration: none;
    transition: color 0.3s;
  }

  .footer-copy a:hover {
    color: #ff8c00;
  }
</style>

<div class="testimonial-container">
  <h2 class="testimonial-heading mt-10">Testimoni</h2>
  <div class="splide">
    <div class="splide__track">
      <ul class="splide__list">
        <li class="splide__slide">
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>"This is an amazing product! I highly recommend it."</p>
            </div>
            <div class="testimonial-author">
              <div class="author-info">
                <p class="author-name">John Doe</p>
                <p class="author-role">Customer</p>
              </div>
            </div>
            <span class="arrow-bottom"></span>
          </div>
        </li>
        <li class="splide__slide">
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>"Excellent service and quality. Will buy again."</p>
            </div>
            <div class="testimonial-author">
              <div class="author-info">
                <p class="author-name">Jane Smith</p>
                <p class="author-role">Client</p>
              </div>
            </div>
            <span class="arrow-bottom"></span>
          </div>
        </li>
        <li class="splide__slide">
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>"Another great review here."</p>
            </div>
            <div class="testimonial-author">
              <div class="author-info">
                <p class="author-name">Emily Johnson</p>
                <p class="author-role">Customer</p>
              </div>
            </div>
            <span class="arrow-bottom"></span>
          </div>
        </li>
      </ul>
    </div>
    <div class="splide__pagination"></div>
  </div>
</div>

<a 
  href="https://wa.me/+628151852575" 
  target="_blank" 
  class="whatsapp-button"
>
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp">
</a>

<div class="kenapa-container">
  <h2 class="kenapa-heading kanit-bold">Kami Adalah Desainer Terbaik Yang Tak Perlu Diragukan Lagi!</h2>
  <div class="text">
    <p>Masih bingung? Langsung konsultasi secara GRATIS oleh tim TUAIDE.</p>
  </div>
  <!-- Tombol WhatsApp Baru -->
  <a 
    href="https://wa.me/+628151852575" 
    target="_blank" 
    class="whatsapp-button second-button"
  >
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp">
    <span class="whatsapp-text">Hubungi Kami</span>
  </a>
</div>

<footer class="footer">
  <div class="footer-logo">
    <img src="{terserah}" alt="Company Logo">
  </div>
  <div class="footer-links">
    <a href="#home">Home</a>
    <a href="#about">About Us</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
  </div>
  <div class="footer-social">
    <a href="https://facebook.com" target="_blank" aria-label="Facebook">
      <i class="fab fa-facebook-f"></i>
    </a>
    <a href="https://twitter.com" target="_blank" aria-label="Twitter">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="https://instagram.com" target="_blank" aria-label="Instagram">
      <i class="fab fa-instagram"></i>
    </a>
    <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
      <i class="fab fa-linkedin-in"></i>
    </a>
  </div>
  <div class="footer-copy">
    <p>&copy; 2024 Your Company Name. All rights reserved. | <a href="#privacy-policy">Privacy Policy</a></p>
  </div>
</footer>

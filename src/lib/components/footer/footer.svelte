<script>
    import terserah from "$lib/images/logo-icon.png"
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
        arrows     : true,
      }).mount();
    });
  </script>
  
  <style>
    .splide {
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      padding: 0 20px;
    }
  
    .splide__slide {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      margin: 0 15px;
    }
  
    .splide__pagination {
      display: flex;
      justify-content: center;
      margin-top: 30px;
    }
  
    .splide__pagination__page {
      width: 12px;
      height: 4px;
      margin: 0 4px;
      background: #f28928;
      border-radius: 2px;
      opacity: 0.5;
      transition: opacity 0.3s, transform 0.3s;
    }
  
    .splide__pagination__page.is-active {
      opacity: 1;
      transform: scaleX(1.5);
    }
  
    .testimonial-container {
      width: 100%;
      text-align: center;
      margin: 0 auto;
      padding: 20px;
    }
  
    .testimonial-heading {
      font-size: 37px;
      font-weight: bold;
      margin-bottom: 20px;
      color: #333;
    }
  
    .testimonial-card {
      position: relative;
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
    }
  
    .testimonial-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
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
      }
    }
  
   .whatsapp-button {
    display: flex;
    align-items: center;
    background-color: #25D366;
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
    z-index: 1000; /* Pastikan tombol berada di atas elemen lain */
  }
  
  .whatsapp-button:hover {
    background-color: #128C7E;
  }
  
  .whatsapp-button img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
  
  
    .footer {
    background-color: #333;
    color: #fff;
    padding: 40px 20px;
    text-align: center;
    height: 15rem; /* Ubah tinggi footer di sini */
    position: relative;
    overflow: hidden; /* Tambahkan ini untuk menghindari overflow jika ada */
  }
  
    .footer-logo {
      margin-bottom: 20px;
    }
  
    .footer-logo img {
    max-width: 120px; /* Sesuaikan jika perlu */
  }
  
  .footer-links a {
    color: #f28928;
    text-decoration: none;
    font-size: 14px; /* Sesuaikan jika perlu */
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
    margin-bottom: 10px; /* Sesuaikan jika perlu */
  }
  
  .footer-social a {
    color: #fff;
    font-size: 18px; /* Sesuaikan jika perlu */
    margin: 0 8px; /* Sesuaikan jika perlu */
  }
  
    .footer-social a:hover {
      color: #f28928;
    }
  
    .footer-copy {
    font-size: 12px; /* Sesuaikan jika perlu */
    margin-top: 5px; /* Sesuaikan jika perlu */
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
        </ul>
      </div>
    </div>
  </div>
  
  <a 
    href="https://wa.me/+628151852575" 
    target="_blank" 
    class="whatsapp-button"
  >
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp">
    Chat Sekarang!
  </a>
  
  <footer class="footer">
    <div class="footer-logo">
      <img src="{terserah}" alt="Company Logo">
    </div>
<<<<<<< HEAD
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
  
=======
</footer>
</main>
>>>>>>> 1e40827fc5d3c4cac9649966fba7dee3bbf62dc9

<script>
    import "../app.css";
    import Home from '../lib/components/home/home.svelte';
    import Cons from '../lib/components/content/content.svelte';
    import Porto from '../lib/components/portofolio/portofolio.svelte';
    import Footer from '../lib/components/footer/footer.svelte';
    
    </script>
    <body> 
     <style>
        
     </style>
    <div class="w-full overflow-hidden">
        <section id="home">
            <Home />
        </section>
        
        <section id="about">
            <Cons />
        </section>
        
        <section id="portfolio">
            <Porto />
        </section>
        
        <section id="contact">
            <Footer />
        </section>
        </div>
    </body>
    
    
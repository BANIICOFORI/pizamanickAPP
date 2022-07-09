import React from "react";

const Slider = () =>{
        return(
          <>
          {/* <!-- ======= Header ======= --> */}
       
        {/* <!-- End Header --> */}
      
        {/* <!-- ======= Hero Section ======= --> */}
         <section id="hero">
          <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">
        
        
      
            <ol class="carousel_indicators" id="hero-carousel-indicators"></ol>
      
            <div class="carousel-inner" role="listbox">
      
              {/* <!-- Slide 1 --> */}
              <div class="carousel-item active" style={{backgroundImage:"url(assets/img/slide/slide-1.jpg)"}}>
                <div class="carousel-container">
                  <div class="container">
            
             <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
            <div class="row">
            <div class="col-lg-8">
            <h1>Welcome to <span>Pizamanick</span></h1>
            <h2></h2>
      
                <div class="btns">
                  <a style={{textdecoration: "none"}} href="#menu" class="btn-menu animated fadeInUp scrollto">Our Menu</a>
                  <a href="#book-a-table" class="btn-book animated fadeInUp scrollto">Book a Table</a>
                </div>
              </div>
              <div class="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
                <a href="index.html" class="glightbox play-btn"></a>
              </div>
      
            </div>
          </div>
                  </div>
                </div>
              </div>
      
              {/* <!-- Slide 2 --> */}
              <div class="carousel-item" style={{backgroundImage:"url(assets/img/slide/slide-2.jpg)"}}>
                <div class="carousel-container">
                  <div class="container">
                     <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
            <div class="row">
              <div class="col-lg-8">
                <h1><span></span></h1>
                <h2>We specializes in pizza making.</h2>
      
                <div class="btns">
                  <a href="#menu" class="btn-menu animated fadeInUp scrollto">Our Menu</a>
                  <a href="#book-a-table" class="btn-book animated fadeInUp scrollto">Book a Table</a>
                </div>
              </div>
              <div class="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
                <a href="#" class="glightbox play-btn"></a>
              </div>
      
            </div>
          </div>
                  </div>
                </div>
              </div>
      
              {/* <!-- Slide 3 --> */}
              <div class="carousel-item" style={{backgroundImage:"url(assets/img/slide/slide-3.jpg)"}}>
                <div class="carousel-container">
                  <div class="container">
                      <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
            <div class="row">
              <div class="col-lg-8">
                <h1><span></span></h1>
                <h2>Delivering great Piza for more than 8 years!</h2>
      
                <div class="btns">
                  <a href="#menu" class="btn-menu animated fadeInUp scrollto">Our Menu</a>
                  <a href="#book-a-table" class="btn-book animated fadeInUp scrollto">Book a Table</a>
                </div>
              </div>
              <div class="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
                <a href="#" class="glightbox play-btn"></a>
              </div>
      
            </div>
          </div>
                  </div>
                </div>
              </div>
      
            </div>
      
            <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
              <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
            </a>
      
            <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
              <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
            </a>
      
          </div>
        </section>
        
        
      
          </>
        );
};
export default Slider;
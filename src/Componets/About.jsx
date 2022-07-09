import React from "react";

const About = () =>{
    return(
        <>
        <section id="about" class="about">
	
    <div class="container" data-aos="fade-up">

      <div class="row">
        <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
          <div class="about-img">
            <img src="assets/img/about.jpg" alt=""/>
          </div>
        </div>

        <div class="section-title" style={{color:"white",textAlign:"center"}}>
      
        <p style={{color:"white",textAlign:"center"}}>About Pizamanick </p>
        
      </div>
        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
          <h3></h3>
          <p class="fst-italic Pforhero">
           Pizamanick is a branch of Bamaaco's Restaurant.  We specializes in pizza making for .......
          </p>
          <ul className="Pforhero">
            <li><i class="bi bi-check-circle"></i> Family's get together.</li>
            <li><i class="bi bi-check-circle"></i> Birthday Party's </li>
            <li><i class="bi bi-check-circle"></i>Companys, no mather the size we can deliver.</li>
          </ul>
          <p className="Pforhero">
            If you are looking for the best pizza to buy then I will suggest pizamanick Pizza for you.
           The test is unique and so delicious.<br/>
            Established in 2014, pizamanick Pizza is growing to be the preferred pizza place in Accra. We currently have 4 branches.
          </p>
        </div>
      </div>

    </div>
  </section>
    {/* <!-- End Testimonials Section --> */}
        </>
    );
};
export default About;
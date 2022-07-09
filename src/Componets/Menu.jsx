import React from "react";

const Menu =()=>{
    return(
        <>
         <section id="menu" class="menu section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title"style={{color:"white",textAlign:"center"}}>
          <p style={{color: "white"}}>Check Our Tasty Menu</p>
        </div>

        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="menu-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-starters">Bieef</li>
              <li data-filter=".filter-salads">Chicken</li>
              <li data-filter=".filter-specialty">Vegetables</li>
            </ul>
          </div>
        </div>

        <div class="row menu-container" data-aos="fade-up" data-aos-delay="200">

          <div class="col-lg-6 menu-item filter-starters">
            <img src="assets/img/menu/lobster-bisque.jpg" class="menu-img" alt=""/>
            <div class="menu-content">
              <a href="#">Beef Piza</a><span>GH₵50.95</span>
            </div>
            <div class="menu-ingredients">
              
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-specialty">
            <img src="assets/img/menu/verg1.jpg" class="menu-img" alt=""/>
            <div class="menu-content">
              <a href="#">Vegetable Piza</a><span>GH₵60.95</span>
            </div>
            <div class="menu-ingredients">
              
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-starters">
            <img src="assets/img/menu/cake.jpg" class="menu-img" alt=""/>
            <div class="menu-content">
              <a href="#">Beef Piza</a><span>GH₵69.95</span>
            </div>
            <div class="menu-ingredients">
              
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-salads">
            <img src="assets/img/menu/caesar.jpg" class="menu-img" alt=""/>
            <div class="menu-content">
              <a href="#">Chicken Piza</a><span>GH₵70.95</span>
            </div>
            <div class="menu-ingredients">
             
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-specialty">
            <img src="assets/img/menu/verg3.jpg" class="menu-img" alt=""/>
            <div class="menu-content">
              <a href="#">Vegetable Piza</a><span>GH₵72.95</span>
            </div>
            <div class="menu-ingredients">
             
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-starters">
            <img src="assets/img/menu/mozzarella.jpg" class="menu-img" alt=""/>
            <div class="menu-content">
              <a href="#">Beef Piza</a><span>GH₵45.95</span>
            </div>
            <div class="menu-ingredients">
              
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-salads">
            <img src="assets/img/menu/greek-salad.jpg" class="menu-img" alt=""/>
            <div class="menu-content">
              <a href="#">Chicken Piza</a><span>GH₵39.95</span>
            </div>
            <div class="menu-ingredients">
             
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-salads">
            <img src="assets/img/menu/spinach-salad.jpg" class="menu-img" alt=""/>
            <div class="menu-content">
              <a href="#">Chicken Piza</a><span>GH₵90.95</span>
            </div>
            <div class="menu-ingredients">
              Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-specialty">
            <img src="assets/img/menu/verg2.jpg" class="menu-img" alt=""/>
            <div class="menu-content">
              <a href="#">Vegetable Piza</a><span>GH₵12.95</span>
            </div>
            <div class="menu-ingredients">
              
            </div>
          </div>

        </div>

      </div>
    </section>
        </>
    );
};
export default Menu;
carousel = document.getElementById("carousel");
carousel.innerHTML = `<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-indicators">
  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div class="carousel-inner">
  <div class="carousel-item active">
  <img src="images/EpoxyGarage.jpeg" class="d-block w-100 position-absolute bottom-0 start-0 sticky-top" style="z-index:-5" alt="Epoxy Garage">
    <!--{{< placeholder width="100%" height="100%" background="#777" color="#777" text="false" title="false" >}}-->
    <div class="container">
      <div class="carousel-caption text-start">
        <h1>NRCM Epoxy: Making Concrete Extraordinary. </h1>
        <p>It's just what we do.</p>
        <p><a class="btn btn-lg btn-primary" href="#" onclick="openPopup()">Free Consultation</a></p>
      </div>
    </div>
  </div>
  <div class="carousel-item">
  <img src="images/epoxyroll.jpeg" class="d-block w-100 position-absolute bottom-0 start-0 sticky-top"  style="z-index:-5" alt="Epoxy Garage">
    <!--{{< placeholder width="100%" height="100%" background="#777" color="#777" text="false" title="false" >}}-->
    <div class="container">
      <div class="carousel-caption">
        <h1>Did you know?</h1>
        <p>We use a Polyaspartic Coating which cures faster, is more versatile and durable in our Hot Florida Summers.</p>
        <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
      </div>
    </div>
  </div>
  <div class="carousel-item">
  <img src="images/garage.jpeg" class="d-block w-100 position-absolute bottom-0 start-0 sticky-top" style="z-index:-5" alt="Epoxy Garage">
    <!--{{< placeholder width="100%" height="100%" background="#777" color="#777" text="false" title="false" >}}-->
    <div class="container">
      <div class="carousel-caption text-end">
        <h1>Why Us?</h1>
        <p>We don't cut corners and we never use acid etching to prep the Concrete. Longevity and quality is all about the surface prep and we use diamond segments to grind the concrete surface profile.</p>
        <p><a class="btn btn-lg btn-primary" href="#">Get an Estimate</a></p>
      </div>
    </div>
  </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div>`;
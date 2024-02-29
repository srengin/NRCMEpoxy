carousel = document.getElementById("carousel");
carousel.innerHTML = `<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-indicators">
  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div class="carousel-inner">
  <div class="carousel-item active">
  <img src="images/EpoxyGarage.jpeg" class="d-block w-100 position-absolute bottom-0 start-0 sticky-top" style="object-position: 50% 50%;" alt="Epoxy Garage">
    <!--{{< placeholder width="100%" height="100%" background="#777" color="#777" text="false" title="false" >}}-->
    <div class="container">
      <div class="carousel-caption text-start">
        <h1>Example headline.</h1>
        <p>Some representative placeholder content for the first slide of the carousel.</p>
        <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
      </div>
    </div>
  </div>
  <div class="carousel-item">
  <img src="images/epoxyroll.jpeg" class="d-block w-100 position-absolute bottom-0 start-0 sticky-top"  alt="Epoxy Garage">
    <!--{{< placeholder width="100%" height="100%" background="#777" color="#777" text="false" title="false" >}}-->
    <div class="container">
      <div class="carousel-caption">
        <h1>Another example headline.</h1>
        <p>Some representative placeholder content for the second slide of the carousel.</p>
        <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
      </div>
    </div>
  </div>
  <div class="carousel-item">
  <img src="images/garage.jpeg" class="d-block w-100 position-absolute bottom-0 start-0 sticky-top" alt="Epoxy Garage">
    <!--{{< placeholder width="100%" height="100%" background="#777" color="#777" text="false" title="false" >}}-->
    <div class="container">
      <div class="carousel-caption text-end">
        <h1>One more for good measure.</h1>
        <p>Some representative placeholder content for the third slide of this carousel.</p>
        <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
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

/*`<div id="myCarousel" class="carousel slide">
<div class="carousel-indicators">
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
<div class="carousel-inner">
  <div class="carousel-item active"  style="background-image: url('images/EpoxyGarage.jpeg'); background-size: 100% auto; background-position-y: 40%; background-repeat:no-repeat; background-color: #EFECEC;">
  <div class="carousel-caption d-none d-md-block">
  <h2 style="color:black; font-weight:bold; text-shadow: 2px 2px gray; font-family: Copperplate, Papyrus, fantasy; background-color: rgba(104, 99, 71, .1);">NRCM Epoxy: Making Concrete Extraordinary. It's just what we do.</h5>
</div>
  </div>
  <div class="carousel-item" style="background-image: url('images/epoxyroll.jpeg'); background-size: 100% auto; background-position-y: 40%; background-repeat:no-repeat; background-color: #EFECEC;">
    <img src="'images/epoxyroll.jpeg'" class="d-block w-100" alt="...">
    <div class="carousel-caption d-none d-md-block">
    <h2 style="color:black; font-weight:bold; text-shadow: 2px 2px gray; font-family: Copperplate, Papyrus, fantasy; background-color: rgba(104, 99, 71, .1);">Did you know?</h5>
  <h2 style="color:black; font-weight:bold; text-shadow: 2px 2px gray; font-family: Copperplate, Papyrus, fantasy; background-color: rgba(104, 99, 71, .1);">We use a Polyaspartic Coating which is 
  it cures faster and can be used in a wide range of temperatures. They are versatile and durable.</h5>
  </div>
  <div class="carousel-item" >
  <img src="images/garage.jpeg" class="d-block w-100" alt="..."> 
  Why should you buy from us?
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
</div>`*/




/*
`<div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" >
        <div style="background=red">
        <!--<div style="background-image: url('images/EpoxyGarage.jpeg'); background-size: 100% auto; background-position-y: 40%; background-repeat:no-repeat; background-color: #EFECEC;"> -->
        <!--<img src="images/EpoxyGarage.jpeg"  width="100%" height="auto" background="var(--bs-secondary-color)" text="false" title="false" > -->
          <div class="container" >
            <div class="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p class="opacity-75">Some representative placeholder content fornmbm,nb,mnb the first slide of the carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item" style="background-image: url('images/epoxyroll.jpeg'); background-size: 100% auto; background-position-y: 40%; background-repeat:no-repeat; background-color: #EFECEC;"></div>>
        <!--<img src="images/EpoxyGarage.jpeg"width="100%" background="var(--bs-secondary-color)" text="false" title="false" >-->
        <div class="container">
          <div class="carousel-caption">
            <h1>Another example headline.......</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item" style="background-image: url('images/garage.jpeg'); background-size: 100% auto; background-position-y: 40%; background-repeat:no-repeat; background-color: #EFECEC;"></div>>
        <!-- <img src="images/EpoxyGarage.jpeg" width="100%" height="100%" background="var(--bs-secondary-color)" text="false" title="false" > -->
        <div class="container">
          <div class="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
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
    </div>`; */
import React from "react";
import "./Slide.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
function Slide({ref}) {

  const handleClick = () => {
    window.scrollTo(0,600)
  };
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item">
            <img
              src={require("../../images/anahtar.jpg")}
              class="d-block w-100"
              alt="Anahtar Teslim Daireler"
            />
            <div class="carousel-caption d-md-block carousel_dsc">
              <h2>
                MF Yapı Tasarım
              </h2>
              <p>
                Anahtar Teslim Daireler
              </p>
            </div>
          </div>
          <div class="carousel-item active">
            <img
              src={require("../../images/dekorasyon1.jpg")}
              class="d-block w-100"
              alt="Anahtar Teslim Daireler"
            />
            <div class="carousel-caption d-md-block carousel_dsc" >
              <h2>
                MF Yapı Tasarım
              </h2>
              <p>
                Anahtar Teslim Daireler
              </p>
            </div>
          </div>
          <div class="carousel-item ">
            <img
              src={require("../../images/mobilya.jpg")}
              class="d-block w-100"
              alt="Mobilya Dekorasyon"
            />
            <div class="carousel-caption d-md-block carousel_dsc">
              <h2>
                MF Yapı Tasarım
              </h2>
              <p>
                Mobilya Dekorasyon
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={require("../../images/tasarımprojelendirme.jpg")}
              class="d-block w-100"
              alt="Tasarım ve Projelendirme"
            />
            <div class="carousel-caption d-md-block carousel_dsc">
              <h2>
                MF Yapı Tasarım
              </h2>
              <p>
                Tasarım ve Projelendirme
              </p>
            </div>
          </div>
                  <div class="scroll" onClick={handleClick}></div>
        </div>
        <button
          class="carousel-control-prev color-black"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Slide;


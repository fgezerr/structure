import React  from "react";
import Footer from "../../components/Footer/Footer";
import "./Referanslarimiz.scss";
import { Link } from "react-router-dom";

function Referanslarimiz() {
  return (
    <div className="_refs">
      <div className="_refs_">
        <div className="_refs_menu">
          <div>
            <h5>Hakkımızda</h5>
          </div>
          <div>
            <span>
              <Link to="/" style={{ textDecoration: "none" }}>
                <h6 style={{ color: "#fff", display: "inline-flex" }}>
                  Anasayfa
                </h6>
              </Link>
            </span>
            <span> / Referanslarımız</span>
          </div>
        </div>
      </div>
      <div className="_refs_imgs">
        <div className="_refs_imgs_">
          <img
            className="_refs_img"
            src={require("../../images/ref1.png")}
            alt="ref1"
          ></img>
        </div>
        <div className="_refs_imgs_">
          <img
            className="_refs_img"
            src={require("../../images/ref2.png")}
            alt="ref2"
          ></img>
        </div>
        <div className="_refs_imgs_">
          <img
            className="_refs_img"
            src={require("../../images/ref3.png")}
            alt="ref3"
          ></img>
        </div>
        <div className="_refs_imgs_">
          <img
            className="_refs_img"
            src={require("../../images/ref4.png")}
            alt="ref4"
          ></img>
        </div>
        <div className="_refs_imgs_">
          <img
            className="_refs_img"
            src={require("../../images/ref5.jpg")}
            alt="ref5"
          ></img>
        </div>
        <div className="_refs_imgs_">
          <img
            className="_refs_img"
            src={require("../../images/ref6.png")}
            alt="ref6"
          ></img>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Referanslarimiz;

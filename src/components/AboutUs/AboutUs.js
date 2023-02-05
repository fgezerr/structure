import React from "react";
import "./AboutUs.scss";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div>
      <div className="about_us">
        <div className="about">
          <div className="baslik">
            <h5>
              Biz Kimiz <i class="bi bi-question-octagon"></i>
            </h5>
          </div>
          <div>
            <p className="p">
              2022 yılından itibaren hizmet veren firmamız Muhammed Fatih Gezer
              tarafından Denizlide kurulmuştur. MF Yapı Tasarım olarak toplum ve
              dünya trendlerini takip ederek tüketicilerin yaşam biçimlerine
              göre özgün ve rahat mobilyalar üreterek trendleri ile kendi kalite
              markamızdan ödün vermeden dünya markası olma yolunda adımlar
              atmaktayız.
            </p>
          </div>
          <div>
            <Link to="/hakkimizda">
              <button className="_button">
                Detaylı İncele
              </button>
            </Link>
          </div>
        </div>
        <div className="img">
          <img src={require("../../images/kimiz.jpg")} alt="aboutus"/>
        </div>
      </div>
      <hr className="hr"/>
    </div>
  );
}

export default AboutUs;

import React from "react";
import "./ContactForm.scss";
import { Link } from "react-router-dom";

function ContactForm() {
  const image = require("../../images/mobilya.jpg");
  return (
    <div className="cf">
      <div
        className="contact_form"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="contact">
          <div className="baslik">
            <h5>MF Yapı Tasarım Ücretsiz Keşif</h5>
          </div>
          <div className="btn">
            <span>
              <Link to="/iletisim">
                <button className="button">BİZE ULAŞIN</button>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="contact_desc">
        <div className="desc1">
          <div className="_desc1">
            <div>
              <div className="_logo1">
                <i class="bi bi-building-add"></i>
                <h1>
                  <b>25</b> +
                </h1>
              </div>
              <div className="_baslik1" />
              <h5>Sektörel Tecrübe</h5>
            </div>
          </div>
          <div className="_desc1">
            <div>
              <div className="_logo1">
                <i class="bi bi-buildings-fill"></i>
                <h1>
                  <b>15</b> +
                </h1>
              </div>
              <div className="_baslik1" />
              <h5>Tamamlanmış Proje</h5>
            </div>
          </div>
        </div>
        <div className="desc2">
          <div className="_desc2">
            <div>
              <div className="_logo2">
                <i class="bi bi-person-vcard"></i>
                <h1>
                  <b>50</b> +
                </h1>
              </div>
              <div className="_baslik2" />
              <h5>Çalışan Sayısı</h5>
            </div>
          </div>
          <div className="_desc2">
            <div>
              <div className="_logo2">
                <i class="bi bi-emoji-smile"></i>
                <h1>
                  <b>100</b> %
                </h1>
              </div>
              <div className="_baslik2" />
              <h5>Müşteri Memnuniyeti</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

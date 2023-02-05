import React from "react";
import "./Footer.scss";

function Footer({ ref }) {
  return (
    <div>
      <div class="mt-5 pt-5 pb-5 _footer bg-black" ref={ref}>
        <div class="_container mt-5">
          <div class="row">
            <div class="col-lg-3 col-xs-12 links">
              <h6 class="mt-lg-0 mt-sm-3 mb-4">Hizmetlerimiz</h6>
              <h6>ALÇI SIVA ASMA TAVAN</h6>
              <h6>ELEKTRİK-SU TESİSATLARI</h6>
              <h6 href="#">MANTOLAMA İZOLASYON</h6>
              <h6 href="#">MOBİLYA TASARIMI VE İMALATI</h6>
              <h6 href="#">SERAMİK UYGULAMA</h6>
              <h6 href="#">TASARIM VE PROJELENDİRME</h6>
            </div>
            <div class="col-lg-3 col-xs-12 links">
              <h6 class="mt-lg-0 mt-sm-3 mb-4">Profesyonel Ekip</h6>
              <h6>M.Fatih Gezer</h6>
              <h6>Hasan Turğut</h6>
              <h6>Nizam Turğut</h6>
              <h6>Christino Ronaldo</h6>
              <h6>Lionel Messi</h6>
              <h6>Zlatan İbrahimoviç</h6>
            </div>
            <div class="col-lg-3 col-xs-12 links">
              <h6 class="mt-lg-0 mt-sm-3 mb-4">Açılış Saatlerimiz</h6>
              <div style={{ display: "flex" }}>
                <div style={{ color: "#aaa", marginRight: "20px" }}>
                  <h6>Pazartesi</h6>
                  <h6>Salı</h6>
                  <h6>Çarşamba</h6>
                  <h6>Perşembe</h6>
                  <h6>Cuma</h6>
                  <h6>Cumartesi</h6>
                  <h6>Pazar</h6>
                </div>
                <div>
                  <h6> : 08:00 - 19:00</h6>
                  <h6> : 08:00 - 19:00</h6>
                  <h6> : 08:00 - 19:00</h6>
                  <h6> : 08:00 - 19:00</h6>
                  <h6> : 08:00 - 19:00</h6>
                  <h6> : 08:00 - 19:00</h6>
                  <h6> : Kapalı</h6>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-xs-12 location">
              <h6 class="mt-lg-0 mt-sm-3 mb-4">Adres</h6>
              <p>Sırakapılar Mahallesi , no:22 Merkezefendi Denizli</p>
              <p class="mb-2">
                <small>
                  <h6 style={{ color: "#aaa" }}>Gsm Numaramız</h6>
                </small>
                <i class="fa fa-phone mr-3"></i>(552) 945-7423
              </p>
              <p>
                <small>
                  <h6 style={{ color: "#aaa" }}>Email Adresimiz</h6>
                </small>
                <i class="fa fa-envelope-o mr-3"></i>alibeyy2020@gmail.com
              </p>
            </div>
          </div>
          <br />
          <div className="socials">
            <div>
            <h6 style={{ fontSize: "13px" }}>Bizi Takip Edin</h6>
            </div>
            <div className="social">
              <a
                class="nav-link text-light"
                aria-current="page"
                href="https://www.facebook.com"
                target="_blank"
                rel="nofollow"
              >
                <i class="bi bi-facebook"></i>
              </a>
              <a
                class="nav-link text-light"
                aria-current="page"
                href="https://www.instagram.com"
                target="_blank"
                rel="nofollow"
              >
                <i class="bi bi-instagram"></i>
              </a>
              <a
                class="nav-link text-light "
                aria-current="page"
                href="https://www.whatsapp.com"
                target="_blank"
                rel="nofollow"
              >
                <i class="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
          <hr />
          <div className="menu">
            <small>
              <a class="nav-link active" aria-current="page" href="/" rel="nofollow">
                Anasayfa
              </a>
            </small>
            <small>
              <a class="nav-link" href="/hakkimizda" rel="nofollow">
                Kurumsal
              </a>
            </small>
            <small>
              <a class="nav-link" href="#" rel="nofollow">
                Projelerimiz
              </a>
            </small>
            <small>
              <a class="nav-link" href="/referanslarımız" rel="nofollow">
                Referanslarımız
              </a>
            </small>
            <small>
              <a class="nav-link" href="/cozum-ortaklari" rel="nofollow">
                Çözüm Ortaklarımız
              </a>
            </small>
            <small>
              <a class="nav-link" href="/iletisim" rel="nofollow">
                İletişim
              </a>
            </small>
          </div>
          <hr style={{ marginBottom: "25px" }} />
          <div>
            <div class="col copyright">
              <p class="mb-0">
                <small class="text-white-50">© 2022 My MF Yapı Tasarım | by Fatih</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

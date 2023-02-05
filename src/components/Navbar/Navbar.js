import React, { useState } from "react";
import "./Navbar.css";

import "bootstrap-icons/font/bootstrap-icons.css";
import { GiOfficeChair, GiPencilRuler } from "react-icons/gi";
import { VscHome } from "react-icons/vsc";
import { ImMagicWand } from "react-icons/im";
import { TfiHeadphoneAlt } from "react-icons/tfi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="nav1">
        <div className="social">
          <small>
            <a
              class="text-light "
              aria-current="page"
              href="https://www.facebook.com"
              target="_blank"
              rel="nofollow"
            >
              <i class="bi bi-facebook"></i>
            </a>
          </small>
          <small>
            <a
              class="text-light"
              href="https://www.instagram.com"
              target="_blank"
              rel="nofollow"
            >
              <i class="bi bi-instagram"></i>
            </a>
          </small>
          <small>
            <a
              class="text-light"
              href="https://web.whatsapp.com"
              target="_blank"
              rel="nofollow"
            >
              <i class="bi bi-whatsapp"></i>
            </a>
          </small>
        </div>
        <div className="contact">
          <small>
            <a class="text-light" aria-current="page" href="tel:05529457423" rel="nofollow">
              <i class="bi bi-telephone-fill m-1 i"></i>
              <span>0552 945 74 23</span>
            </a>
          </small>
          <small>
            <a class="text-light" href="mailto:muhammedfatih@gmail.com" rel="nofollow">
              <i class="bi bi-envelope-fill m-1 i"></i>
              <span>alibeyy2020@gmail.com</span>
            </a>
          </small>
        </div>
      </nav>
      <div className="Navbar">
        <span className="nav-logo">
          <a href="/" style={{color:"#000"}} rel="nofollow">
          <img
            src={require("../../images/logo2.png")}
            style={{ height: "50px" }}
          ></img>
          MFYapı
          </a>
        </span>
        <div className={`nav-items ${isOpen && "open"}`}>
          <a href="/" rel="nofollow">
            <VscHome class="bi  bi-building fs-5 m-1" />
            Anasayfa
          </a>
          <a href="/hakkimizda" rel="nofollow">
            <GiOfficeChair class="bi  bi-building fs-5 m-1" />
            Kurumsal
          </a>
          <a href="/bitmisprojeler" rel="nofollow">
            <i class="bi bi-buildings fs-5 m-1"></i>
            Projelerimiz
          </a>
          <a href="/referanslarımız" rel="nofollow">
            <ImMagicWand class="bi  bi-building fs-5 m-1" />
            Referanslarımız
          </a>
          <a href="/cozum-ortaklari" rel="nofollow">
            <GiPencilRuler class="bi  bi-building fs-5 m-1" />
            Çözüm Ortaklarımız
          </a>
          <a href="/iletisim" rel="nofollow">
            <TfiHeadphoneAlt class="bi  bi-building fs-5 m-1" />
            Bize Ulaşın
          </a>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;


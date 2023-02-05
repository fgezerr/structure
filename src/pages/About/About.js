import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./About.scss"

function About() {
  return (
    <div className="_About">
      <div
      className="_About_menu"
      >
        <div
        className="_about_menu_"
        >
          <div>
            <h5>Hakkımızda</h5>
          </div>
          <div className="_about_link">
            <span>
              <Link to="/" >
                <h6>
                  Anasayfa
                </h6>
              </Link>
            </span>
            <span> / Kurumsal</span>
          </div>
        </div>
      </div>
      <div className="_About_texts">
        <h6>MF Yapı Tasarım</h6>
        <p>
          Muhammed Fatih Gezer tarafından 2022 yılında Denizli'de kurulan MY
          Moda Yapı Tasarım ; Mobilya Dekorasyon, tasarım ve üretim yapan
          yenilikçi bir firmadır. Genç dinamik kadrosuyla özel üretim mobilya
          imalatı, tasarım, projelendirme ve anahtar teslim tadilat yapmaktadır.
          Profesyonel kadrosu, malzeme ve üretim kalitesi ile sürekli değişim
          içinde olan, dekorasyon sınırlarını ortadan kaldıran çözümleriyle
          eczane hastane donanımları, mutfak, banyo, çocuk odası, yatak odası,
          anahtar teslim daireler yapmaktadır.<br/> Yurt içinde ve yurt dışında
          birçok alanda hizmet vermeye devam eden firmamız, güçlü kadrosu ve
          geniş malzeme kartelasıyla kaliteli malzeme kaliteli iş felsefesiyle
          hizmet vermeye devam etmektedir.
        </p>
        <h6>Değerlerimiz</h6>
        <p>
          Farklı düşünce ve yenilikçi bakış açısı Ekip Ruhu Müşteri odaklı
          yaklaşım Verimlilik ve İstikrar Başarı ve Memnuniyet Yaratıcı çözüm
          odaklı,güvenilir,esnek ve işbirliğine açık olmak.
        </p>
        <h6>Misyonumuz</h6>
        <p>
          Faaliyet alanlarımızı geliştirerek tüketicilerin yaşam biçimlerine
          göre özgün ve rahat mobilyalar üreterek trendleri yakalamak. Kendi
          çapımızda bir marka oluşumuzla beraber Türk ve Dünya mobilya pazarında
          MF Yapı Tasarımı markalaştırarak toplum ve ülke ekonomisine katkıda
          bulunmaktır.
        </p>
        <h6>Vizyonumuz</h6>
        <p>
          Toplum ve dünya trendlerini takip ederek kendi kalite markamızdanödün
          vermeden dünya markası olma yolunda adımlar atıp Türkiyenin en iyi ilk
          10 mobilya firmasından birisi olmaktır.
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default About;

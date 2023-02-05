import React from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import Item from "./Item";
import "./Projelerimiz.scss";

function Projelerimiz() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <>
      <h1 className="_title">Projelerimiz</h1>
      <div className="  App">
        <Carousel breakPoints={breakPoints}>
          <Link to="bitmisprojeler">
          <Item className="Item">
            <div className="_container">
              <h6 className="inner_title">MUHAMMED FATİH GEZER</h6>
              <div className="inner_hr" />
              <h6 className="to_detail">ALÇI BOYA DEKORASYON ÇALIŞMASI</h6>
            </div>
            <img className="imgs" alt="alciboyadekorasyonu" src={require("../../images/proj5.jpg")} />
          </Item>
          </Link>
          <Link to="bitmisprojeler">
          <Item className="Item">
            <div className="_container">
              <h6 className="inner_title">G.MERVE ÖZKAN</h6>
              <div className="inner_hr" />
              <h6 className="to_detail">MUTFAK TADİLATI</h6>
            </div>
            <img className="imgs" alt="mutfaktadilati" src={require("../../images/proj2.jpg")} />
          </Item>
          </Link>
          <Link to="bitmisprojeler">
          <Item className="Item">
            <div className="_container">
              <h6 className="inner_title">MEHMET GEZER</h6>
              <div className="inner_hr" />
              <h6 className="to_detail">BANYO TADİLATI</h6>
            </div>
            <img className="imgs" alt="banyotadilati" src={require("../../images/proj7.jpg")} />
          </Item>
          </Link>
          <Link to="bitmisprojeler">
          <Item className="Item">
            <div className="_container">
              <h6 className="inner_title">ZLATAN IBRAHIMOVIC</h6>
              <div className="inner_hr" />
              <h6 className="to_detail">ANAHTAR TESLİM DAİRE</h6>
            </div>
            <img className="imgs" alt="anahtarteslimproje" src={require("../../images/proj4.jpg")} />
          </Item>
          </Link>
          <Link to="bitmisprojeler">
          <Item className="Item">
            <div className="_container">
              <h6 className="inner_title">HASAN TURĞUT</h6>
              <div className="inner_hr" />
              <h6 className="to_detail">DIŞ CEPHE</h6>
            </div>
            <img className="imgs" alt="discephe" src={require("../../images/proj1.jpg")} />
          </Item>
          </Link>
          <Link to="bitmisprojeler">
          <Item className="Item">
            <div className="_container">
              <h6 className="inner_title">JOHN DOE</h6>
              <div className="inner_hr" />
              <h6 className="to_detail">BANYO TUVALET TADİLATI</h6>
            </div>
            <img className="imgs" alt="banyotuvalettadilatı" src={require("../../images/proj6.jpg")} />
          </Item>
          </Link>
          <Link to="bitmisprojeler">
          <Item className="Item">
            <div className="_container">
              <h6 className="inner_title">LİONEL MESSİ</h6>
              <div className="inner_hr" />
              <h6 className="to_detail">MOBİLYA DEKORASYONU</h6>
            </div>
            <img className="imgs" alt="mobilyadekorasyonu" src={require("../../images/proj3.jpg")} />
          </Item>
          </Link>
          <Link to="bitmisprojeler">
          <Item className="Item">
            <div className="_container">
              <h6 className="inner_title">CHRİSTİANO RONALDO</h6>
              <div className="inner_hr" />
              <h6 className="to_detail">İÇ DIŞ TADİLAT</h6>
            </div>
            <img className="imgs" alt="icdistadilat" src={require("../../images/proj8.jpg")} />
          </Item>
          </Link>
        </Carousel>
      </div>
      <hr className="hr" />
    </>
  );
}

export default Projelerimiz;

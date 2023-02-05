import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
function OrtaklarCozum() {
  const imgs = [
    { image: "c2" },
    { image: "c4" },
    { image: "c5" },
    { image: "c7" },
    { image: "c8" },
    { image: "c9" },
    { image: "c10" },
    { image: "c11" },
    { image: "c12" },
    { image: "c13" },
  ];
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "150px",
          background: "black",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
            <span> / Çözüm Ortaklarımız</span>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          margin: "20px",
        }}
      >
        {imgs.map((item, index) => (
          <div key={index}>
            <img
              style={{
                width: "auto",
                height: "100px",
                margin: "25px",
                border: "1px solid lightgrey",
                padding: "15px",
              }}
              alt="ortaklar cozum"
              src={require("../../images/" + item.image + ".png")}
            />
            <h5 style={{ fontSize: "15px" }}>{item.text}</h5>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default OrtaklarCozum;

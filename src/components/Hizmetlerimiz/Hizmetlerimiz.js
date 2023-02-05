import React, { useEffect, useRef } from "react";
import "./Hizmetlerimiz.scss";
function Hizmetlerimiz() {
  const images = [
    { image: "h1", text: "ELEKTRİK-SU TESİSATLARI" },
    { image: "h2", text: "MANTOLAMA İZOLASYON" },
    { image: "h3", text: "MOBİLYA TASARIMI VE İMALATI" },
    { image: "h4", text: "SERAMİK UYGULAMA" },
    { image: "h5", text: "ALÇI SIVA ASMA TAVAN" },
    { image: "h6", text: "TASARIM VE PROJELENDİRME" },
  ];

  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "smooth",
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);

  return (
    <div className="hizmetlerimiz">
      <h5 className="baslik">Çalışmalarımız</h5>
      <div className="f-images" ref={elRef}>
        {images.map((item, index) => (
          <div key={index} className="imgs">
            <img
              className="images"
              alt="calismalarimiz"
              src={require("../../images/" + item.image + ".jpg")}
            />
            <h5 className="baslik1">{item.text}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hizmetlerimiz;

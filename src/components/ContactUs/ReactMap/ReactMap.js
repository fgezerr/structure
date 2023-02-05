import React from "react";
import { useEffect } from "react";

function ReactMap() {
  useEffect(() => {
    const ifameData = document.getElementById("iframeId");
    const lat = 38;
    const lon = 29;
    ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
  });
  return (
    <div style={{marginTop:"100px"}}>
      <iframe id="iframeId" height="500px" width="100%" title="myFrame" ></iframe>
    </div>
  );
}

export default ReactMap;

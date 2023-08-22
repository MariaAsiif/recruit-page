import React, { useEffect } from "react";

import Marquee from "react-fast-marquee";
import "./offCanvas.css";

const CustomMarquee = () => {

  return (
   <div
      style={{
        background: "#0000003b", height: "30px",
        fontSize: "12px",
        color: "white",
        width: "100%"
      }}
    >
      <Marquee
        style={{ paddingTop: "5px" }}
        gradient={false}
        pauseOnHover
        direction="left"
        speed="70"
      >
        This website is currently under development. Please return soon!    Esta página web se encuentra en desarrollo. ¡Por favor regrese pronto!    Deze website is momenteel in ontwikkeling. Kom snel terug!    Este site está em desenvolvimento. ¡Por favor, volte logo!    Diese Website befindet sich derzeit im AuYau. Bitte kehren Sie bald zurück!    Questo sito web è attualmente in fase di sviluppo. Si prega di tornare presto!     Tämä sivusto on parhaillaan kehitteillä. Palaa pian!    该网站目前正在开发中。请尽快回来!     y اذه عقوملا دiق رmnطتلا اiلاح . ءاجرلا ةدوعلا اwnxق
      </Marquee>
    </div>
  );
};

export default CustomMarquee;

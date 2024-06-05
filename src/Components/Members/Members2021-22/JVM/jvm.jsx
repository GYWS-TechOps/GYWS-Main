import React from "react";
import Coordie from "./coordies/coordies.jsx";
import Src from "./src/src.jsx";
import Finance from "./finance/finance.jsx";
import Spons from "./spons/spons.jsx";
import Tech from "./techops/techops.jsx";
import Design from "./Design/design.jsx";
import Media from "./Media/Media.jsx";
import './jvm.css'
function jvm() {
  return (
    <>
      <div className="chlna">
        <h1> JAGRITI VIDYA MANDIR</h1>
      </div>{" "}
      <br /><hr /><br />
      <Coordie />
      <br /><br />
      <Src /><br /><br />
      <Finance /><br /><br />
      <Spons /><br /><br />
      <Tech /> <br /><br />
      <Design /> <br /><br />
      <Media /> <br /><br />
    </>
  );
}

export default jvm;

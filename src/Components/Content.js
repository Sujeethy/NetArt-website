import React from "react";
import image1 from "../Netart-Test/Netart-Test/asserts/1.png";  // Update the path accordingly
import image2 from "../Netart-Test/Netart-Test/asserts/2.png";  // Update the path accordingly

export default function Content() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="div1" style={{ flex: "-3.7 1 0%" }}>
        <img
          src={image1}
          alt="Image 1"
          style={{ height: "auto", width: "30vw", maxWidth: "100%" }}
        />
      </div>
      <div className="div2" style={{ fontSize: "0.8rem", width: "95vw", flex: "0.7 1 0%" }}>
        <h5 style={{fontWeight:"800"}}>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h5>
        <ul style={{ listStyleType: "disc",fontSize: "0.7rem" }}>
          <li>C.R.I.'s energy-efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
          <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy-efficient smart pumps with IoT-enabled control panel.</li>
        </ul>

        <img
          src={image2}
          alt="Image 2"
          style={{ height: "auto", width: "60vw" }}

        />
        <p >Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
      </div>
    </div>
  );
}

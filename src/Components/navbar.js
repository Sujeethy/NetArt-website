import React from "react";
import logo from "../Netart-Test/Netart-Test/asserts/logo.png";

export default function Navbar() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
      <img style={{ width: "80%", maxWidth: "200px" }} src={logo} alt="logo" />
    </div>
  );
}

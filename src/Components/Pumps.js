import React from "react";
import image3 from "../Netart-Test/Netart-Test/asserts/3.png";

const Pumps = () => {
  var list = ["CHEMICALS & PROCESS", "POWER", "WATER & WASTE WATER", "OILS & GAS", "PHARMA", "SUGARS & DISTILLERIES", "PAPER & PULP", "MARINE & DEFENCE", "METAL & MINING", "FOOD & BEVERAGE", "PETROCHEMICAL & REFINERIES", "SOLAR", "BUILDING", "HVAC", "FIRE FIGHTING", "AGRICULTURE & RESIDENTIAL"];

  return (
    <div style={{ fontSize: "0.7rem" }}>
      <p style={{margin:"0.5rem"}}>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
      
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
      <img src={image3} alt="png 3" style={{ width: "80vw", height: "auto"}} />
        <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
        <span style={{ backgroundColor: "red", height: "2px", width: "95vw" }} ></span>
        <p style={{fontWeight:"800"}}>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
        <p style={{ marginLeft: "10%", marginRight: "10%" }}></p>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" ,marginLeft:"10vw",marginRight:"10vw"}}>
          {list.map((items, index) => (
            <React.Fragment key={index}>
              <span>{items}</span>
              {index < list.length - 1 && <span style={{ backgroundColor: "red", width: "1.5px", marginLeft: "2px", marginRight: "2px", rowGap: "3px" }}></span>}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div style={{ height: "15vh", backgroundColor: "red", margin: "6px",fontSize:"0.8rem" }}>
        <div style={{display:"flex",alignItems:"center",height:"10vh",width:"95vw",justifyContent:"space-around"}}>
          <span style={{display:"flex",alignItems:"flex-end"}} >
          <i class="fa fa-phone" style={{color:"red",borderRadius:"100%",padding:"0.6rem",backgroundColor:'white',fontSize:"1.5rem"}}></i>
            <p style={{margin:"0",padding:"0", color:"white"}}>Tollfree <b>1800 200 12334</b></p>
          </span>
          <span style={{display:"flex",alignItems:"flex-end"}} >
          <i class="fa fa-facebook" style={{color:"red",borderRadius:"100%",padding:"0.8rem",fontSize:"1.5rem", paddingBottom:"0",backgroundColor:'white'}}></i>
            <p style={{margin:"0",padding:"0", color:"white"}}>www.facebook.com/cripumps</p>
          </span>
          <span style={{display:"flex",alignItems:"flex-end"}} >
          <i class="fa fa-globe"  style={{fontSize:"2.3rem",color:"white"}}></i>
            <p style={{margin:"0",padding:"0", color:"white"}}>www.crigroups.com</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Pumps;

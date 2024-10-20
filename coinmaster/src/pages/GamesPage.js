import React from "react";
import AfterLoginNav from "../components/AfterLoginNav";
import g1img from "../assets/g1img.png";
const GamesPage = () => {
  return (
    <div>
      <AfterLoginNav></AfterLoginNav>
      <img src={g1img} style={{ width: "100%", height: "90vh" }}></img>
      <br></br>
      <br></br>
      <div className="flex flex-row">
        <div>
          <img></img>
        </div>
        <div>
          <h1
            style={{
              color: "#212F4A",
              textAlign: "center",
              fontSize: "50px",
              fontWeight: "bolder",
            }}
          >
            Explore & Enjoy!!
          </h1>
        </div>
        <div>
            <img></img>
        </div>
      </div>
    </div>
  );
};
export default GamesPage;

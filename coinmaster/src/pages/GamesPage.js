import React from "react";
import AfterLoginNav from "../components/AfterLoginNav";
import g1img from "../assets/g1img.png";
import g2img from "../assets/g2img.png";
import g3img from "../assets/g3img.png";
import GamesComponent from "../components/GamesComponent";
import FooterC from "../components/FooterC";
import GameList from "../components/GamesList";

const GamesPage = () => {
  return (
    <div>
      <AfterLoginNav />
      <img src={g1img} style={{ width: "100%", height: "90vh" }} alt="Game Background" />
      <br />
      <br />
      {/* Flex container for centering content */}
      <div className="flex flex-row items-center justify-center">
        <div>
          <img src={g2img} alt="Game Icon 1" />
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
          <img src={g3img} alt="Game Icon 2" />
        </div>
      </div>
        <br></br>
        <br></br>
        <GameList></GameList>
        <br></br>
        <br></br>
        <FooterC></FooterC>
    </div>
  );
};

export default GamesPage;

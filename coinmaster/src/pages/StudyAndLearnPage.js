import React from "react";
import AfterLoginNav from "../components/AfterLoginNav";
import StudyMaterial from "../components/StudyMaterial";
import StudyMaterialContent from "../components/StudyMaterialContent";
import studyimg1 from '../assets/studyimg1.png';
import FooterC from "../components/FooterC";
const StudyAndLearnPage = () => {
  return (
    <div>
      <AfterLoginNav></AfterLoginNav>
      <img src={studyimg1} style={{width:'100%'}}></img>
      <br></br>
      <h1
        style={{
          color: "#212F4A",
          textAlign: "center",
          fontSize: "50px",
          fontWeight: "bolder",
        }}
      >
        Study & Learn
      </h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <StudyMaterialContent></StudyMaterialContent>
      <br></br>
      <br></br>
      <br></br>
      <FooterC></FooterC>
    </div>
  );
};
export default StudyAndLearnPage;

import React from "react";
import { motion } from "framer-motion"; // Import motion
import NavbarComponent from "../components/NavbarComponent";
import SlideShow from "../components/SlideShow";
import AboutUsHome from "../components/AboutUsHome";
import CardsContent from "../components/CardsContent";
import InsightsHome from "../components/InsightsHome";
import ContactUsHome from "../components/ContactUsHome";
import FooterC from "../components/FooterC";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <NavbarComponent />

      {/* SlideShow with animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }} // Start from above and invisible
        whileInView={{ opacity: 1, y: 0 }} // Move to original position and become visible
        exit={{ opacity: 0, y: 50 }} // Exit with downward movement
        transition={{ duration: 0.5 }}
      >
        <SlideShow />
      </motion.div>

      <br />
      <br />

      {/* About Us Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }} // Start from above and invisible
        whileInView={{ opacity: 1, y: 0 }} // Move to original position and become visible
        exit={{ opacity: 0, y: 50 }} // Exit with downward movement
        transition={{ duration: 0.5 }}
      >
        <AboutUsHome />
      </motion.div>

      <br />
      <br />

      <h1 style={{ color: "#212F4A", textAlign: "center", fontSize: "50px", fontWeight: "bolder" }}>
        Our Services
      </h1>
      <br />

      <div className="cardscompo pt-10 pb-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }} // Start from above and invisible
          whileInView={{ opacity: 1, y: 0 }} // Move to original position and become visible
          exit={{ opacity: 0, y: 50 }} // Exit with downward movement
          transition={{ duration: 0.5 }}
        >
          <CardsContent />
        </motion.div>
      </div>

      <br />
      <br />

      <h1 style={{ color: "#212F4A", textAlign: "center", fontSize: "50px", fontWeight: "bolder" }}>
        Latest Financial Insights
      </h1>
      <br />

      <motion.div
        initial={{ opacity: 0, y: -50 }} // Start from above and invisible
        whileInView={{ opacity: 1, y: 0 }} // Move to original position and become visible
        exit={{ opacity: 0, y: 50 }} // Exit with downward movement
        transition={{ duration: 0.5 }}
      >
        <InsightsHome />
      </motion.div>

      <br />
      <br />

      <h1 style={{ color: "#212F4A", textAlign: "center", fontSize: "50px", fontWeight: "bolder" }}>
        Contact Us
      </h1>
      <br />

      <motion.div
        initial={{ opacity: 0, y: -50 }} // Start from above and invisible
        whileInView={{ opacity: 1, y: 0 }} // Move to original position and become visible
        exit={{ opacity: 0, y: 50 }} // Exit with downward movement
        transition={{ duration: 0.5 }}
      >
        <ContactUsHome />
      </motion.div>

      <br />
      <br />

      <FooterC />
    </div>
  );
};

export default HomePage;

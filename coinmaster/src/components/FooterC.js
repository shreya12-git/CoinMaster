import React from 'react';
import './FooterC.css'; // Importing CSS file
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Importing Link for routing

const FooterC = () => {
  return (
    <footer className="footer" role="contentinfo" itemscope="itemscope" itemtype="http://schema.org/WPFooter">
      <div className="social" role="navigation" aria-labelledby="social-heading">
        <h3 id="social-heading" className="sr-only">Follow us on social media</h3>
        <Link to="#" aria-label="Facebook" style={{ color: "#254682" }}>
          <div className="icon-circle">
            <FaFacebook />
          </div>
        </Link>
        <Link to="#" aria-label="Instagram" style={{ color: "#254682" }}>
          <div className="icon-circle">
            <RiInstagramFill />
          </div>
        </Link>
        <Link to="#" aria-label="Twitter" style={{ color: "#254682" }}>
          <div className="icon-circle">
            <FaSquareXTwitter />
          </div>
        </Link>
        <Link to="#" aria-label="LinkedIn" style={{ color: "#254682" }}>
          <div className="icon-circle">
            <FaLinkedin />
          </div>
        </Link>
      </div>
      <div className="footerbar" role="navigation" aria-labelledby="social-heading">
        <h3 id="social-heading" className="sr-only">Follow us on social media</h3>
        <Link to="#" aria-label="Facebook" style={{ color: "white" }}>
        <div>Home</div>
        </Link>
        <Link to="#" aria-label="Instagram" style={{ color: "white" }}>
        <div>Features</div>
        </Link>
        <Link to="#" aria-label="Twitter" style={{ color: "white" }}>
        <div>ContactUs</div>
        </Link>
        <Link to="#" aria-label="LinkedIn" style={{ color: "white" }}>
        <div>FAQs</div>
        </Link>
      </div>
      <p className="copyright">© 2024 SDavidPrince. Demo of a footer. Some Rights Reserved</p>
    </footer>
  );
};

export default FooterC;

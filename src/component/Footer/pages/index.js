import React from "react";
// import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "../FooterPage.scss";

const FooterComponent = function () {
  return (
    <div className="main-footer">
      <div className="footer-container">
        <div className="first-content">
          <div className="web-name">WAREONG</div>
          <div className="slogan-name">Now, Grammar is yours.</div>
          <div className="all-rights">All rights reserved &#169; 2023</div>
        </div>
        <div className="second-container">
          <div className="faq-de"> FAQ</div>
          <div className="faq-de1" style={{paddingTop:'1vh'}}>developed by </div>
          <div className="dev-by">
            <span className="comp-name">
              <a
                href="https://github.com/novaenergon"
                rel="noreferrer"
                target="_blank"
                style={{ textDecoration: "none", color: "#D7DDC8" }}
              >
                novaenergon
              </a>
            </span>
          </div>
        </div>
        {/* <div className="third-content">
          <div className="heading-contact">Contact</div>
          <div className="email-id">
            <MailOutlineIcon />
            <span style={{ marginLeft: ".4rem" }}>wareong@gmail.com</span>
          </div>
          <div className="mobile-number">
            <SmartphoneOutlinedIcon />
            <span style={{ marginLeft: ".4rem" }}>
              +91 (952) 524{" "}
              <span style={{ textDecoration: "underline", cursor: "pointer" }}>
                XXXX
              </span>
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FooterComponent;

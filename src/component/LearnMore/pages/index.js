import React from "react";
import "../LearnMore.scss";

const LearnMorePage = function () {
  return (
    <div className="lm-main">
      <div className="main-container">
        <div className="content-container">
          <div className="heading-text">
            A New <br />
            Different way to <br />
            Improve Your Skills
          </div>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <hr style={{ width: "20vw" }} />
          </div>
          <div className="heading-subtext">
            From grammar and spelling to style and tone, <br />
            Wareong's suggestions are comprehensive, <br />
            helping you communicate effectively and as you intend.
          </div>
          <div className="heading-des" />
        </div>
        <div className="main-images">
          <img
            src="https://raw.githubusercontent.com/raviprakash11/pics/master/learn-more.jpg"
            alt="logo"
            style={{ height: "auto", width: "38vw" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LearnMorePage;

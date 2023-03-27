import { Box, Button, InputBase } from "@mui/material";
import React, { useState, useEffect } from "react";
import { MainServices } from "../../../modules/Dashboard/services/MainServices";
import "../GetStarted.scss";

const GetStartedPage = function () {
  const services = new MainServices();
  const [paragraph, setParagrapgh] = useState("");
  const [comParagraph, setComParagrapgh] = useState(" ");
  const [mainContent, setMainContent] = useState();

  const handleSearchPara = () => {
    setComParagrapgh(paragraph);
  };

  useEffect(() => {
    services
      .getMainData({ comParagraph })
      .then((res) => {
        setMainContent(res["choices"]);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  console.log("main content", mainContent);
  console.log("search key", paragraph);

  return (
    <div className="get-started-app">
      <div className="main-container">
        <div className="main-quote">
          <div className="quote-heading">Quote</div>
          <div className="quote-text">
            “Simple minded people find simple solutions to their problems”
          </div>
          <div className="quote-said">
            ― Bangambiki Habyarimana, The Great Pearl of Wisdom
          </div>
        </div>

        <div className="search-container">
          <Box className="search-box">
            {/* <SearchOutlined className="search-icon" /> */}
            <InputBase
              className="search-field"
              placeholder="Enter your paragraph here.."
              inputProps={{ "aria-label": "id no." }}
              onChange={(e) => setParagrapgh(e.target.value)}
            />
            <Button className="search-btn" onClick={handleSearchPara}>
              ReWrite
            </Button>
          </Box>
        </div>

        <div className="result-container">
          <Box className="result-box">
            <div className="result-heading">Here you go ...</div>
            {mainContent &&
              mainContent.length > 0 &&
              mainContent.map((res) => {
                console.log("content", res);
                return <div className="result-para">{res["text"]}</div>;
              })}
          </Box>
        </div>

        <div className="box-footer">
          <div />
          <div className="box-ftext">Powered by OpenAI</div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;

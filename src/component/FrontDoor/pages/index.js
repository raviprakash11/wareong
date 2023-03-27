import { Box, Button, Link } from "@mui/material";
import React, {useRef} from "react";
import NavigationIcon from '@mui/icons-material/Navigation';
import { useEffect, useState } from "react";
import ContactPage from "../../Contact/pages";
import FooterComponent from "../../Footer/pages";
import GetStartedPage from "../../GetStarted/pages";
import LearnMorePage from "../../LearnMore/pages";
import "../FrontDoor.scss";

const FrontDoorPage = function () {
  const ref = useRef(null);
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  const handleClick1 = () => {
    ref1.current?.scrollIntoView({behavior: 'smooth'});
  };
  const handleClick2 = () => {
    ref2.current?.scrollIntoView({behavior: 'smooth'});
  };
  const handleClick0 = () => {
    ref0.current?.scrollIntoView({behavior: 'smooth'});
  };


  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className="wrn-app">
    <div className="frontdoor-app">
      <div className="main-container">
        <div className="nav-bar-btn">
          <Link
            className="link-btn"
            underline="hover"
            component="button"
            // variant="body2"
            onClick={handleClick0}
          >
            Wareong
          </Link>
          <Link
            className="link-btn"
            underline="hover"
            component="button"
            // variant="body2"
            onClick={handleClick2}
          >
            Get In Touch
          </Link>
        </div>
      </div>

      <Box className="heading-box">
        <div className="heading-text">Correction made simple.</div>
      </Box>

      <div className="divider-main">
        <Box className="divider-de"></Box>
      </div>

      <Box className="heading-box">
        <div className="heading-subtext">
          Getting quality paragraph check quickly is not a struggle anymore. <br/> 
          Subscribe and get access to unlimited paragraph grammar check. Quick response.
        </div>
      </Box>

      <div className="btn-group">
        <div className="btn-container">
          <div className="btn-di">
            <Button className="btn-de btn-get" 
            onClick={handleClick}
            >Get Started</Button>
          </div>
          <div className="btn-di">
            <Button className="btn-de btn-learn"
            onClick={handleClick1}
            >Learn More</Button>
          </div>
        </div>
        <div style={{ width: "10%" }} />
      </div>
    </div>

    <div  ref={ref}>
    <GetStartedPage/>
    </div>
    
    <div ref={ref1}>
    <LearnMorePage/>
    </div>

    <div ref={ref2}>
    <ContactPage/>
    </div>

    {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <NavigationIcon/>
        </button>
      )}

    <FooterComponent/>
    </div>

  );
};

export default FrontDoorPage;

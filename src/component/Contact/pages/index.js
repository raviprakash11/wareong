import { Button } from "@mui/material";
import React, {useRef} from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import emailjs from "@emailjs/browser";
import MailIcon from "@mui/icons-material/Mail";
import "../Contact.scss";

const ContactPage = function () {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      );

    e.target.reset();
  };
  return (
    <div className="contact-page">
      <div className="main-container">
        <div>
          <div className="heading-text">
            <div style={{ fontSize: "4vh" }}>Contact us</div>
            <div style={{ fontSize: "10vh" }}>Get In Touch</div>
          </div>
          <hr style={{ width: "50%" }} />

          {/* <div style={{marginLeft:'8vw'}}
          >Feel free to reach out to us</div> */}
          <form ref={form} onSubmit={sendEmail}>
            <div style={{ marginLeft: "4vw" }}>
              <div className="textfield-de" style={{ paddingTop: "4vh" }}>
                <input
                  placeholder="Enter name"
                  type="text"
                  name="user_name"
                  style={{
                    padding: ".6rem",
                    width: "28vw",
                    borderColor: "black",
                    color: "black",
                    border: "1px solid black",
                    borderRadius: "8px",
                    backgroundColor: '#D7DDC8'
                  }}
                />
              </div>
              <div className="textfield-de" style={{ paddingTop: "2vh" }}>
                <input
                  placeholder="Enter email"
                  type="text"
                  name="user_email"
                  style={{
                    padding: ".6rem",
                    width: "28vw",
                    borderColor: "black",
                    color: "black",
                    border: "1px solid black",
                    borderRadius: "8px",
                    backgroundColor: '#D7DDC8'
                  }}
                />
              </div>
              <div className="textfield-de" style={{ paddingTop: "2vh" }}>
                <input
                  placeholder="Enter message"
                  name="message"
                  style={{
                    padding: ".6rem",
                    width: "28vw",
                    borderColor: "black",
                    color: "black",
                    border: "1px solid black",
                    borderRadius: "8px",
                    backgroundColor: '#D7DDC8'
                  }}
                />
              </div>
              <div>
                <div className="btn-group">
                  <div className="btn-send">
                    <Button className="btn-desend" type="submit">
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div>
            <div className="cn-dds-app">
              <div>
                <LocationOnIcon className="icon-dds-app" />
              </div>
              <div>
                <div className="heading-app-name">Our Location</div>
                <div className="content-name">Bengaluru, India</div>
              </div>
            </div>

            <div style={{ paddingTop: "2vh" }} className="cn-dds-app">
              <div>
                <MailIcon className="icon-dds-app" />
              </div>
              <div>
                <div className="heading-app-name">Email Address</div>
                <div className="content-name">mail@wareong.com</div>
              </div>
            </div>

            <div style={{ paddingTop: "2vh" }} className="cn-dds-app">
              <div>
                <SmartphoneIcon className="icon-dds-app" />
              </div>
              <div>
                <div className="heading-app-name">Phone Number</div>
                <div className="content-name">+91 (952) 524 XXXX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

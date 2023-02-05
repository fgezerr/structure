import React, { useState,useRef } from "react";
import "./ContactUs.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import ReactMap from "./ReactMap/ReactMap";
function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs

      .sendForm(
        //Service_id in emailjs
        "service_2g4xhmp",
        //TemplateId in emailjs
        "template_spvigmn",
        form.current,
        //User_id in emailjs
        "rxeVoxrNIeq8FCbm4"
      )
      .then(
        (result) => {
          toast.success("your message has been sent successfully !", {
            position: toast.POSITION.TOP_RIGHT,
          });
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
          toast.error("sending failed !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      );
    handleClick();
  };

  const [user_name, setUser_name] = useState("");
  const [user_email, setUser_email] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };
  const handleChangeUserEmail = (event) => {
    setUser_email(event.target.value);
  };
  const handleChangeUserName = (event) => {
    setUser_name(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleClick = () => {
    setMessage("");
    setUser_email("");
    setUser_name("");
    setPhone("");
  };

  return (
    <section className="contact-section">
      <div className="container">
        <ToastContainer position="top-center" />
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="contact-wrap w-100 p-lg-5 p-4">
                    <h3 className="mb-4">Mesajınızı İletin</h3>
                    <form ref={form} onSubmit={sendEmail}>
                      <label>İsim</label>
                      <input
                        onChange={handleChangeUserName}
                        value={user_name}
                        type="text"
                        id="textfield1"
                        name="user_name"
                      />
                      <label>Email</label>
                      <input
                        onChange={handleChangeUserEmail}
                        value={user_email}
                        type="email"
                        id="textfield2"
                        name="user_email"
                      />
                      <label>Telefon Numaranız</label>
                      <input
                        onChange={handleChangePhone}
                        value={phone}
                        type="text"
                        id="textfield3"
                        name="phone"
                      />
                      <label>Mesajınız</label>
                      <textarea
                        onChange={handleChangeMessage}
                        value={message}
                        id="textfield4"
                        name="message"
                      />
                      <input type="submit" value="Gönder" />
                    </form>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="info-wrap w-100 p-lg-5 p-4 img">
                    <h3>Bize Ulaşın</h3>
                    <p className="mb-4">
                      Fikir , öneri ve isteklerinizi bizimle paylaşabilirsiniz.
                    </p>
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <FaMapMarkerAlt />
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Adres:</span> Sırakapılar Mahallesi , no:22
                          Merkezefendi Denizli
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <FaPhoneAlt />
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Telefon:</span>
                          <a href="tel://123456789">(555) 555-0000</a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <FaPaperPlane />
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Email:</span>
                          <a href="mailto:info@yoursite.com">
                            muhammedfatih@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReactMap />
    </section>
  );
}

export default ContactUs;

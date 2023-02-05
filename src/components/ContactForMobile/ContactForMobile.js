import React from "react";
import "./ContactForMobile.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { HiMail } from "react-icons/hi";

function ContactForMobile() {
  return (
    <div className="Contact-For-Mobile">
      <div className="cfm-1">
      <a class="text-light" aria-current="page" href="tel:5529457423">
        <BsFillTelephoneFill />
        </a>
      </div>
      <div className="cfm-2">
        <MdLocationPin />
      </div>
      <div className="cfm-3">
      <a class="text-light" href="mailto:muhammedfatih@gmail.com">
        <HiMail />
      </a>
      </div>
    </div>
  );
}

export default ContactForMobile;

import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import chatprofile from "../../images/chatprofile.jpg";
import "./Whatsapp.scss"

function Whatsapp() {
  return (
    <div className="_wp">
      <FloatingWhatsApp
        phoneNumber="05529457423"
        accountName="Muhammed Fatih"
        chatMessage="Merhaba! 👋 Size Nasıl Yardımcı Olabiliriz?"
        placeholder="Mesajınızı Yazın.."
        avatar={chatprofile}
        statusMessage="Genellikle 1 saat içinde yanıt verir"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </div>
  );
}

export default Whatsapp;

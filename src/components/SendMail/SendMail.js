import React, { useState } from 'react';
import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';

function SendMail() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const sendEmail = async () => {
    try {
      // SendGrid için yeni bir taşıyıcı oluştur
      let transporter = nodemailer.createTransport(
        sgTransport({
          apiKey: 'SENDGRID_API_KEY'
        })
      );

      // emaili gönder
      let info = await transporter.sendMail({
        from: 'youremail@example.com', // gönderen adresi
        to: email, // alıcıların listesi
        subject: subject, // Konu
        text: message, // düz metin içeriği
        html: message // html içeriği
      });
      setStatus('Email sent: ' + info.messageId);
    } catch (err) {
      setStatus('Error occurred: ' + err);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendEmail}>Send Email</button>
      <p>{status}</p>
    </div>
  );
}

export default SendMail;
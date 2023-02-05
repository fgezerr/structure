import React from 'react'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import ContactUs from '../../components/ContactUs/ContactUs'

function Contacts() {
  return (
    <div>
        <div
        style={{
          width: "100%",
          height: "150px",
          background: "black",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <h5>Hakkımızda</h5>
          </div>
          <div>
            <span>
              <Link to="/" style={{ textDecoration: "none" }}>
                <h6 style={{ color: "#fff", display: "inline-flex" }}>
                  Anasayfa
                </h6>
              </Link>
            </span>
            <span> / İletişim</span>
          </div>
        </div>
      </div>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Contacts
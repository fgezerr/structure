import React from 'react'
import AboutUs from '../../components/AboutUs/AboutUs'
import Hizmetlerimiz from '../../components/Hizmetlerimiz/Hizmetlerimiz'
import HowWorking from '../../components/HowWorking/HowWorking'
import Slide from '../../components/Slide/Slide'
import Companies from '../../components/Companies/Companies'
import Footer from '../../components/Footer/Footer'
import ContactForm from '../../components/ContactForm/ContactForm'
import Projelerimiz from '../../components/Projelerimiz/Projelerimiz'
import ScrollButton from '../../components/ScrollButton/ScrollButton'

function Dashboard() {
  return (
    <div>
         <Slide  />
         <Hizmetlerimiz  />
         <AboutUs/>
         <Projelerimiz/>
         <HowWorking/>
         <Companies/>
         <ContactForm/>
         <ScrollButton/>
         <Footer  />
    </div>
  )
}

export default Dashboard
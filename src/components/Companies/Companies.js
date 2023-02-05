import React from 'react'
import "./Companies.scss"

function companies() {
  return (
    <div className='refs'>   
        <div className='ref'>
            <div>
            <img src={require('../../images/company1.jpg')} alt="companies"></img>
            </div>
            <div>
            <img src={require('../../images/company2.png')} alt="companies"></img>
            </div>
            <div>
            <img src={require('../../images/company3.jpg')} alt="companies"></img>
            </div>
            <div>
            <img src={require('../../images/company4.png')} alt="companies"></img>
            </div>
            <div>
            <img src={require('../../images/company5.png')} alt="companies"></img>
            </div>
            <div>
            <img src={require('../../images/company6.jpg')} alt="companies"></img>
            </div>
            <div>
            <img src={require('../../images/company7.png')} alt="companies"></img>
            </div>
        </div>
        <hr/> 
    </div>
  )
}

export default companies
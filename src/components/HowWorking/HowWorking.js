import React from 'react'
import "./HowWorking.scss"
import {SiThreedotjs} from 'react-icons/si'
import {AiOutlineTeam} from 'react-icons/ai'
import {RxRulerSquare} from 'react-icons/rx'
import {TbArmchair2} from 'react-icons/tb'
import {TfiTimer} from 'react-icons/tfi'

function HowWorking() {
  return (
    <div className='how_working'>
        <div className='baslik'>
            <h5>Nasıl Çalışırız <i class="bi bi-question-octagon"></i></h5>
        </div>
        <div className='descs'>
            <div>
            <AiOutlineTeam className='i'/>
            <h6>Profesyonel Ekip</h6>
            <p className='p'>Profesyonel ekibimiz ile müşterilerimize hizmet vererek 7/24 ulaşma imkanı sunmaktayız.</p>
            </div>
            <div>
            <SiThreedotjs className='i'/>
            <h6>Projelendirme 3D Görselleştirme</h6>
            <p className='p'>3D görselleştirme ile sizlere projelerin tüm ayrıntılarını sunabilmekteyiz.</p>
            </div>
            <div>
            <RxRulerSquare className='i'/>
            <h6>Doğru Analiz</h6>
            <p className='p'>Sizden gelen ürün taleplerinin eksiksiz ve detaylı analizini yapmaktayız.</p>
            </div>
            <div>
            <TbArmchair2 className='i'/>
            <h6>Kaliteli Ürünler</h6>
            <p className='p'>Kalite standartları sertifikalarına sahip ürünlerimizi sizlere sunmaktayız.</p>
            </div>
            <div>
            <TfiTimer className='i'/>
            <h6>Zamanında Teslimat</h6>
            <p className='p'>Zamanında teslimat ile öngörülen sürelerde ürünün teslimini sağlamaktayız.</p>
            </div>
        </div>
        <hr/> 
    </div>
  )
}

export default HowWorking
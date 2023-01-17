import React from 'react'
import BoxbarFood from './BoxbarFood.js'
import {foodData,techData,beautyData,dailyData,travelData} from '../data/videoData.js'
import '../styles/main.css'



function Main() {
  return (
    <div className='main'>
    
    <div className="food">
    
      <BoxbarFood title="food" arr={foodData}/>
    </div>


    
    <div className="travel">
    
      <BoxbarFood title="travel" arr={travelData}/>
    </div>



    <div className="tech">
    
      <BoxbarFood title="tech" arr={techData}/>
    </div>



    <div className="daily">
    
      <BoxbarFood title="daily" arr={dailyData}/>
    </div>



    <div className="beauty">
    
      <BoxbarFood title="beauty" arr={beautyData}/>
    </div>
    
    </div>
    
  )
}

export default Main
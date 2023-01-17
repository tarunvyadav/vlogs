import React, {useEffect,useState}from 'react'
import Box from './Box.js'
import '../styles/barbox.css'
import axios from 'axios';


function BoxbarFood({title,arr}) {




 


  return (<>
    
    <div className='Boxbar'>
    <div className='titleBox'><div className='title'>{title}</div></div>
     <div className='titleBox1'>{arr.map((item)=>{return(<Box item={item} key={item.videoId}/>)})}</div>
    </div>
    </>
  )
}

export default BoxbarFood
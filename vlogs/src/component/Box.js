import React, {useEffect, useRef, useState} from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SideBox from './SideBox';
import Youtube from "react-youtube"
import {Link} from "react-router-dom"

import '../styles/box.css'

function Box({item}) {
const[show,setShow] = useState(false)

  const {url, description,title,channelTitle,videoId} = item;

  

const ShowSideBox= ()=>{
      setShow(!show)
   
}

 

  
   

  return (<>
    <div className='Box' >
    <Link to={`/${videoId}`}><img src={url} className='img'/></Link>

   <div className='otherHalf'>
     <div className='top'><MoreVertIcon className='MoreVertIcon'  onClick={ShowSideBox}/>
     <p className='title'>{title}</p></div>
      <p className='title'>{channelTitle}</p>
      <SideBox item={item} show={show}  setShow={setShow}/>
   </div>
       
    </div>
    </>
  )
}

export default Box
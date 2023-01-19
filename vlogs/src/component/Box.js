import React, {useEffect, useRef, useState} from 'react'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SideBox from './SideBox';
import {Link} from "react-router-dom"
import '../styles/box.css'

function Box({item}) {
const[show,setShow] = useState(false)
let SideBoxRef = useRef();

useEffect(()=>{
    let handler = (e)=>{
      if(!SideBoxRef.current.contains(e.target)){
         setShow(false)
           console.log(show)
      }
    };
    document.addEventListener('mousedown', handler);
    return() =>{document.removeEventListener('mousedown', handler)}
  },[])


const {url, description,title,channelTitle,videoId} = item;

  

const ShowSideBox= ()=>{
      setShow(!show)
   
}

 

return (
  <>
    <div className='Box' >
      <Link to={`/${videoId}`}><img src={url} className='img'/></Link>

      <div className='otherHalf'>
        <div className='top'><MoreVertOutlinedIcon className='MoreVertIcon'  onClick={ShowSideBox} ref={SideBoxRef}/>
        <p className='title'>{title}</p></div>
        <p className='title'>{channelTitle}</p>
         <SideBox item={item} show={show}  setShow={setShow} />
      </div>
       
    </div>
  </>
  )
}

export default Box
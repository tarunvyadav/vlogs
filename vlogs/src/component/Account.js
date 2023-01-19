import React, {useState, useEffect, useRef}from 'react'
import '../styles/account.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DownWatch from './DownWatch';
import Emails from '../data/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Account() {

  const[showDown,setShowDown] = useState(false)

  let DownRef = useRef();
  const Email= Emails
  useEffect(()=>{
    let handler = (e)=>{
      if(!DownRef.current.contains(e.target)){
        setShowDown(false)
        console.log(showDown)
      }
    };
    document.addEventListener('mousedown', handler);
    return() =>{document.removeEventListener('mousedown', handler)}
  })



  const ShowAccountFunc = ()=>{
    setShowDown(!showDown)
    console.log(showDown)
  }


return (
   
    <div className='account' onClick={ShowAccountFunc} ref={DownRef}>
       <AccountCircleIcon className='AccountCircleIcon' />
       <ArrowDropDownIcon className='ArrowDropDownIcon'/>
       <DownWatch show={showDown}/>
    </div>
  
  )
}

export default Account
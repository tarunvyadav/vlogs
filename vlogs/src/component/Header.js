import React, {useEffect, useRef} from 'react'
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import '../styles/header.css'
import Account from './Account';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useSelector,useDispatch } from 'react-redux';
import {formAppears,formDisappears} from '../redux/action/action'
import LoginForm from  './LoginForm.js'
import {Link} from "react-router-dom"

function Header() {
   const dispatch = useDispatch();
    const videos = useSelector((state)=>state);

     let formRef = useRef();

  useEffect(()=>{
    let handler = (e)=>{
      if(!formRef.current.contains(e.target)){
        dispatch(formDisappears())
      }
    };
    document.addEventListener('mousedown', handler);
    return() =>{document.removeEventListener('mousedown', handler)}
  })

   const userActive= videos.allvideos.user;

  //  console.log(formShow)

  const showForm= ()=>{
         dispatch(formAppears())
         
  }
  return (
    <div className='header'>
        <Link to='/'><span className='vlog'>VLOGS.COM</span></Link>
        
        <div className="lodinPlus" ref={formRef}>{userActive?<div className='login' onClick={showForm}>
          LOGIN
        </div>:<Account/> } 
         <LoginForm/></div>
        
    </div>
  )
}

export default Header        
        
          

             
  
       

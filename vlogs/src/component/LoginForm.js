import React, {useState, useEffect, useRef}from 'react'
import '../styles/loginForm.css'
import { useSelector,useDispatch } from 'react-redux';
import {changeUser,formDisappears} from '../redux/action/action'
import Emails from '../data/Email';

function LoginForm() {

  const videos = useSelector((state)=>state);
  const dispatch = useDispatch();
  const setUser= videos.allvideos.user
  const formShow= videos.allvideos.show
  const[input,setInput] = useState({
    email:'',
    password: ''
  })
  
  const loginFun = (e)=>{
       e.preventDefault()
          const value=e.target.value;
          const name = e.target.name;
          setInput((preValue)=>{
            if(name==="email"){
              return{
                email:value,
                password:preValue.password,
              }
            }if(name==="password") {
              return{
                email:preValue.email,
                password:value,
              }}
          })

         
         
  }
  


  const check= ()=>{
  
    if( Emails.find((Email)=>{return(Email.email==input.email&&Email.password==input.password)})){
      dispatch(changeUser())
      dispatch(formDisappears())
    }else{
      return alert('Inputs Are Incorrect!!!')
    }

  } 


  const onSubmit= (e)=>{
     e.preventDefault()
     check()
     setInput({
       email:'',
       password: ''
   })
  }
 
  
 return (
    <div className={`logindiv1 ${formShow &&`logindiv`}`} onSubmit={onSubmit} >
      <div className='text'>Login With Email</div>
      <form><input type='email' name="email"  placeholder='type your email here....'  onChange={loginFun} value={input.email}/>
      <input type='password' name="password"  placeholder='type your passward here....' onChange={loginFun} value={input.password}/>
      <button type='submit'>Login</button></form>
        
    </div>
  )
}

export default LoginForm


 



  

 
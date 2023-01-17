import React, {useEffect, useRef, useState} from 'react'
import '../styles/sideBox.css'
import { useSelector,useDispatch } from 'react-redux';
import {addWatchList,addLiked,addWatchlater} from '../redux/action/action'


function SideBox({item,show, setShow}) {
    const videos = useSelector((state)=>state);
   const dispatch = useDispatch();
     const videoList= videos.allvideos.WatchList


         let SideBoxRef = useRef();



    const userActive= videos.allvideos.user;

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
     
    

    const load=item;

     const watchFun = async()=>{

      if(userActive){ return alert('Please Login')}
            dispatch(addWatchList(load))
           
     }

       const likedFun = async()=>{
          if(userActive){ return alert('Please Login')}
          dispatch(addLiked(load))
     }

       const laterFun = async()=>{
           if(userActive){ return alert('Please Login')}
          dispatch(addWatchlater(load))
        
     }
  


    return (
    <div className={`sideBoxhide ${show &&`sideBox`}` } ref={SideBoxRef}>
        <div className='sideBoxChild' onClick={watchFun} >
            WATCHLIST
        </div>
         <div className='sideBoxChild' onClick={likedFun} >
            LIKED
        </div>
         <div className='sideBoxChild' onClickCapture={laterFun} >
            watchlater
        </div>
    </div>
  )
}

export default SideBox
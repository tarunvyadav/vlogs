import React from 'react'
import '../styles/DownWatch.css'
import {Link} from "react-router-dom"
import { useSelector,useDispatch } from 'react-redux';
import {changeUser} from '../redux/action/action'
import '../styles/loginForm.css'

function DownWatch({show}) {
   const dispatch = useDispatch();
    const videos = useSelector((state)=>state);

    const userActive= videos.allvideos.user;

    const logOutFunc= ()=>{
      dispatch(changeUser())
     console.log(userActive)
    }


   


  return (
    <div className={`DownWatchHide ${show &&`DownWatch`}`}>
       <Link to='/WatchList'><div className='downList'>
            WATCHLIST
        </div></Link> 
        <Link to='/Liked'><div className='downList'>
             LIKED
        </div></Link> 
        <Link to='/WatchLater'><div className='downList'>
            WATCHLATER
        </div></Link> 
         <div className='downList' onClick={logOutFunc}>
            LOGOUT
        </div>
    </div>
  )
}

export default DownWatch
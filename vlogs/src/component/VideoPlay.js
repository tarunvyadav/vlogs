import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import '../styles/VideoPlay.css'
import { useSelector,useDispatch } from 'react-redux';
import {changeUser} from '../redux/action/action'
import {Link} from "react-router-dom"


const VideoPlay = () => {
    
   
    const { id } = useParams();


    const dispatch = useDispatch();
    const videos = useSelector((state)=>state);

    const userActive= videos.allvideos.user;
    


    const logOutFunc= ()=>{
      dispatch(changeUser())
     console.log(userActive)
    }

    const messageFunc=()=>{
        return alert('Please Login')
    }
  
     return (
        <>
            <div className="player"><ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id}`}
                            controls
                            width="100%"
                            height="100%"
                            style={{ backgroundColor: "#000000" }}
                            playing={true}
                        />
            </div>
            {!userActive? <div className="sidebar">
                 <Link to='/WatchList'><div className='sideDownList'>
                      WATCHLIST
                    </div>
                 </Link> 
                 <Link to='/Liked'><div className='sideDownList'>
                      LIKED
                  </div> 
                 </Link> 
                 <Link to='/WatchLater'><div className='sideDownList'>
                      WATCHLATER
                  </div>
                 </Link> 
            </div>:<div className="sidebar"><div className='sideDownList' onClick={messageFunc}>
                      WATCHLIST
                    </div>
                 
                 <div className='sideDownList' onClick={messageFunc}>
                      LIKED
                  </div> 
                
                 <div className='sideDownList' onClick={messageFunc}>
                      WATCHLATER
                  </div> </div>
            }
           
        </>
     )
}


export default VideoPlay;

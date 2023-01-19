import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import '../styles/watchList.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteIcon from '@mui/icons-material/Delete';
import {removeWatchlater} from '../redux/action/action'

function WatchLater() {

    const videos = useSelector((state)=>state);
    const dispatch = useDispatch();
    const videoList= videos.allvideos.watchlater
    

 
  

  return (
    <>
      <div className='headBar'>
        <div className='pageOption'>
          WATCHLATER
        </div>

      </div>
      <div className='videoList'>{videoList.map((video)=>{
        
        const{url, title,channelTitle,videoId} = video;
        
        const DeleteVideo= ()=>{
            dispatch(removeWatchlater(video))
        }

        return(
          <> 
            <div className='bar' key={videoId}>
               <img src={url}/>
               <div className='text'><p className='title'>{title}</p>
               <div className='channel'><p>{channelTitle}</p> <DeleteIcon className='DeleteIcon' onClick={DeleteVideo}/></div></div>
            </div>
          </>)})}
      </div>
     
    </>
  )
}

export default WatchLater
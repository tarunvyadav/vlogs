import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import '../styles/watchList.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteIcon from '@mui/icons-material/Delete';
import {removeWatchList} from '../redux/action/action'

function WatchList() {

    const videos = useSelector((state)=>state);
   const dispatch = useDispatch();

   const videoList= videos.allvideos.WatchList

    console.log( videos)

  return (
    <>

      <div className='headBar'>
        <div className='pageOption'>
          WATCHLATER
        </div>

      </div>
      <div className='videoList'>{videoList.map((video)=>{
        
        const{url, title,channelTitle} = video;
        
        const deleteVideo=()=>{
           dispatch(removeWatchList(video))
        }

        return(<> 
        <div className='bar'>
          <img src={url}/>
          <div className='text'>
            <p className='title'>{title}</p>
            <div className='channel'>
            <p>{channelTitle}</p>
             <DeleteIcon className='DeleteIcon' onClick={deleteVideo}/>
             </div>
          </div>
        </div></>)})}
      </div>
     
    </>
  )
}

export default WatchList
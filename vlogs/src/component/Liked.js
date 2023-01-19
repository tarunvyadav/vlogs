import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import '../styles/watchList.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeLiked} from '../redux/action/action'

function Liked() {

   const videos = useSelector((state)=>state);
   const dispatch = useDispatch();
   const videoList= videos.allvideos.liked
   


  return (
    <>
      <div className='headBar'>
        <div className='pageOption'>
           LIKED
        </div>

      </div>
      <div className='videoList'>{videoList.map((video)=>{
        
        const{url, title,channelTitle} = video;

         const deletevideo=()=>{
            dispatch( removeLiked(video))
         }


        return(<> 
        <div className='bar'>
          <img src={url}/>
          <div className='text'><p className='title'>{title}</p>
            <div className='channel'><p>{channelTitle}</p> <DeleteIcon className='DeleteIcon' onClick={deletevideo}/></div>
          </div>
        </div></>)})}
      </div>
     
    </>
  )
}

export default Liked
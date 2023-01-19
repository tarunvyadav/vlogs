import React from 'react'
import { ActionTypes } from "../constant/Action-types";

const initialState = {
   
    WatchList: [],
    liked: [],
    watchlater: [],
    user: true,
    show:false,
}
export const  watchReducer= (state = initialState, {type,payload})=> {

    switch (type) {
        case ActionTypes.ADD_WATCHLIST:
             return {
            ...state,
            WatchList:[...state.WatchList, {...payload}]
        }
         
        case ActionTypes.ADD_LIKED:
             return {
            ...state,
            liked:[...state.liked, {...payload}]
        }

        case ActionTypes.ADD_WATCHLATER:
             return {
            ...state,
            watchlater:[...state.watchlater, {...payload}]
        }

        case ActionTypes.REMOVE_WATCHLIST:
             return {
            ...state,
          WatchList:[...state. WatchList.filter((item)=>{return (item.videoId
                  !==payload.videoId)})]
        }

        case ActionTypes.REMOVE_LIKED:
             return {
            ...state,
           liked:[...state.liked.filter((item)=>{return (item.videoId
                  !==payload.videoId)})]
        }

        case ActionTypes.REMOVE_WATCHLATER:
             return {
            ...state,
           watchlater:[...state.watchlater.filter((item)=>{return (item.videoId
                  !==payload.videoId)})]
        }

        case ActionTypes.SHOW_FORM:
             return {
            ...state,
             show:!state.show,
        }

        case ActionTypes.HIDE_FORM:
             return {
            ...state,
             show:false,
        }
        
          
        case ActionTypes.SET_USER:
             return {
            ...state,
               user:!state.user,
        }

       
    
        default:
            return state;
 }
}

export default watchReducer
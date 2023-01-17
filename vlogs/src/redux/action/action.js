

 export const addWatchList =(load)=>{ return{
                            type: "ADD_WATCHLIST",
                            payload:load,
                          }
                        console.log("kk")}

 export   const addLiked =(load)=>{return{
                            type: "ADD_LIKED",
                            payload:load,
                          }}

 export   const addWatchlater =(load)=>{return{
                            type: "ADD_WATCHLATER",
                            payload:load,
                          }}

 export const removeWatchList =(load)=>{ return{
                            type: "REMOVE_WATCHLIST",
                            payload:load,
                          }
                       }

 export   const removeLiked =(load)=>{return{
                            type: "REMOVE_LIKED",
                            payload:load,
                          }
                          }

 export   const removeWatchlater =(load)=>{return{
                            type: "REMOVE_WATCHLATER",
                            payload:load,
                          }
                         console.log(load)}

 
 export   const formAppears =()=>{return{
                            type: "SHOW_FORM",
                          
                          }
                       }

export   const formDisappears =()=>{return{
                            type: "HIDE_FORM",
                          
                          }
                       }


   export   const changeUser =()=>{return{
                            type: "SET_USER",
                          
                          }
                        
                       }

   
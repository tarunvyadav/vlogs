import './App.css';
import Header from './component/Header.js'
import Main from  './component/Main.js'
import WatchList from './component/WatchList';
import WatchLater from './component/WatchLater';
import Liked from './component/Liked';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import VideoPlay from './component/VideoPlay';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
         {/* <Main/> */}
          <Routes>
           <Route path='/' element={<Main/>} />
         
             <Route  path='/WatchList' element={<WatchList/>}/> 
        
            <Route path='/WatchLater' element={<WatchLater/>}/>
       
            <Route path='/Liked' element={<Liked/>}/>
         
            <Route path='/:id' element={<VideoPlay/>}/>
            
          </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

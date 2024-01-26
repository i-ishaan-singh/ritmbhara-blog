
import './App.css'
import React from 'react';
import axios from 'axios';
import chakraImage from './assets/chakra 2 copy.png';

function App() {
  const [serverTime, setServerTime] = React.useState("none");

  axios.get('/data/get-server-time').then(function(res){
    setServerTime(res.data);
  }).catch(function(){
    setServerTime('error');
  })

  return (
    <>
      <img src={chakraImage} className="base-image"/>
      <div className="header">
          
          <div className="header-div">
            <div className="header-nav">
              <div className="header-nav-item nav-active">
                Home
              </div>
              <div className="header-nav-item">
                Blog
              </div>
              <div className="header-nav-item">
                Contact
              </div>
            </div>
          </div>
      </div>
      <div className="main-title">
        Experience a new level of holistic healing with 
          <div className="sub-title"><span className="ri">ऋ</span>itmbhara Svasth Parivar</div>
      </div>
      <div className="footer">{serverTime}</div>
    </>
  )
}

export default App

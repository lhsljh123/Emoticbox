import React, { useState, useEffect } from 'react';
import { HashRouter, Route, useParams } from "react-router-dom";
import Emoticon_Thmnail from './emoticon/emoticon_thmnail.json';
import Emoticon from './Emoticon'
import logo from "./img/logo_emoticBox.png"
import logo_bar from "./img/logo_bar.png";
import './App.css';
import Detail  from './Detail';

const App = () => {
  
  return (
    <HashRouter>
      <Route path="/" exact={true}>
        <div className="main">
          <div className="logo">
            <img src={logo_bar}/>
            <img src={logo}/>
            <img src={logo_bar}/>
          </div>
          <p className="notice">EmoticBox에 등록된 이모티콘 중 다우오피스에 적합한 이모티콘의 리스트입니다.<br />마음에 드시는 이모티콘의 이름을 메일로 전달해주세요.</p>
          <div className="emoticons">
            {Emoticon_Thmnail.map(emoticon => (
              <Emoticon 
                id={emoticon.id}
                imgId={emoticon.emoticonId}
                title={emoticon.title}
                drawer={emoticon.drawer}
              />
            ))}
          </div>
        </div>
      </Route>
      <Route path="/emoticon/:id" component={Detail}>
          
      </Route>
    </HashRouter>
  );
}

export default App;

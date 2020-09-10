import React from 'react';
import logo from './img/logo_emoticBox.png';
import logo_bar from './img/logo_bar.png';
import './Detail.css';
import Emoticon_All from './emoticon/emoticon_all.json';

const Detail = ({match}) => {
    const id = `${match.params.id}`;
    const emoticonList = [];
    Emoticon_All.map(emoticon => {
        if (emoticon.id.toString() === id.toString()) emoticonList.push(emoticon)
    });
    console.log(emoticonList);
    const emoticonSrc = `https://emoticon.emoticbox.com/src/${emoticonList[0].emoticonId}`
    return (
        <div className="main">
            <div className="logo">
                <img src={logo_bar}/>
                <img src={logo}/>
                <img src={logo_bar}/>
            </div>
            <div className="thmnail">
                <img src={emoticonSrc}/>
                <div className="thmnail_data">
                    <p className={"title"}>{emoticonList[0].title}</p>
                    <p className={"drawer"}>{emoticonList[0].drawer}</p>
                    <p className={"story"}>{emoticonList[0].story}</p>
                </div>
            </div>
            <div className="emoticonList">
                {emoticonList.map( emoticon => (
                    <img src={`https://emoticon.emoticbox.com/src/${emoticon.emoticonId}`}/>
                ))}
            </div>
        </div>
    );
}
export default Detail;
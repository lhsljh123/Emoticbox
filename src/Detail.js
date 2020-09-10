import React, {useEffect} from 'react';
import logo from './img/logo_emoticBox.png';
import logo_bar from './img/logo_bar.png';
import './Detail.css';
import styled from "styled-components";
import Emoticon_All from './emoticon/emoticon_all.json';
import Emoticon_Business from './emoticon/emoticon_business.json';
import Emoticon_Move from './emoticon/emoticon_move.json';
import Emoticon_Stop from './emoticon/emoticon_stop.json';
import Emoticon_2030 from './emoticon/emoticon_2030.json';
import Emoticon_4050 from './emoticon/emoticon_4050.json';

const Detail = ({match}) => {
    const id = `${match.params.id}`;
    const emoticonList = [];
    const tagList = [];
    useEffect (()=>{
        window.scrollTo(0, 0)
    },[])
    // 패키지에서 이모티콘 가져오기
    Emoticon_All.map(emoticon => { if (emoticon.id.toString() === id.toString()) emoticonList.push(emoticon) });

    // 이모티콘 태그 가져오기
    Emoticon_Business.map(emoticon => { if (emoticon.id.toString() === id.toString()) tagList.push("업무용 이모티콘") });
    Emoticon_Move.map(emoticon => { if (emoticon.id.toString() === id.toString()) tagList.push("움직이는 이모티콘") });
    Emoticon_Stop.map(emoticon => { if (emoticon.id.toString() === id.toString()) tagList.push("멈춤/퀄리티좋은") });
    Emoticon_2030.map(emoticon => { if (emoticon.id.toString() === id.toString()) tagList.push("2030 타겟") });
    Emoticon_4050.map(emoticon => { if (emoticon.id.toString() === id.toString()) tagList.push("4050 타겟") });

    console.log(emoticonList);
    const emoticonSrc = `https://emoticon.emoticbox.com/src/${emoticonList[0].emoticonId}`
    return (
        <div className="main">
            <div className="logo">
                <img src={logo_bar}/>
                <img src={logo}/>
                <img src={logo_bar}/>
            </div>
            <p className="announce">움직이는 이모티콘의 애니메이션을 다시 보고 싶으시면 새로고침(F5)을 해주세요.</p>
            <div className="introduction">
                <div className="thmnail">
                    <img src={emoticonSrc}/>
                    <div className="thmnail_data">
                        <p className={"title"}>{emoticonList[0].title}</p>
                        <p className={"drawer"}>{emoticonList[0].drawer}</p>
                        <p className={"story"}>{emoticonList[0].story}</p>
                    </div>
                </div>
                <div className="tagList">
                    {tagList.map(tag => (
                        <p className="tag">{tag}</p>
                    ))}
                </div>
            </div>
            <div className="emoticonList">
                {emoticonList.map( emoticon => (
                    <OutlineBox>
                    <StickerImage src={`https://emoticon.emoticbox.com/src/${emoticon.emoticonId}`}/>
                    </OutlineBox>
                ))}
            </div>
        </div>
    );
}
const OutlineBox = styled.div`
    width: 180px;
    height: 150px;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #DDDDDD;
    background-color: #FFFFFF;
    &:hover {
        border: 1.5px solid #36BCD6;
    }
`

const StickerImage = styled.img`
    width: 158px;
    height: 128px;
    vertical-align: middle;
    object-fit: contain;
    object-position: center;
`
export default Detail;
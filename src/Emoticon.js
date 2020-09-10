import React, { useRef } from "react";
import PropTypes from "prop-types";
import ApngComponent from 'react-apng';
import './App.css';
import { Link } from "react-router-dom";
import styled from "styled-components";
import test from "./img/test.png";

function Emoticon({id, imgId, title, drawer}){
    const emoticonSrc = `https://emoticon.emoticbox.com/src/${imgId}`;
    //const emoticonSrc = test;
    // const apngRef = useRef();
    // const onMouseOverEmoticon = () => {
    //     const { play } = apngRef.current;
    //     play();
    //   }
    
    //   const onMouseLeaveEmoticon = () => {
    //     const { isPlay, stop } = apngRef.current;
    //     if (isPlay) {
    //       stop();
    //     }
    //   };

    return (
        <div className="emoticon">
            <Link
                to ={{
                    pathname: `/emoticon/${id}`,
                }}>
                {/* <ApngComponent src={emoticonSrc} alt={title} title={title}></ApngComponent> */}
                <OutlineBox>
                    <StickerImage
                        src={emoticonSrc}
                        // ref={apngRef}
                        alt="Image"
                        // onMouseOver={onMouseOverEmoticon}
                        // onMouseLeave={onMouseLeaveEmoticon}
                    />
                </OutlineBox>
                <h3>{title}</h3>
            </Link>
            <h5>{drawer}</h5>
        </div>
    );
}

Emoticon.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    drawer: PropTypes.string.isRequired
}

const OutlineBox = styled.div`
    width: 180px;
    height: 180px;
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
    height: 158px;
    vertical-align: middle;
    object-fit: contain;
    object-position: center;
`
export default Emoticon;
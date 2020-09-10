import React, { useRef } from "react";
import PropTypes from "prop-types";
import ApngComponent from 'react-apng';
import './App.css';
import { Link } from "react-router-dom";
import styled from "styled-components";

function Emoticon({id, imgId, title, drawer}){
    const emoticonSrc = "https://emoticon.emoticbox.com/src/" + imgId;
    const apngRef = useRef();
    const onMouseOverEmoticon = () => {
        const { play } = apngRef.current;
        play();
      }
    
      const onMouseLeaveEmoticon = () => {
        const { isPlay, stop } = apngRef.current;
        if (isPlay) {
          stop();
        }
      };

    return (
        <div className="emoticon">
            <Link
                to ={{
                    pathname: `/emoticon/${id}`,
                }}>
                {/* <img src={emoticonSrc} alt={title} title={title}></ApngComponent> */}
                <StickerImage
                    ref={apngRef}
                    src={emoticonSrc}
                    alt="Image"
                    onMouseOver={onMouseOverEmoticon}
                    onMouseLeave={onMouseLeaveEmoticon}
                />
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

const StickerImage = styled(ApngComponent)`
    width: 158px;
    height: 158px;
    vertical-align: middle;
    object-fit: contain;
    object-position: center;
`
export default Emoticon;
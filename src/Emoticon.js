import React from "react";
import PropTypes from "prop-types";

import './App.css';
import { Link } from "react-router-dom";

function Emoticon({id, imgId, title, drawer}){
    const emoticonSrc = "https://emoticon.emoticbox.com/src/" + imgId;

    return (
        <div className="emoticon">
            <Link
                to ={{
                    pathname: `/emoticon/${id}`,
                }}>
                <img src={emoticonSrc} alt={title} title={title}/>
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
export default Emoticon;
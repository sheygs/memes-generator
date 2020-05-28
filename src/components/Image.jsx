import React from 'react';
import PropTypes from 'prop-types';

export default function Image({ randomImg, firstText, secondText }) {
 return (
    <div className="image">       
       <img src={randomImg} alt="lion"/> 
       <h3 className="top-text">{firstText}</h3>
       <h3 className="bottom-text">{secondText}</h3>
   </div>
 )
}

Image.propTypes = {
   randomImg: PropTypes.string.isRequired,
   firstText:  PropTypes.string.isRequired,
   secondText: PropTypes.string.isRequired
}
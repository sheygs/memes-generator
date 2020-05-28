import React from 'react';
import PropTypes from 'prop-types';

export default function Form({ firstText, secondText, handleSubmit, handleChange }) {
  return (
   <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit} autoComplete="off">
            <input 
                id="firstText"
                type="text"
                name="firstText"
                value={firstText}
                onChange={handleChange}
            />
            <input
                id="secondText"
                type="text"
                name="secondText"
                value={secondText}
                onChange={handleChange}
            />
           <button type="submit">Generate</button>
      </form>                
  </div>
  )
}

Form.propTypes = {
   firstText:  PropTypes.string.isRequired,
   secondText: PropTypes.string.isRequired,
   handleSubmit: PropTypes.func.isRequired,
   handleChange: PropTypes.func.isRequired
}
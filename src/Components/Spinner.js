import React from 'react';
import spinner from '../img/spinner.gif'

const Spinner = () => {
    return (
        <img src={spinner} alt="Loading..." style={ {width: '200px',margin: ' 150px auto',display:'block',} }/>
    )
}

export default Spinner

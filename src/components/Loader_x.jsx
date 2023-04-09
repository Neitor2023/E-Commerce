import React from 'react';
import './Loader.css'

const Loader = () => {
  return (
    <div className='loader'>
      {/* <div><h1>Loader...</h1></div> */}
      <div class="lds-hourglass"></div>
    </div>
  );
};

export default Loader
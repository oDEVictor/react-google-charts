import React from "react";

function LoadingEffect({ isLoading, ...rest }) {

  return (
    <>
      { isLoading ?
        <div className='spinner-border text-info m-5 mx-auto' role='status' />  
        :
        rest.children }
    </>
  );
}

export default LoadingEffect;
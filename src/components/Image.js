import React from 'react';

function Image(props) {
  return(
    <>
      <img src={props.image.urls.small} alt={props.image.description} />
    </>
  );
};

export default Image;
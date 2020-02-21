import React from 'react';
import Image from './Image';

function ImageList(props){

  return(
    <>
      {props.images.map(image => {
        return <Image image={image} />
  })}
    </>
  );
};

export default ImageList;
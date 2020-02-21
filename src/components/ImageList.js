import React from "react";
import Image from "./Image";

function ImageList(props) {
  return (
    <>
      <div className="imageList">
        {props.images.map(image => {
          return <Image image={image} />;
        })}
      </div>
    </>
  );
}

export default ImageList;

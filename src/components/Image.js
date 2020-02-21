import React from "react";

function Image(props) {
  return (
    <>
    <div className="images">
      <img id="images" src={props.image.urls.small} alt={props.image.description} />
    </div>
    </>
  );
}

export default Image;

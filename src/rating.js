import React from "react";

function Rating(props) {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    if (i < props.nbrerate)
      arr.push(<span onClick={() => props.minrate(i + 1)}>★</span>);
    else {
      arr.push(<span onClick={() => props.minrate(i + 1)}>☆</span>);
    }
  }
  return <span>{arr}</span>;
}
export default Rating;

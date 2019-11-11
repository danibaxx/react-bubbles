import React, { useState, useEffect } from "react";
import axiosWithAuth from '../utilities/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosWithAuth()
      .get('/colors')
      .then(result => {
        setColorList(result.data)
        console.log('COLORS', result)
      })
      .catch(error => {
        console.log('COLOR ERROR', error)
      })
  }, [])

  return (
    <>
      <ColorList 
        colors={colorList} 
        updateColors={setColorList} 
      />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

 import React from "react";
 import AxiosData from 'utils/FreeAxios.js'

function test() {
  console.log('test in');
  AxiosData.getList();
}

const FreeBoard = () => {
  return (
    <>
      <div> FREE BOARD LIST </div>
      <button onClick={ () => {test()} }>testBtn</button>
    </>
  );
};

export default FreeBoard;

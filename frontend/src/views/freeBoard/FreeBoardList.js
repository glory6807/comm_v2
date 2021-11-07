 import React, { useEffect } from "react";
 import AxiosData from 'utils/FreeAxios.js'

function test() {
  console.log('test in');
  AxiosData.getList().then((res)=> {
    console.log('res start');
    console.log(res);
    console.log(res.data);
    console.log('res end');
    })

}

const FreeBoard = () => {

  useEffect(test, []);

  return (
    <>
      <div> FREE BOARD LIST </div>
      <button onClick={ () => {test()} }>testBtn</button>
      <span></span>
    </>
  );
};

export default FreeBoard;

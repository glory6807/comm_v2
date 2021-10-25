 import React from "react";
 import AxiosData from 'utils/AxiosApi.js'
// reactstrap components
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Container,
//   Row,
//   Col,
//   UncontrolledTooltip,
// } from "reactstrap";
// core components
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

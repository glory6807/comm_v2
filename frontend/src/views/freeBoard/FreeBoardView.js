import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AxiosData from 'utils/FreeAxios.js'

import {
    Card,
    CardHeader,
    Container,
    Row,
    Table
  } from "reactstrap";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";

const FreeBoardView = () => {

  const [freeData, setFreeData] = useState({});

  //scroll
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.body.classList.add("bg-default");
    return () => {
    document.body.classList.remove("bg-default");
    };
  }, []);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);


  function initFreeView() {
    getBoardNo();
  }

  useEffect(initFreeView, []);

  function getBoardNo() {
    window.location.href.includes('BOARD_NO');
    const preBoardNo = window.location.href.split('=')[1];
    const boardNo = preBoardNo.split('&')[0];
    getFreeView(boardNo);
  }

  async function getFreeView(boardNo) {
    await AxiosData.getOne(boardNo).then((res)=> {
    const test = JSON.parse(JSON.stringify(res.data[0]));
       console.log(test);
       setFreeData(test);
    })
    
  }


  return (
    <>
      <div className="main-content" ref={mainContent}>
      <AuthNavbar />
      <div className="header bg-gradient-info py-7 py-lg-8">
        <Container>  
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">FREE BOARD</h3>
                    <div>{ freeData.BOARD_NO }</div>
                    <div>{ freeData.BOARD_CNTN }</div>
                    <div>{ freeData.BOARD_WRTR }</div>
                    <div>{ freeData.REG_DT }</div> 
                </CardHeader>
                <Table className="align-items-center table-flush" responsive></Table>
              </Card>
            </div>
          </Row>
        </Container>
      </div>
      </div>
      <AuthFooter />
    </>
    );
};

export default FreeBoardView;
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
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

  const { selectRowData } = useSelector((state) => ({selectRowData : state.free.selectRowData}));
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
                    <div>{ selectRowData.BOARD_NO }</div>
                    <div>{ selectRowData.BOARD_TTL }</div>
                    <div>{ selectRowData.BOARD_WRTR }</div>
                    <div>{ selectRowData.REG_DT }</div>
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
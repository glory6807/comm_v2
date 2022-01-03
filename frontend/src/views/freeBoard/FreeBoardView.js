import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import AxiosData from 'utils/FreeAxios.js'

import {
    Card,
    CardHeader,
    Container,
    Row,
    Table,
    Col,
    Button,
    CardBody,
    Form,
    Input,
    FormGroup,
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
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">FREE BOARD</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <div className="pl-lg-4">
                    <Row>
                      <Col>
                          <h4 className="mb-0 card-title">TITLE</h4>
                          <span className="card-stats p-2 mt-2 mb-4 mb-xl-0 card">{ selectRowData.BOARD_TTL }</span>
                      </Col>
                    </Row>
                    <Row>
                    <Col>
                          <h4 className="mb-0 card-title">WRITER</h4>
                          <span className="card-stats p-2 mt-2 mb-4 mb-xl-0 card">{ selectRowData.BOARD_WRTR }</span>
                      </Col>
                      <Col>
                          <h4 className="mb-0 card-title">DATE</h4>
                          <span className="card-stats p-2 mt-2 mb-4 mb-xl-0 card">{ selectRowData.REG_DT }</span>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  <div className="pl-lg-4">
                    <h4 className="mb-0 card-title">CONTENT</h4>
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="4"
                        defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                        Open Source."
                        type="textarea"
                      />
                      <div className="text-center">
                        <button className="btn btn-info">LIST</button>
                        <button className="btn btn-light">MODIFY</button>
                      </div>
                  </div>
                </Form>
              </CardBody>
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
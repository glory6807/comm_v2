/* eslint-disable */
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
    Card,
    CardHeader,
    Container,
    Row,
    Col,
    CardBody,
    Form,
  } from "reactstrap";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
  
const MemBoardCntn = ({memDatas}) => {

    const dispatch = useDispatch();

    const selectContent = (id) => {
      dispatch(selectRow(id))
    }

    const selectRow = (id) => ({
          type: 'GET_MEM_DATA_ONE',
          payload: {
            id: id
          }
    });

    return (
      <>{/*
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
                    <h3 className="mb-0">회원 게시판</h3>
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
                    <span className="card-stats p-2 mt-2 mb-4 mb-xl-0 card">{ selectRowData.BOARD_CNTN }</span>
                      <div className="text-center">
                        <button className="btn btn-info">LIST</button>
                        <button className="btn btn-light" onClick={ () => { selectContent(selectRowData.BOARD_NO) } }>
                          <Link to='/free/modify'>MODIFY</Link>
                        </button>
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
    */}
      </>
    );
};

export default MemBoardCntn;
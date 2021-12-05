import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";

import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import Axios from 'utils/MainAxios.js';

const Index = () => {

  const [analysisData, setSnalysisData] = useState();
  useEffect(() => {
    Axios.getAnalysisData().then((result)=>{
      setSnalysisData(result.data);
    });
  }, []);

  return (
    <>
      <div className="main-content" >
      <AuthNavbar />
      <div className="header bg-gradient-info py-7 py-lg-8">
      <Container>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h2 className="text-white mb-0">최근 게시글</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h2 className="mb-0">최근 가입 회원</h2>
                  </div>
                </Row>

              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Row>
                    <Col>최영우</Col>
                    <Col>2021.12.31</Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>


          <Col xl="4">
            <Card className="shadow mt-5">
              <CardHeader className="bg-transparent">
                <div className="col">
                    <h2 className="mb-0">총 회원수</h2>
                    <h2 className="mb-0">{analysisData.USR_TOTAL_CNT} 명</h2>
                </div>
              </CardHeader>
            </Card>
          </Col>

          <Col xl="4">
            <Card className="shadow mt-5">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h2 className="mb-0">총 게시글 수</h2>
                    <h2 className="mb-0">{analysisData.BOARD_TOTAL_CNT} 개</h2>
                  </div>
                </Row>
              </CardHeader>
            </Card>
          </Col>

          <Col xl="4">
            <Card className="shadow mt-5">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h2 className="mb-0">오늘 방문자 수</h2>
                    <h2 className="mb-0">{analysisData.VISIT_USR_CNT} 명</h2>
                  </div>
                </Row>
              </CardHeader>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
      </div>
      <AuthFooter />
    </>
  );
};

export default Index;

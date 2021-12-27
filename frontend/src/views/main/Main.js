import React, { useState, useEffect, useRef } from "react";
import {
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
  const [analysisData, setSnalysisData] = useState({"USR_TOTAL_CNT":0, "BOARD_TOTAL_CNT":0, "VISIT_USR_CNT":0});
  const [recentBoardList, setRecentBoardList] = useState([]);
  const [recentUsrList, setRecentUsrList] = useState([]);

  useEffect(() => {
    Axios.getAnalysisData().then((result)=>{
      setSnalysisData(result.data);
    });

    Axios.getRecentBoardList().then((result)=>{
      setRecentBoardList(result.data);
    });

    Axios.getRecentUsrList().then((result) => {
      setRecentUsrList(result.data);
    })
  }, []);

  useEffect(() => {
    console.log(recentBoardList)
  }, [recentBoardList]);

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
                <Row>
                  <Col md="10" style={{color:"white"}}>제목</Col>
                  <Col md="2" style={{color:"white"}}>작성자</Col>
                </Row>
                {
                  recentBoardList.map((obj, index)=>{
                    return (
                      <>
                        <Row>
                          <Col md="10" key={index + "TTL"} style={{color:"white"}}>{obj.BOARD_TTL}</Col>
                          <Col md="2"  key={index + "WRTR"} style={{color:"white"}}>{obj.BOARD_WRTR}</Col>
                        </Row>
                      </>
                    )
                  })
                }
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
                {
                  recentUsrList.map((obj, index)=>{
                    return (
                      <>
                        <Row className="text-center">
                          <Col>{obj.NICK_NAME}</Col>
                          <Col>2021.12.31</Col>
                        </Row>
                      </>
                    )
                  })
                }
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

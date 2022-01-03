import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
    Card,
    CardHeader,
    Container,
    Row,
    Col,
  } from "reactstrap";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import FreeBoardForm from "../component/FreeBoardForm.js";

const FreeBoardModify = () => {

  const dispatch = useDispatch();
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
              <FreeBoardForm selectRowData={selectRowData}/>
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

export default FreeBoardModify;
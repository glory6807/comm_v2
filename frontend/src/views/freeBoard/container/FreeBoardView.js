import React from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Moment from 'react-moment';
import AxiosData from "utils/FreeAxios.js"

import {
    Card,
    CardHeader,
    Container,
    Row,
    Col,
    CardBody,
  } from "reactstrap";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";

const FreeBoardWrite = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const { selectRowData } = useSelector((state) => ({selectRowData : state.free.selectRowData}));

  const selectContent = (id) => {
    dispatch(selectRow(id))
    history.push("/free/modify")
  }

  const selectRow = (id) => ({
        type: 'GET_FREE_DATA_ONE',
          payload: {
            id: id
          }
  });

  function deleteContent(boardNo) {
    AxiosData.deleteOne(boardNo).then(
      history.push("/main")
    )
  }


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
              <CardBody className="free">
                <div className="pl-lg-4 pr-lg-4">
                  <Row>
                    <Col className="cmb-2 cft-3">
                      <span>{ selectRowData.BOARD_TTL }</span>
                    </Col>
                  </Row>
                  <Row className="f-r">
                    <Col>
                      <span>{ selectRowData.BOARD_WRTR }</span>
                    </Col>
                    <Col>
                      <span>
                        <Moment format="YYYY/MM/DD">
                          { selectRowData.REG_DT }
                        </Moment>  
                      </span>
                    </Col>
                  </Row>
                  <br/>
                  <hr/>
                  <Row className="mb-2">
                    <Col>
                      <span>{ selectRowData.BOARD_CNTN }</span>
                    </Col>
                  </Row>
                  <div className="text-center">
                    <Link className="btn btn-info" to='/free/list'>
                      LIST
                    </Link>
                    <button className="btn btn-light" 
                            onClick={ () => { selectContent(selectRowData.BOARD_NO) } }>
                      MODIFY
                    </button>
                    <button className="btn btn-light" 
                            onClick={ () => { deleteContent(selectRowData.BOARD_NO) } }>
                      DELETE
                    </button>
                  </div>
                </div>
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

export default FreeBoardWrite;
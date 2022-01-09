 import React, { useEffect, useRef, useCallback } from "react";
 import { useSelector, useDispatch } from "react-redux";
 import { useHistory, useLocation } from "react-router-dom";
 import AxiosData from "utils/FreeAxios.js"

 import {
  Card,
  CardHeader,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import FreeBoardCntn from "../component/FreeBoardCntn.js";
import Paging from "components/Pagination/Paging.js";

const FreeBoard = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const { freeDatas, count, page } = useSelector((state) => ({ freeDatas : state.free.freeDatas,
                                                         count : state.free.count,
                                                         page : state.free.page }));

  console.log('count1 : ' + JSON.stringify(count))
  //setTotal(count)
  function FreeList() {
    console.log('count2 : ' + JSON.stringify(count))
     AxiosData.getList().then(
       function(result){
        console.log('count3 : ' + JSON.stringify(count))
        dispatch(result);
       }
     )
    
  }
  
  useEffect(FreeList, []);

  const setPage = useCallback( (page) => {
    
    AxiosData.getList(page).then(
      function(result){
       console.log('useCallback !! ')
       dispatch(result);
      }
    )
   }, [dispatch] );

  const createNew = () => {
    dispatch(createNewOne())
    history.push("/free/write")
  }

  const createNewOne = () => ({
        type: 'CREATE_NEW_ONE'
  });


  //scroll
  const mainContent = useRef(null);
  const location = useLocation();

  useEffect(() => {
    document.body.classList.add("bg-default");
    return () => {
      document.body.classList.remove("bg-default");
    };
  }, []);
  useEffect(() => {
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
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">FREE BOARD</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <button className="btn btn-primary" onClick={ () => {createNew()} }>
                      WRITE
                    </button>
                  </Col>
                </Row>
              </CardHeader>               
                  <FreeBoardCntn freeDatas={freeDatas}/>
                  <Paging page={page} count={count} setPage={setPage}/>
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

export default FreeBoard;

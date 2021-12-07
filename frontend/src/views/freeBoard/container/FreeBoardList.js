 import React, { useEffect, useRef, useCallback } from "react";
 import { useSelector, useDispatch } from "react-redux";
 import { useLocation } from "react-router-dom";
 import AxiosData from "utils/FreeAxios.js"

 import {
  Card,
  CardHeader,
  CardFooter,
  Container,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import FreeBoardCntn from "../component/FreeBoardCntn.js";
import Paging from "components/Pagination/Paging.js";

const FreeBoard = () => {

  const dispatch = useDispatch();
  const { freeDatas, count, page } = useSelector((state) => ({ freeDatas : state.free.freeDatas,
                                                         count : state.free.count,
                                                         page : state.free.page }));
  
  console.log('count1 : ' + JSON.stringify(count))
  //setTotal(count)
  function FreeList(param) {
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
   }, [] );

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
                <CardHeader className="border-0">
                  <h3 className="mb-0">FREE BOARD</h3>
                </CardHeader>                
                  <FreeBoardCntn freeDatas={freeDatas}/>
                  <Paging page={page} count={count} setPage={setPage}/>
                {/* <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter> */}
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

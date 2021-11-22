 import React, { useEffect, useState } from "react";
 import { useSelector, useDispatch } from "react-redux";
 import { useLocation, useHistory } from "react-router-dom";
 import AxiosData from 'utils/FreeAxios.js'

 import {
  Card,
  CardHeader,
  CardFooter,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Row,
} from "reactstrap";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import testReducer from './../../modules/testReducer';

const FreeBoard = () => {

  const [freeDatas, setFreeDatas] = useState([]);
  const faqData = useSelector((state) => state.testReducer);
  const dispatch = useDispatch(); // 디스패치 사용하도록하기
  const history = useHistory();

  function FreeList() {
    AxiosData.getList().then(
      function(result){
        dispatch(result) 
      }
    )
    setFreeDatas(faqData.data)
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

  //get list
  useEffect(FreeList, []);

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
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">title</th>
                      <th scope="col">writer</th>
                      <th scope="col">regDate</th>
                    </tr>
                  </thead>
                  <tbody>
                    { freeDatas && freeDatas.map(data => {
                        return  <tr>
                                  <th scope="col">{data.BOARD_NO}</th>
                                  <th scope="col" onClick={ () => { history.push({
                                                                                  pathname: '/free/view',
                                                                                  search: `?BOARD_NO=${data.BOARD_NO}`,  // query string
                                                                                  state: {  // location state
                                                                                    BOARD_NO: data.BOARD_NO, 
                                                                                  }});  } }>
                                                  {data.BOARD_TTL}</th>
                                  <th scope="col">{data.BOARD_WRTR}</th>
                                  <th scope="col">{data.REG_DT}</th>
                                </tr>
                      })
                    }
                  </tbody>
                </Table>
                <CardFooter className="py-4">
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
                </CardFooter>
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

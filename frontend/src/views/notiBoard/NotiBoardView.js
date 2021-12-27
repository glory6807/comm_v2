import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NotiAxios from "utils/NotiAxios.js";
import AuthNavbar from "components/Navbars/AuthNavbar.js";

import {
  Card,
  CardHeader,
  Container,
  Row,
  Table
} from "reactstrap";

const NotiBoardView = () => {
  const dispatch = useDispatch();
  const { boardNo } = useParams();

  const oneNoti = useSelector(state => state.noti.oneNoti);

  function NotiView(param){
    console.log('noti view');
    NotiAxios.getOne(boardNo).then(
      function(result){
          console.log('result');
          console.log(result);
          dispatch(result);
      }
    )
  }

  useEffect(NotiView, []);

  // useEffect(() => {
  //   dispatch(postReducer.getOnePostAPI(board_no));
  // }, [dispatch, board_no]);

  return(
    <>
    <div className="main-content">
        <AuthNavbar />
        <div className="header bg-gradient-info py-7 py-lg-8">
            <Container>  
            <Row>
                <div className="col">
                <Card className="shadow">
                    <CardHeader className="border-0">
                    <h3 className="mb-0">NOTICE BOARD VIEW</h3>
                    </CardHeader>
                    <Table className="align-items-center table-flush" responsive>
                        <thead className="thead-light">
                        <tr>
                            {/* <th scope="col">{oneNoti.board_no}</th> */}
                            <th scope="col">title</th>
                            <th scope="col">writer</th>
                            <th scope="col">regDate</th>
                        </tr>
                        </thead>
                        <tbody>
                        { oneNoti && oneNoti.map(data => {
                          return <tr>
                                  <td>{data.board_no}</td>
                                  <td>{data.board_title}</td>
                                  <td>{data.board_wrtr}</td>
                                  <td>{data.reg_dt}</td>
                                </tr>
                        })}
                        </tbody>
                    </Table>
                </Card>
                        <Link to = '/noti/list'>
                          <button>list</button>
                          {/* <button type='button' onClick={goList}>LIST</button> */}
                        </Link>
                        <Link to = '/noti/edit'>
                          <button>edit{oneNoti}</button>
                          {/* <button type='button' onClick={() => goEdit(selectRowData.id)}>EDIT</button> */}
                        </Link>
                </div>
            </Row>
            </Container>
        </div>
        </div>
    </>
  )

}

export default NotiBoardView;
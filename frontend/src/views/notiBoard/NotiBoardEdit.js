import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import NotiAxios from "utils/NotiAxios.js";
import AuthNavbar from "components/Navbars/AuthNavbar.js";
// import Moment from 'react-moment';

import {
  Card,
  CardHeader,
  Container,
  Row,
  Table,
  Button,
  Input
} from "reactstrap";

const NotiBoardEdit = () => {

  const { oneNoti } = useSelector((state) => ({oneNoti : state.noti.oneNoti}));

  let [boardNo, setBoardNo] = useState();
  let [title, setTitle] = useState();
  let [content, setContent] = useState();

  useEffect(() => {
    // title, content를 set 해주기....
  },[]);
  

  // const dispatch = useDispatch();
  // const { boardNo } = useParams();

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
                    <h3 className="mb-0"><Input value={oneNoti.BOARD_TTL}></Input></h3>
                    </CardHeader>
                    <Table className="align-items-center table-flush" responsive>
                        <tbody>
                          <tr>
                              <td colSpan="2" height="200px">
                                <textarea value={oneNoti.BOARD_CNTN}>
                                  
                                </textarea>
                              </td>
                          </tr>
                          <tr>
                            <td align="center">
                              <Link to = '/noti/list'>
                                <Button> 취소 </Button>
                              </Link>
                              <Link to = '/noti/edit'>
                                <Button onClick={() => {}}> 수정완료 </Button>
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                    </Table>
                </Card>
                </div>
            </Row>
            </Container>
        </div>
        </div>
    </>
  )

}

export default NotiBoardEdit;
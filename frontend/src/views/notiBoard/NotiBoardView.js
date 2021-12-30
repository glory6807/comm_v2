import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NotiAxios from "utils/NotiAxios.js";
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import Moment from 'react-moment';

import {
  Card,
  CardHeader,
  Container,
  Row,
  Table,
  Button
} from "reactstrap";

const NotiBoardView = () => {

  const { oneNoti } = useSelector((state) => ({oneNoti : state.noti.oneNoti}));

  const dispatch = useDispatch();

  const goEdit = (id) => {
    console.log('go edit id : ' + id);
    dispatch(editNoti(id));
  }

  const editNoti = (id) => ({
    type: 'GET_NOTICE_ONE',
    payload: {
      id: id
    }
  })

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
                    <h3 className="mb-0">{oneNoti.BOARD_TTL}</h3>
                    </CardHeader>
                    <Table className="align-items-center table-flush" responsive>
                        {/* <thead className="thead-light">
                        <tr>
                            <td colSpan="2">{oneNoti.BOARD_TTL}</td>
                        </tr>
                        </thead> */}
                        <thead>
                          <tr>
                            <td align="left" width="50%">Writer : {oneNoti.BOARD_WRTR}</td>
                          </tr>
                          <tr>
                            <td align="left">Date :
                              <Moment format="YYYY/MM/DD">
                                {oneNoti.REG_DT}
                              </Moment></td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                              <td colSpan="2" height="200px">
                                  {oneNoti.BOARD_CNTN}
                              </td>
                          </tr>
                          <tr>
                            <td align="center">
                              <Link to = '/noti/list'>
                                <Button>list</Button>
                              </Link>
                              <Link to = '/noti/edit'>
                                <Button onClick={() => {goEdit(oneNoti.BOARD_NO)}}> 수정 </Button>
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

export default NotiBoardView;
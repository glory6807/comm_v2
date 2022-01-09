import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NotiAxios from "utils/NotiAxios.js";
import { useHistory } from "react-router-dom";
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

  const history = useHistory();

  const { oneNoti } = useSelector((state) => ({oneNoti : state.noti.oneNoti}));

  const {id, email, nickname, comm_v2_token}  =
    useSelector((state) => ({ id : state.login.id, 
      email : state.login.email, 
      nickname : state.login.nickname,
      comm_v2_token : state.login.comm_v2_token
  }));

  const dispatch = useDispatch();

  const goEdit = (id) => {
    dispatch(editNoti(id));
  }

  const editNoti = (id) => ({
    type: 'GET_NOTICE_ONE',
    payload: {
      id: id
    }
  })

  function goDelete(id){
    if(window.confirm('삭제하시겠습니까?')){
      NotiAxios.delOne(id).then(
        history.push('/list')
      )
    }
  }

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
                              {
                                oneNoti.BOARD_WRTR == nickname
                                ?
                                <>
                                <Link to = '/noti/edit'>
                                  <Button onClick={() => {goEdit(oneNoti.BOARD_NO)}}> 수정 </Button>
                                </Link>
                                <Button onClick={() => {goDelete(oneNoti.BOARD_NO)}}> 삭제 </Button>
                                </>
                                :
                                <></>
                              }
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
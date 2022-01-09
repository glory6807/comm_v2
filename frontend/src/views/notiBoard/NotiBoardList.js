import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Moment from 'react-moment';

import NotiAxios from "utils/NotiAxios.js";

import AuthNavbar from "components/Navbars/AuthNavbar.js";
import Paging from "components/Pagination/Paging.js";

import {
    Card,
    CardHeader,
    Container,
    Row,
    Col,
    Button,
    Table
  } from "reactstrap";

const NotiList = () => {
    const dispatch = useDispatch();
    // const history = useHistory();

    // post list 가져옴
    const { notiDatas, count, page } = useSelector((state) => ({
                                        notiDatas : state.noti.notiDatas,
                                        count : state.noti.count,
                                        page : state.noti.page}));

    const {id, email, nickname, comm_v2_token}  =
        useSelector((state) => ({ id : state.login.id, 
            email : state.login.email, 
            nickname : state.login.nickname,
            comm_v2_token : state.login.comm_v2_token
    }));

    function NotiList(param) {
        // 초기 게시글 가져오기
        NotiAxios.getList().then(
            function(result){
                dispatch(result);
            }
        )
    }

    const goNotiView = (id) => {
        dispatch(selectNoti(id));
    }

    const selectNoti = (id) => ({
        type: 'GET_NOTICE_ONE',
        payload: {
            id: id
        }
    });

    useEffect(NotiList, []);

    const setPage = useCallback( (page) => { 
        NotiAxios.getList(page).then(
            function(result){
                dispatch(result);
            }
        )
    }, [] );

    return (
        <div className="main-content">
        <AuthNavbar />
        <div className="header bg-gradient-info py-7 py-lg-8">
            <Container>  
            <Row>
                <div className="col">
                <Card className="shadow">
                    <CardHeader className="border-0">
                        <Row>
                            <Col>
                                <h3 className="mb-0">NOTICE BOARD</h3>
                            </Col>
                            <Col className="text-right">
                                {
                                    id != null ?
                                    <>
                                    <Link to = '/noti/write'>
                                        <Button>WRITE</Button>
                                    </Link>
                                    </>
                                    :
                                    <></>
                                }
                            </Col>
                        </Row>
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
                        { notiDatas && notiDatas.map(data => {
                            return  <tr>
                                        <th scope="col">{data.BOARD_NO}</th>
                                        <th scope="col" onClick={ () => { goNotiView(data.BOARD_NO) } }>
                                            <Link to='/noti/view'>
                                                {data.BOARD_TTL}
                                            </Link>
                                        </th>
                                        <th scope="col">{data.BOARD_WRTR}</th>
                                        <th scope="col">
                                            <Moment format="YYYY/MM/DD">
                                                {data.REG_DT}
                                            </Moment>
                                        </th>
                                    </tr>
                            })
                        }
                        </tbody>
                    </Table>
                  <Paging page={page} count={count} setPage={setPage}/>
                </Card>
                </div>
            </Row>
            </Container>
        </div>
        </div>
    )
}

export default NotiList;
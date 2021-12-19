import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


import NotiAxios from "utils/NotiAxios.js";
// import { actionCreators as postActions } from "../../modules/postReducer";
// import { uriSave } from 'modules/uriReducer';
// import { history } from "../../modules/rootReducer"

import { Table } from "reactstrap";
import { Link } from "react-router-dom";

import AuthNavbar from "components/Navbars/AuthNavbar.js";
import Paging from "components/Pagination/Paging.js";

import {
    Card,
    CardHeader,
    Container,
    Row,
  } from "reactstrap";

const NotiList = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    // post list 가져옴
    const { notiDatas, count, page } = useSelector((state) => ({
                                        notiDatas : state.noti.notiDatas,
                                        count : state.noti.count,
                                        page : state.noti.page}));
    
    // const is_loading = useSelector((state) => state.post.is_loading);
    // const is_login = useSelector((state) => state.user.is_login);
    // const user = useSelector((state) => state.user?.user);

    // useEffect(() => {
    //     // post 가져오기
    //     dispatch(postActions.getPostAPI());
    // }, [dispatch, postList.postLength]);


    function NotiList(param) {
        // 초기 게시글 가져오기
        NotiAxios.getList().then(
            function(result){
                dispatch(result);
            }
        )
    }

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
                    <h3 className="mb-0">NOTICE BOARD</h3>
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
                                        <th scope="col" onClick={ () => { history.push({
                                                                    pathname: '/noti/view',
                                                                    search: `?boardNo=${data.BOARD_NO}`,
                                                                    state: {  // location state
                                                                        boardNo: data.BOARD_NO, 
                                                                    }});  } }>
                                        {/* <th scope="col" onClick={()=>{}}> */}
                                            <Link to={`/noti/view/${data.BOARD_NO}`}>
                                                {data.BOARD_TTL}
                                            </Link>
                                        </th>
                                        <th scope="col">{data.BOARD_WRTR}</th>
                                        <th scope="col">{data.REG_DT}</th>
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
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../../modules/postReducer";
import { uriSave } from 'modules/uriReducer';
import { history } from "../../modules/rootReducer"

import { Table } from "reactstrap";
import { Link } from "react-router-dom";

const NotiList = (props) => {
    const dispatch = useDispatch();

    // post list 가져옴
    const postList = useSelector((state) => state.postReducer.post_list);
    
    // const is_loading = useSelector((state) => state.post.is_loading);
    // const is_login = useSelector((state) => state.user.is_login);
    // const user = useSelector((state) => state.user?.user);

    useEffect(() => {
        // post 가져오기
        dispatch(postActions.getPostAPI());
    }, [dispatch, postList.postLength]);

    function goDetail(board_no){
        // history.push(`/noti/view/${board_no}`);
        console.log(board_no);
        dispatch(postActions.getOnePostAPI(board_no));
    }

    if(postList.length === 0) {
        return (
            <>
                게시글이 없습니다!
            </>
        )
    }
    return (
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
            { postList && postList.map(data => {
                return  <tr>
                            <th scope="col">{data.BOARD_NO}</th>
                            <th scope="col" onClick={()=>goDetail(data.BOARD_NO)}>
                                <Link to='/noti/view'>
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
    )
}

export default NotiList;
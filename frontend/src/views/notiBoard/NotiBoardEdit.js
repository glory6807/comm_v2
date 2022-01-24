import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import NotiAxios from "utils/NotiAxios.js";
import AuthNavbar from "components/Navbars/AuthNavbar.js";

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

  const history = useHistory();
  const dispatch = useDispatch();

  const { oneNoti } = useSelector((state) => ({oneNoti : state.noti.oneNoti}));

  let [boardNo, setBoardNo] = useState();
  let [title, setTitle] = useState();
  let [content, setContent] = useState();

  useEffect(() => {
    setBoardNo(oneNoti.BOARD_NO);
    setTitle(oneNoti.BOARD_TTL);
    setContent(oneNoti.BOARD_CNTN);
  },[]);

  function NotiEditCancel(){
    if(window.confirm('수정 중인 글쓰기를 종료하시겠습니까?')){
      dispatch(selectNoti(oneNoti.BOARD_NO));
    }
  }

  const selectNoti = (id) => ({
      type: 'GET_NOTICE_ONE',
      payload: {
          id: id
      }
  });

  function NotiEditSave(){
    if(title === ''){
      alert('제목을 입력해주세요');
      return ;
    } else if (content === ''){
      alert('내용을 입력해주세요');
      return ;
    } else {
      const editData = {boardNo, title, content}
      if(window.confirm('저장하시겠습니까?')){
        NotiAxios.editOne(editData).then(
          history.push("/noti/list")
          // 왜 list로 안갈까?
        )
      }
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
                    <h3 className="mb-0"><Input value={title} onChange={(e) => setTitle(e.target.value)}></Input></h3>
                    </CardHeader>
                    <Table className="align-items-center table-flush" responsive>
                        <tbody>
                          <tr>
                              <td colSpan="2" height="200px">
                                <textarea value={content} onChange={ (e) => setContent(e.target.value)}>
                                  
                                </textarea>
                              </td>
                          </tr>
                          <tr>
                            <td align="center">
                              <Link to='/noti/view'>
                                <Button onClick={()=>{NotiEditCancel()}}> 취소 </Button>
                              </Link>
                              <Link to='/noti/edit'>
                                <Button onClick={()=>{NotiEditSave()}}> 수정완료 </Button>
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
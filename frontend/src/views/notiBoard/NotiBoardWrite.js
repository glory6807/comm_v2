import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import NotiAxios from "utils/NotiAxios.js";
import AuthNavbar from "components/Navbars/AuthNavbar.js";

import {
  Card,
  CardHeader,
  Container,
  Row,
  Table,
  Input,
  Button
} from "reactstrap";

const NotiBoardWrite = () => {
// 작성자명 -> admin 권한 가진 사람.. / 로그인한 사람 가져오기..
  const dispatch = useDispatch();
  const history = useHistory();

  let [title, setTitle] = useState();
  let [content, setContent] = useState();
  let [writer, setWriter] = useState();

  function NoticeWriteValid(props){
    if(props.title == null){
      alert('제목을 입력해주세요.');
      return ;
    } else if(props.content == null){
      alert('내용을 입력해주세요.');
      return ;
    } else {
      // 저장 프로세스
      if(window.confirm('저장하시겠습니까?')){
        NotiAxios.write(props).then(
          history.push("/noti/list")
        )
      }
    }
  }

  function NotiWriteCancel(){
    if(window.confirm('작성 중인 글쓰기를 종료하시겠습니까?')){
      history.push('/noti/list');
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
                        <h3 className="mb-0">
                            <Input placeholder="제목을 입력해주세요." onChange={(e)=>{setTitle(e.target.value)}}></Input>
                        </h3>
                    </CardHeader>
                    <Table className="align-items-center table-flush" responsive>
                        <tbody>
                          <tr>
                            <td colSpan="2" height="200px">
                                <textarea placeholder="내용을 입력해주세요." onChange={(e)=>{setContent(e.target.value)}}>
                                    
                                </textarea>
                            </td>
                          </tr>
                          <tr>
                            <td align="center">
                              <Button onClick={()=>{NotiWriteCancel()}}>list</Button>
                              <Button onClick={()=>{NoticeWriteValid({title:title, content:content, writer:'writer..'})}}> 등록 </Button>
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

export default NotiBoardWrite;
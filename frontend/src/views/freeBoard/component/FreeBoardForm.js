import React, { useState, useEffect } from "react";
import AxiosData from "utils/FreeAxios.js"
import { useHistory, Link } from "react-router-dom";

import {
    Row,
    Col,
    CardBody,
    Form,
    Input,
    FormGroup,
  } from "reactstrap";

const FreeBoardForm = ({selectRowData}) => {

  const history = useHistory();

  // State
  let [inputData, setInputData] = useState({
    title: selectRowData.BOARD_TTL,
    writer: selectRowData.BOARD_WRITER,
    content: selectRowData.BOARD_CNTN,
    password: selectRowData.BOARD_PW,

  });

  useEffect(typeCheck, []);

  //등록 OR 수정
  function typeCheck() {
    if(selectRowData.BOARD_NO === '') {
      setInputData({
        ...inputData,
        title : '',
        writer : '',
        password : ''
    })
    }
  }

  // title, writer, content set
  const onChangeText = (e) => {
    setInputData({
        ...inputData,
        [e.target.name]: e.target.value
    })
  }

  // password 유효성검사 및 set 
  const onChangePw = (e) => {
    const inputPw = e.target.value
    //유효성 통과 못한 글자는 빈칸으로 set
    const inputPwSet = inputPw.replace(/[^0-9]/g, '')

    setInputData({
      ...inputData,
      [e.target.name]: inputPwSet
    })

    console.log(inputData.password)
  }

  function FreeModify(modifyData, boardNo) {
    if(modifyData.title === '' || modifyData.content === '') {
      alert('빈칸을 채워주세요!');
      return false;
    } else {
      const datas = {modifyData, boardNo}
      AxiosData.modifyOne(datas).then(
        history.push("/free/list")
      )
    }
  }

  function FreeWrite(writeData) {
    if(writeData.title === '' || writeData.writer === '' || writeData.content === '') {
      alert('빈칸을 채워주세요!');
      return false;
    } else {
      if(writeData.password === '' || writeData.password.length < 4) {
        alert('비밀번호는 4자리의 숫자로 입력해주세요');
        return false;
      }
      AxiosData.writeOne(writeData).then(
        history.push("/main")
      //history.push("/free/list")    등록 후 리스트 업데이트가 안됨,,일단 main으로 가게 해놓음
      )
    }
  }

  return (
      <CardBody>
              <Form>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6">
                        <label
                          className="form-control-label"
                          htmlFor="input-username"
                        >
                          TITLE
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue={inputData.title}
                          onChange={onChangeText}
                          name="title"
                          placeholder="제목을 입력해주세요"
                          type="text"
                        />
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-email"
                        >
                          WRITER
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue={inputData.writer}
                          onChange={onChangeText}
                          name="writer"
                          placeholder="작성자를 입력해주세요"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <hr className="my-4" />
                <div className="pl-lg-4">
                  <FormGroup>
                    <label>CONTENT</label>
                    <Input
                      className="form-control-alternative"
                      rows="4"
                      defaultValue={inputData.content}
                      onChange={onChangeText}
                      name="content"
                      placeholder="내용을 입력해주세요"
                      type="textarea"
                    />
                  </FormGroup>
                </div>
                <hr className="my-4" />
                <Col lg="6">
                  <label
                    className="form-control-label"
                    htmlFor="input-username"
                  >
                    PASSWORD
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue={inputData.password}
                    maxLength={4}
                    onChange={onChangePw}
                    name="password"
                    placeholder="4자리의 숫자를 입력해주세요"
                    type="password"
                  />
                </Col>
              </Form>
              { selectRowData.BOARD_NO === '' ? 
                <div className="text-center">
                  <Link to='/free/list'>
                    <button className="btn btn-info">
                      CANCEL
                    </button>
                  </Link>
                  <button className="btn btn-light" onClick={() => { FreeWrite(inputData) }}>
                    <Link to='/free/write'>REGIST</Link>
                  </button>
                </div> :
                <div className="text-center">
                  <Link to='/free/list'>
                    <button className="btn btn-info">
                      CANCEL
                    </button>
                  </Link>
                  <button className="btn btn-light" onClick={() => { FreeModify(inputData,selectRowData.BOARD_NO) }}>
                    <Link to='/free/modify'>REGIST</Link>
                  </button>
                </div>
              }
            </CardBody>
  );
};

export default FreeBoardForm;
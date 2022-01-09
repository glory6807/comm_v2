import React, { useState } from "react";
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
    content: selectRowData.BOARD_CNTN
  });

  const onChangeText = (e) => {
    setInputData({
        ...inputData,
        [e.target.name]: e.target.value
    })
  }

  function FreeModify(modifyData, boardNo) {
    const datas = {modifyData, boardNo}
    AxiosData.modifyOne(datas).then(
      history.push("/free/list")
    )
  }

  function FreeWrite(writeData) {
    AxiosData.writeOne(writeData).then(
      history.push("/main")
    //history.push("/free/list")    등록 후 리스트 업데이트가 안됨,,일단 main으로 가게 해놓음
    )
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
                          placeholder="title"
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
                          defaultValue={selectRowData.BOARD_WRTR}
                          name="writer"
                          placeholder="writer"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {/* <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          DATE
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue={selectRowData.REG_DT}
                          name="date"
                          placeholder="date"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row> */}
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
                      placeholder="content"
                      type="textarea"
                    />
                  </FormGroup>
                </div>
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
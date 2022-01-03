import React from "react";

import {
    Row,
    Col,
    CardBody,
    Form,
    Input,
    FormGroup,
  } from "reactstrap";

const FreeBoardForm = ({selectRowData}) => {
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
                            defaultValue={selectRowData.BOARD_TTL}
                            id="input-username"
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
                            id="input-email"
                            placeholder="writer"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
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
                            id="input-first-name"
                            placeholder="First name"
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
                        placeholder="A few words about you ..."
                        rows="4"
                        defaultValue={ selectRowData.BOARD_CNTN }
                        type="textarea"
                      />
                    </FormGroup>
                  </div>
                </Form>
              </CardBody>
    );
};

export default FreeBoardForm;
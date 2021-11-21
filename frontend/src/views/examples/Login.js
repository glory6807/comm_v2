import { useEffect } from "react";
import GoogleButton from "./GoogleButton";
import KaKaoLogin from 'react-kakao-login';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import { getOriginalNode } from "typescript";


const Login = () => {

  const { naver } = window;

  function LoginNaver() {
    initializeNaverLogin();
    UserProfile();
  }

  useEffect(LoginNaver, []);

  function initializeNaverLogin() {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: 'eC1wzaTn1yfRuIxN6hNz',
      callbackUrl: 'http://localhost:3000/auth/login',
      callbackhHandle: true,
      isPopup: false,
      loginButton: { color: 'white', type: 1, height: '47' },
    });
    naverLogin.init();
  };

  function UserProfile() {
    window.location.href.includes('access_token') && GetUser();
    function GetUser() {
      const location = window.location.href.split('=')[1];
      const loca = location.split('&')[0];
      const header = {
        Authorization : loca,
      };
      console.log("token: ", loca);
      fetch('/oauth/naverLogin' , {
        method: "get",
        headers : header,
      })
      .then(res => console.log(res))
      .then(res => {
        //localStorage.setItem("access_token", res.token);
        // setUserData({
        //   nickname : res.nickname,
        //   image : res.image
        // })
      })
      .catch(err => console.log("err : ", err));
    }
  };

  const loginWithKakao = () =>{
    const kakaoLogin = new window.Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/kakaoLogin'
    });
    kakaoLogin.init();
  };

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Sign in with</small>
            </div>
            <div className="btn-wrapper text-center">
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/github.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Github</span>
              </Button>
              {/* <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/google.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>*/}
              <GoogleButton/>
              <div onClick={LoginNaver} id='naverIdLogin' />
              <div>
                <button id="custom-login-btn" onClick={loginWithKakao}>
                  <img
                    alt=""
                    src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
                    width="222"
                  />
                </button>
              </div>
              </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign in with credentials</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                {/* <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label> */}
              </div>
              <div className="text-center">
                <Button className="my-4" color="primary" type="button">
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;

import { useEffect } from "react";
import GoogleButton from "./GoogleButton";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import freeAxios from "../../utils/FreeAxios.js";
import * as config from "../../utils/CommonConfig.js";

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

const Login = () => {

  const { naver } = window;

  const history = useHistory();
  const dispatch = useDispatch();

  function LoginNaver() {
    initializeNaverLogin();
    UserProfile();
  }

  useEffect(LoginNaver, []);

  function initializeNaverLogin() {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: config.NAVER_CLIENT_ID,
      callbackUrl: config.NAVER_CALLBACK_URL,
      callbackhHandle: true,
      isPopup: false,
      loginButton: { color: 'green', type: 3, height: '50' },
    });
    naverLogin.init();
  };

  function UserProfile() {
    window.location.href.includes('access_token') && GetUser();

    async function GetUser() {
      const preToken = window.location.href.split('=')[1];
      const token = preToken.split('&')[0];
      const header = { Authorization : token };

      await freeAxios.getUser(header).then( res => {
        console.log('res : ' + JSON.stringify(res))
        dispatch(log(res.data.user_id, res.data.email, res.data.nick_name))
        history.push("/main");

        // if(res === ""){
        
        // }else{
        //   //CookieUtil.setLoginCookie(response.data);
        //   history.push("/main");
        // }
      })
    }

  };

  const loginWithKakao = () =>{
    const kakaoLogin = new window.Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/kakaoLogin'
    });
    kakaoLogin.init();
  };

  const log = (id, email, nickname) => {

    return {
        type: 'NAVER_LOGIN_USER',
          payload: {
            id: id,
            email: email,
            nickname: nickname
          }
      };
  
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

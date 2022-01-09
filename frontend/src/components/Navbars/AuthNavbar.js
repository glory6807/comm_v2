import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useEffect } from "react";
import CookieUtils from "utils/CookieUtil";

const AdminNavbar = () => {
  const dispatch = useDispatch();


  const {id, email, nickname, comm_v2_token}  = useSelector((state) => ({ id : state.login.id, 
                                                                        email : state.login.email, 
                                                                        nickname : state.login.nickname,
                                                                        comm_v2_token : state.login.comm_v2_token
                                                                      }));

  useEffect(() => {
    if(id == "" || id == null || id == undefined){
      var user_id = CookieUtils.getCookie("comm_v2_user_id");
      var email = CookieUtils.getCookie("comm_v2_email");
      var nick_name = CookieUtils.getCookie("comm_v2_nick_name");
      var token = CookieUtils.getCookie("comm_v2_token");
      dispatch(loginDispatch(user_id, email, nick_name, token));
    }
  }, []);

  const loginDispatch = (id, email, nickname, comm_v2_token) => {
    return {
      type: 'GET_TOKEN_DATA',
        payload: {
          id: id,
          email: email,
          nickname: nickname,
          comm_v2_token : comm_v2_token
        }
    };
  }

  return (
    <>
      <Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md">
        <Container className="px-4">
          <NavbarBrand to="/" tag={Link}>
            <img
              alt="..."
              src={
                require("../../assets/img/brand/argon-react-white.png").default
              }
            />
          </NavbarBrand>
          <button className="navbar-toggler" id="navbar-collapse-main">
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
            <div className="navbar-collapse-header d-md-none">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/">
                    <img
                      alt="..."
                      src={
                        require("../../assets/img/brand/argon-react.png")
                          .default
                      }
                    />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button className="navbar-toggler" id="navbar-collapse-main">
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link-icon" to="/free/list" tag={Link}>
                  <i className="ni ni-planet" />
                  <span className="h4 mb-0 text-white d-none d-lg-inline-block mr-5">자유게시판</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link-icon" to="/mem/list" tag={Link}>
                  <i className="ni ni-planet" />
                  <span className="h4 mb-0 text-white d-none d-lg-inline-block mr-5">회원게시판</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link-icon" to="/noti/list" tag={Link}>
                  <i className="ni ni-planet" />
                  <span className="h4 mb-0 text-white d-none d-lg-inline-block mr-5">공지사항</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link-icon" to="/auth/login" tag={Link}>
                  {
                    nickname === null || nickname === undefined || nickname === '' 
                    ?"로그인" 
                    :nickname + " 님"
                  }
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;

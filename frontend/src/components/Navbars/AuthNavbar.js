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

const AdminNavbar = () => {

  const {id, email, nickname}  = useSelector((state) => ({ id : state.free.id, 
                                                           email : state.free.email, 
                                                           nickname : state.free.nickname }));
  console.log('id ::: ' + id)
  console.log('email ::: ' + email)
  console.log('nickname ::: ' + nickname)

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
                  {/* <i className="ni ni-key-25" />
                  {
                    console.log({loginData})
                  }
                  <span className="nav-link-inner--text">{loginData}Login</span> */}
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  className="nav-link-icon"
                  to="/admin/user-profile"
                  tag={Link}
                >
                  <i className="ni ni-single-02" />
                  <span className="nav-link-inner--text">Profile</span>
                </NavLink>
              </NavItem> */}
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;

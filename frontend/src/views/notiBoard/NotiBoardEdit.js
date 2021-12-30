import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NotiAxios from "utils/NotiAxios.js";
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import Moment from 'react-moment';

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

  const { oneNoti } = useSelector((state) => ({oneNoti : state.noti.oneNoti}));

  let [boardNo, setBoardNo] = useState();
  let [title, setTitle] = useState();
  let [content, setContent] = useState();

  useEffect(() => {
    // title, content를 set 해주기....
  },[]);
  

  // const dispatch = useDispatch();
  // const { boardNo } = useParams();

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
                    <h3 className="mb-0"><Input value={oneNoti.BOARD_TTL}></Input></h3>
                    </CardHeader>
                    <Table className="align-items-center table-flush" responsive>
                        <tbody>
                          <tr>
                              <td colSpan="2" height="200px">
                                <textarea value={oneNoti.BOARD_CNTN}>
                                  
                                </textarea>
                              </td>
                          </tr>
                          <tr>
                            <td align="center">
                              <Link to = '/noti/list'>
                                <Button> 취소 </Button>
                              </Link>
                              <Link to = '/noti/edit'>
                                <Button onClick={() => {}}> 수정완료 </Button>
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

// function NotiBoardEdit(){

//     // const { selectRowData } = useSelector(state => state.boardReducer)

//     // const [title, setTitle] = useState(selectRowData.title);
//     // const [content, setContent] = useState(selectRowData.content);

//     const dispatch = useDispatch();

//     const history = useHistory();

//     // const selectContent = (id) => {
//     //   dispatch(selectRow(id));
//     // }

//     // const modifyTitle = (e) => {
//     //   setTitle(e.target.value)
//     // }

//     // const modifyContent = (e) => {
//     //   setContent(e.target.value)
//     // }

//     // const editSave = () => {
//     //     const _inputData = {
//     //         id: selectRowData.id,
//     //         title: title,
//     //         content: content
//     //     }
//     //     dispatch(editContent(_inputData))
//     //     setTitle('')
//     //     setContent('')
//     //     // selectContent(selectRowData.id)
//     //     history.push('/noti/view')
//     // }

  

//   return (
//     <div>
//       <h2>NOTI BOARD EDIT</h2>
//       <div>
//         <div>
//           {/* <input type='text' value={title} onChange={modifyTitle}/> */}
//         </div>
//         <div>
//           {/* <textarea value={content} onChange={modifyContent}/> */}
//         </div>
//         <div>
//           {/* <button type='button' onClick={editSave}>SAVE</button> */}
//           <Link to = '/noti/view'>
//             <Button>EDIT</Button>
//             {/* <button type='button' onClick={() => selectContent(selectRowData.id)}>BACK</button> */}
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }
  
// export default NotiBoardEdit;
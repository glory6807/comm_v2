import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postReducer } from "../../modules/postReducer";
import { Link } from "react-router-dom";


// import { uriSave } from 'modules/uriReducer';
// import { selectRow, removeContent } from 'modules/boardReducer';

const NotiBoardView = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { board_no } = useParams();

  const detail = useSelector((state) => state.postReducer);

  // useEffect(() => {
  //   dispatch(postReducer.getOnePostAPI(board_no));
  // }, [dispatch, board_no]);

  return(
    <>
    <div>
      <h2>NOTI BOARD VIEW1</h2>
      <div>
        <div>
          <div>title : {detail.BOARD_TTL}</div>
        </div>
        <div>
          <div>content : {detail.BOARD_CNTN}</div>
        </div>
        <div>
          <Link to = '/noti/list'>
            <button>list</button>
            {/* <button type='button' onClick={goList}>LIST</button> */}
          </Link>
          <Link to = '/noti/edit'>
            <button>edit</button>
            {/* <button type='button' onClick={() => goEdit(selectRowData.id)}>EDIT</button> */}
          </Link>
          {/* <button type='button' onClick={() => goDelete(selectRowData.id)}>DELETE</button> */}
        </div>
      </div>
    </div>
    </>
  )

}

export default NotiBoardView;
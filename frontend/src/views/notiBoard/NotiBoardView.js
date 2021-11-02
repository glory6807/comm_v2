import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";

import { uriSave } from 'modules/uriReducer';
import { selectRow, removeContent } from 'modules/boardReducer';

function NotiBoardView(){

  const { selectRowData } = useSelector(state => state.boardReducer)

  const dispatch = useDispatch();
  const history = useHistory();

  const goEdit = (id) => {
    dispatch(selectRow(id));
  }

  const goDelete = (id) => {
    dispatch(removeContent(id));
    history.push('/noti/list');
  }

  function goList(){
    dispatch(uriSave('/noti/list'));
  }

  return (
    <div>
      <h2>NOTI BOARD VIEW</h2>
      <div>
        <div>
          <div>title : {selectRowData.title}</div>
        </div>
        <div>
          <div>content : {selectRowData.content}</div>
        </div>
        <div>
          <Link to = '/noti/list'>
            <button type='button' onClick={goList}>LIST</button>
          </Link>
          <Link to = '/noti/edit'>
            <button type='button' onClick={() => goEdit(selectRowData.id)}>EDIT</button>
          </Link>
          <button type='button' onClick={() => goDelete(selectRowData.id)}>DELETE</button>
        </div>
      </div>
    </div>
  )
}
  
export default NotiBoardView;
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { uriSave } from "modules/uriReducer";
import { selectRow, editContent } from 'modules/boardReducer';

function NotiBoardEdit(){

    const { selectRowData } = useSelector(state => state.boardReducer)

    const [title, setTitle] = useState(selectRowData.title);
    const [content, setContent] = useState(selectRowData.content);

    const dispatch = useDispatch();

    const history = useHistory();

    const selectContent = (id) => {
      dispatch(selectRow(id));
    }

    const modifyTitle = (e) => {
      setTitle(e.target.value)
    }

    const modifyContent = (e) => {
      setContent(e.target.value)
    }

    const editSave = () => {
        const _inputData = {
            id: selectRowData.id,
            title: title,
            content: content
        }
        dispatch(editContent(_inputData))
        setTitle('')
        setContent('')
        selectContent(selectRowData.id)
        history.push('/noti/view')
    }

  

  return (
    <div>
      <h2>NOTI BOARD EDIT</h2>
      <div>
        <div>
          <input type='text' value={title} onChange={modifyTitle}/>
        </div>
        <div>
          <textarea value={content} onChange={modifyContent}/>
        </div>
        <div>
          <button type='button' onClick={editSave}>SAVE</button>
          <Link to = '/noti/view'>
            <button type='button' onClick={() => selectContent(selectRowData.id)}>BACK</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
  
export default NotiBoardEdit;
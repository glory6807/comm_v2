import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { dataSave } from "modules/boardReducer";
import { uriSave } from "modules/uriReducer";

function NotiBoardWrite(){

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    function goList(){
        dispatch(uriSave('/noti/list'));
      }

    const onSave = () => {
        const _inputData = {
            id: '',
            title: title,
            content: content
        }
        dispatch(dataSave(_inputData))
        setTitle('');
        setContent('');
        history.push('/noti/list');
        dispatch(uriSave('/noti/list'));
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleContent = (e) => {
        setContent(e.target.value)
    }

    return (
        <div>
            <h2>NOTI BOARD WRITE</h2>
            <div>
                <div>
                    <input type='text' className='inputTitle' placeholder='제목을 입력해주세요' onChange={handleTitle} value={title}/>
                </div>
                <div>
                    <textarea className='inputContent' placeholder='내용을 입력헤주세요' onChange={handleContent} value={content} />
                </div>
                <div>
                    <button type='button' onClick={onSave}>WRITE</button>
                    <Link to = '/noti/list'>
                        <button type='button' onClick={goList}>BACK</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotiBoardWrite;
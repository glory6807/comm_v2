import React from 'react';
import { useSelector } from 'react-redux';

function NotiBoardView(){
  const { selectRowData } = useSelector(state => state.boardReducer)

  return (
    <div>
      <h2>NOTI BOARD VIEW</h2>
      <div>
        <div>
          <input type='text' value={selectRowData.title}/>
        </div>
        <div>
          <textarea value={selectRowData.content}/>
        </div>
        <div>
          <button type='button'>EDIT</button>
          <button type='button'>DELETE</button>
        </div>
      </div>
    </div>
  )
}
  
export default NotiBoardView;
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { uriSave } from 'modules/uriReducer';
import { selectRow } from 'modules/boardReducer';
import AxiosData from 'utils/NotiAxios.js';

function NotiBoardList(){

  const {inputData} = useSelector(state => state.boardReducer)

  const {lastId} = useSelector(state => state.boardReducer)

  const dispatch = useDispatch();

  const selectContent = (id) => {
    dispatch(selectRow(id));
  }

  function homeClick(){
    dispatch(uriSave('/'));
  }

  function writeClick(){
    dispatch(uriSave('/noti/write'));
  }

  function test(){
    console.log('테스트 버튼');
    AxiosData.getList();
  }

  // useEffect(async() => {
  //   try{
  //     const res = await axios.get('/noti/list')
  //   } catch(e){
  //     console.log('error : ' + e.message);
  //   }

  // },[])

  

  return (
    <>
      <div> NOTI BOARD LIST </div>
      <button onClick={ () => {test()} }>TEST BTN</button>
      <table>
        <thead>
          <th>ID..</th>
          <th>제목..</th>
        </thead>
        <tbody>
          {lastId !== 0 ? 
            inputData.map(rowData => (
              rowData.id !== '' && 

              <tr>
                <td>{rowData.id}</td>
                <td onClick={()=>selectContent(rowData.id)}>
                  <Link to = '/noti/view'>
                    {rowData.title}
                  </Link>
                </td>
              </tr>
          
            )) :

            <tr>
              <td></td>
              <td>작성된 글이 없습니다.</td>
            </tr>
          }
        </tbody>
      </table>
      <Link to='/'>
        <button onClick={homeClick}>HOME</button>
      </Link>
      <Link to='/noti/write'>
        <button onClick={writeClick}>WRITE</button>
      </Link>
    </>
  );
}

export default NotiBoardList;
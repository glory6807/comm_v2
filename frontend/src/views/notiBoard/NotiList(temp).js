import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { uriSave } from 'modules/uriReducer';
import { selectRow } from 'modules/boardReducer';
import AxiosData from 'utils/NotiAxios.js';

function NotiBoardList(){

  // DB에서 받아올 데이터를 담을 그릇
  const [initData, setInitData] = useState([{
    inputData: {
      board_no : '',
      board_ttl : '',
      board_cntn : ''
    },
  }])
  
  // 글 갯수 파악
  const [initLastIdx, setInitLastIdx] = useState(0);

  useEffect(async() => {
    // NOTICE_BOARD에서 글번호 1~10 게시글의 ttl, cntn 가져옴

    AxiosData.getList().then((res)=>{
      const _inputData = res.data;

      console.log(_inputData);

      setInitData(initData.concat(_inputData))

    })
  },[])

  // useEffect(() => {
  //   // initData가 set될 때마다 boardReducer 호출
  //   dispatch(init_Data(initData))
  // },[initData])

  function checkInput(){
    console.log('check input');
    console.log(initData);
  }

  function dbWriteClick(){
    AxiosData.writeBoard();
  }


  // redux 임시
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
      {/* <button onClick={ () => {test()} }>TEST BTN</button> */}
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
        <button onClick={writeClick}>WRITE_임시</button>
      </Link>
      <Link to='/noti/write'>
        <button onClick={dbWriteClick}>WRITE_DB</button>
      </Link>
      <button onClick={checkInput}>CHECK</button>
    </>
  );
}

export default NotiBoardList;
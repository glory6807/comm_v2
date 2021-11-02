// import {
//   Badge,
//   Card,
//   CardHeader,
//   CardFooter,
//   DropdownMenu,
//   DropdownItem,
//   UncontrolledDropdown,
//   DropdownToggle,
//   Media,
//   Pagination,
//   PaginationItem,
//   PaginationLink,
//   Progress,
//   Table,
//   Container,
//   Row,
//   UncontrolledTooltip,
// } from "reactstrap";
// core components
// import Header from "components/Headers/Header.js";

import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { uriSave } from 'modules/uriReducer';
import { selectRow } from 'modules/boardReducer';

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

  return (
    <>
      <div> NOTI BOARD LIST </div>
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
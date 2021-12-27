import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Table } from "reactstrap";

const FreeBoardCntn = ({freeDatas}) => {

    const dispatch = useDispatch();

    const selectContent = (id) => {
      dispatch(selectRow(id))
    }

    const selectRow = (id) => ({
          type: 'GET_FREE_DATA_ONE',
            payload: {
              id: id
            }
    });

    return (
      <Table className="align-items-center table-flush" responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col">No</th>
            <th scope="col">title</th>
            <th scope="col">writer</th>
            <th scope="col">regDate</th>
          </tr>
        </thead>
        <tbody>
          { freeDatas && freeDatas.map(data => {
              return  <tr>
                        <td>{data.BOARD_NO}</td>
                        <td onClick={ () => selectContent(data.BOARD_NO)}>
                          <Link to='/free/view'>{data.BOARD_TTL}</Link></td>
                        <td>{data.BOARD_WRTR}</td>
                        <td>{data.REG_DT}</td>
                      </tr>
            })
          }
        </tbody>
      </Table>
    );
};

export default FreeBoardCntn;
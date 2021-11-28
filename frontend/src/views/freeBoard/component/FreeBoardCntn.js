import React from 'react';
import { useHistory } from "react-router-dom";

import { Table } from "reactstrap";

const FreeBoardCntn = ({freeDatas}) => {

    const history = useHistory();

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
                        <th scope="col">{data.BOARD_NO}</th>
                        <th scope="col" onClick={ () => { history.push({
                                                                        pathname: '/free/view',
                                                                        search: `?BOARD_NO=${data.BOARD_NO}`,  // query string
                                                                        state: {  // location state
                                                                          BOARD_NO: data.BOARD_NO, 
                                                                        }});  } }>
                                        {data.BOARD_TTL}</th>
                        <th scope="col">{data.BOARD_WRTR}</th>
                        <th scope="col">{data.REG_DT}</th>
                      </tr>
            })
          }
        </tbody>
      </Table>
    );
};

export default FreeBoardCntn;
/* eslint-disable */
import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components

import FreeList from "views/freeBoard/FreeBoardList.js";
import FreeEdit from "views/freeBoard/FreeBoardEdit.js";

function FreeBoard(match) {

  return (
    <>
      <Switch>
        <Route exact path="/free/list">
            <FreeList/>
        </Route>
        <Route exact path="/free/edit">
            <FreeEdit/>
        </Route>
        {/* <Route exact path="/notice-page/view/:boardNo" component={NoticeView}>
        </Route>
        <Route exact path="/notice-page/write"
               render={
                 (props) => {
                    if(Authentication.getLoggedInUserAuth() == 'MASTER' ){
                      return <NoticeWriteForm/>
                    }
                    else{
                      alert("권한이 없습니다.");
                      return <Redirect to="/notice-page/list"/>
                    }
                 }
               }
        />
        <Route exact path="/notice-page/edit/:boardNo" component={NoticeEditForm}/>
        <Route exact path="/notice-page/del/:boardNo" component={DeleteCom}/> */}
      </Switch>
    </>
  );
}


export default FreeBoard;
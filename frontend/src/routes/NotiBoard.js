/* eslint-disable */
import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components

import NotiList from "views/notiBoard/NotiBoardList.js";
import NotiView from "views/notiBoard/NotiBoardView.js";
import NotiWrite from "views/notiBoard/NotiBoardWrite.js";
import NotiEdit from "views/notiBoard/NotiBoardEdit.js";

function NotiBoard(match) {

  return (
    <>
      <Switch>
        <Route exact path="/noti/list">
            <NotiList/>
        </Route>
        <Route exact path="/noti/view/:boardNo">
            <NotiView/>
        </Route>
        <Route exact path="/noti/edit/:boardNo">
            <NotiEdit/>
        </Route>
        <Route exact path="/noti/write">
            <NotiWrite/>
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


export default NotiBoard;
/* eslint-disable */
import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components

import FreeList from "views/freeBoard/container/FreeBoardList.js";
import FreeView from "views/freeBoard/container/FreeBoardView.js";
import FreeModify from "views/freeBoard/container/FreeBoardModify.js";
import FreeWrite from "views/freeBoard/container/FreeBoardWrite.js";

function FreeBoard(match) {

  return (
    <>
      <Switch>
        <Route exact path="/free/list">
            <FreeList/>
        </Route>
        <Route exact path="/free/view">
            <FreeView/>
        </Route>
        <Route exact path="/free/modify">
            <FreeModify/>
        </Route>
        <Route exact path="/free/write">
            <FreeWrite/>
        </Route>
      </Switch>
    </>
  );
}


export default FreeBoard;
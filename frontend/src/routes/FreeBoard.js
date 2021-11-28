/* eslint-disable */
import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components

import FreeList from "views/freeBoard/container/FreeBoardList.js";
import FreeView from "views/freeBoard/FreeBoardView.js";

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
      </Switch>
    </>
  );
}


export default FreeBoard;
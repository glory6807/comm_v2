/* eslint-disable */
import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components

import MemList from "views/memBoard/MemBoardList.js";
import MemView from "views/memBoard/MemBoardView.js";

function MemBoard(match) {

  return (
    <>
      <Switch>
        <Route exact path="/mem/list">
            <MemList/>
        </Route>
        <Route exact path="/mem/view">
            <MemView/>
        </Route>
      </Switch>
    </>
  );
}


export default MemBoard;
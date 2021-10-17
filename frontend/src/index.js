/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import BoardLayout from "layouts/Board.js";

import FreeBoard from "views/boardRouter/FreeBoard.js";
import MemBoard from "views/boardRouter/MemBoard.js";
import NotiBoard from "views/boardRouter/NotiBoard.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/free/:d" render={(props) => <FreeBoard {...props} />} />
      <Route path="/mem/:d" render={(props) => <MemBoard {...props} />} />
      <Route path="/noti/:d" render={(props) => <NotiBoard {...props} />} />

      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Redirect from="/" to="/auth/login" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

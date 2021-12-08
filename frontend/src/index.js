import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Provider } from 'react-redux';
import store from "modules/rootReducer";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "routes/Auth.js";

import FreeBoard from "routes/FreeBoard.js";
import MemBoard from "routes/MemBoard.js";
import NotiBoard from "routes/NotiBoard.js";
import KakaoLogin from "routes/KakaoLogin.js";
import Main from "views/main/Main";

// const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/free/:d" render={(props) => <FreeBoard {...props} />} />
        <Route path="/mem/:d" render={(props) => <MemBoard {...props} />} />
        <Route path="/noti/:d" render={(props) => <NotiBoard {...props} />} />

        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <Route path="/kakaoLogin" render={(props) => <KakaoLogin {...props} />} />
        <Route path="/main" render={(props) => <Main {...props} />} />
        <Redirect from="/" to="/auth/login" />
      </Switch>
    </BrowserRouter>
  </Provider>
  ,document.getElementById("root")
);

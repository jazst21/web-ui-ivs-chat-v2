// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { Provider, KeepAlive } from "react-keep-alive";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // <Provider>
  //   <KeepAlive name="Test">
  //     <App />
  //   </KeepAlive>
  // </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/README.md
serviceWorker.unregister();

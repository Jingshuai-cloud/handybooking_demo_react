import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import BrowseTask from "./BrowseTask";

ReactDOM.render(
  <React.StrictMode>
    <BrowseTask />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

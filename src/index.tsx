import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "./index.css";
import FoodApp from "./pages/foodApp/foodApp";
import reportWebVitals from "./reportWebVitals";
import { store } from "./app/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsernameApp from "./pages/usernameApp/usernameApp";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<div>Choose an app</div>} />
          <Route path="/foodApp" element={<FoodApp />} />
          <Route path="/usernameApp" element={<UsernameApp />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

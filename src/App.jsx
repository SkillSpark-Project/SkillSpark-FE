import Router from "./router/Router";
import "nprogress/nprogress.css";
import nprogress from "nprogress";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;

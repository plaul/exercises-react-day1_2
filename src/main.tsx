import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
//import ContextDemoApp from "./exercises/Context"
//import App from "./App3.tsx";
import "./App.css";
import "./index.css";
import { HeaderProvider } from "./components/headerProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeaderProvider>
      <App />
      {/* <ContextDemoApp title=""/> */}
    </HeaderProvider>
  </React.StrictMode>
);

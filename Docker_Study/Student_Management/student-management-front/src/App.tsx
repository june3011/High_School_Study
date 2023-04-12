import { useState } from "react";
import Router from "./router";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/common/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;

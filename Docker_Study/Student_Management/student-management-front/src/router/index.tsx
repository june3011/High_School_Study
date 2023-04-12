import { Routes, Route } from "react-router-dom";
import ListPage from "../pages/ListPage";
import ModifyPage from "../pages/ModifyPage";
import RegisterPage from "../pages/RegisterPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/modify/:id" element={<ModifyPage />} />
    </Routes>
  );
};

export default Router;

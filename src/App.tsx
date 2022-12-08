import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import HomeDashboard from "./pages/Home/HomeDashboard";
import ArticlesPage from "./pages/articles/ArticlesPage";
import CategoriesPage from "./pages/categories/CategoriesPage";
import AddArticle from "./pages/articles/AddArticle";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path={`${routes.LOGIN}`} element={<Login />} />
        <Route path={`${routes.REGISTER}`} element={<Register />} />

        <Route path={`${routes.DASHBOARD_HOME}`} element={<AppLayout />}>
          <Route index element={<HomeDashboard />} />
          <Route
            path={`${routes.DASHBOARD_ARTICLES}`}
            element={<ArticlesPage />}
          />
          <Route
            path={`${routes.DASHBOARD_ADD_ARTICLE}`}
            element={<AddArticle />}
          />
          <Route
            path={`${routes.DASHBOARD_CATEGORIES}`}
            element={<CategoriesPage />}
          />
        </Route>

        <Route
          path="/"
          element={<Navigate to={`${routes.DASHBOARD_HOME}`} replace />}
        />
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import "./App.css";
import Grid from "@mui/material/Grid";
import DashboardSidebar from "./components/UI/DashboardSidebar";
import DashboardNavbar from "./components/UI/DashboardNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import HomeDashboard from "./pages/HomeDashboard";
import ArticlesPage from "./pages/articles/ArticlesPage";
import CategoriesPage from "./pages/categories/CategoriesPage";
import AddArticle from "./pages/articles/AddArticle";

function App() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={0}
    >
      <Grid item>
        <DashboardSidebar />
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
          spacing={0}
        >
          <DashboardNavbar />
          <Routes>
            <Route
              path={`${routes.DASHBOARD_HOME}`}
              element={<HomeDashboard />}
            />
            <Route path={`${routes.DASHBOARD_ARTICLES}`}>
              <Route index element={<ArticlesPage />} />
              <Route path="add-article" element={<AddArticle />} />
            </Route>
            <Route
              path={`${routes.DASHBOARD_CATEGORIES}`}
              element={<CategoriesPage />}
            />
          </Routes>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;

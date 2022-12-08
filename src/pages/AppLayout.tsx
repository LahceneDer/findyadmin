import React from "react";
import Grid from "@mui/material/Grid";
import DashboardSidebar from "../components/UI/DashboardSidebar";
import DashboardNavbar from "../components/UI/DashboardNavbar";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item className="dashboard-sidebar" xs={1.5} m={3}>
          <DashboardSidebar />
        </Grid>
        <Grid item xs={10}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
            spacing={0}
            mt={2}
          >
            <DashboardNavbar />
            <Outlet />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AppLayout;

import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import SidebarListItem from "./SidebarListItem";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import CategoryIcon from "@mui/icons-material/Category";
import { routes } from "../../utils/routes";
import { colors } from "../../utils/variables";

const DashboardSidebar = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      className="dashboard-sidebar"
      spacing={0}
      style={{ height: "90vh" }}
    >
      <Typography
        variant="button"
        mt={2}
        sx={{
          color: `${colors.mainColor}`,
          backgroundColor: "white",
          width: "100%",
          padding: "2%",
        }}
        textAlign="center"
      >
        <b> Findy Dashboard</b>
      </Typography>
      <List sx={{ width: "100%" }}>
        <SidebarListItem
          key={routes.DASHBOARD_HOME}
          ItemIcon={<HomeIcon />}
          route={`${routes.DASHBOARD_HOME}`}
          itemText={"Home"}
        />
        <SidebarListItem
          key={routes.DASHBOARD_ARTICLES}
          ItemIcon={<ArticleIcon />}
          route={`${routes.DASHBOARD_ARTICLES}`}
          itemText={"Articles"}
        />
        <SidebarListItem
          key={routes.DASHBOARD_CATEGORIES}
          ItemIcon={<CategoryIcon />}
          route={`${routes.DASHBOARD_CATEGORIES}`}
          itemText={"Categories"}
        />
      </List>
    </Grid>
  );
};

export default DashboardSidebar;

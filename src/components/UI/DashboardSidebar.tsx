import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import SidebarListItem from "./SidebarListItem";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import CategoryIcon from "@mui/icons-material/Category";
import { routes } from "../../utils/routes";

const DashboardSidebar = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      spacing={0}
    >
      <Typography variant="button" color="initial" textAlign="center">
        Findy Dashboard
      </Typography>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
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

import React from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
interface ISidebarListItemProps {
  route: string;
  itemText: string;
  ItemIcon: any;
}

const SidebarListItem: React.FC<ISidebarListItemProps> = ({
  route,
  itemText,
  ItemIcon,
}) => {
  return (
    <Link
      to={`${route}`}
      style={{ textDecoration: "none", color: "white", textAlign: "center" }}
    >
      <ListItem style={{ color: "white" }} className="sidebar-list-item">
        <ListItemIcon style={{ color: "white" }}> {ItemIcon} </ListItemIcon>
        <ListItemText primary={`${itemText}`} />
      </ListItem>
    </Link>
  );
};

export default SidebarListItem;

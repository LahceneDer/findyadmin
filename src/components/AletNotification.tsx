import React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const AletNotification = () => {
  return (
    <Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }} open>
      <Alert severity="info">alert msg</Alert>
    </Snackbar>
  );
};

export default AletNotification;

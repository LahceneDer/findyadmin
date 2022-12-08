import { Grid, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../utils/variables";
import CustomCardItem from "./CustomCardItem";

const HomeDashboard = () => {
  return (
    <div style={{ width: "80vw" }}>
      <Grid
        container
        justifyContent="center"
        style={{
          backgroundColor: `${colors.mainDarkColor}`,
          color: "white",
          padding: "2%",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h3" textAlign="center">
          {" "}
          Findy Dashboard
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        <CustomCardItem title="Articles" number={345} />
        <CustomCardItem title="Users" number={267} />
        <CustomCardItem title="Categories" number={1288} />
      </Grid>
    </div>
  );
};

export default HomeDashboard;

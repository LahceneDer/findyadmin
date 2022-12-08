import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../utils/variables";

interface ICustomCardItemProps {
  title: string;
  number: number;
}

const CustomCardItem: React.FC<ICustomCardItemProps> = ({ title, number }) => {
  return (
    <Grid item xs={3} textAlign="center">
      <Card sx={{ padding: "5%" }}>
        <CardContent>
          <Typography variant="h4" style={{ color: `${colors.mainColor}` }}>
            {title}
          </Typography>
          <Typography>{number}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CustomCardItem;

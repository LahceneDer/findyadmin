import React from "react";
import { styled } from "@mui/system";
import { colors } from "../variables";
import Box from "@mui/material/Box";

interface IAuthBoxProps {
  children?: JSX.Element | JSX.Element[] | string;
}

const BoxWrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: `${colors.mainColor}`,
});

const AuthBox: React.FC<IAuthBoxProps> = ({ children }) => {
  return (
    <BoxWrapper>
      <Box
        sx={{
          width: 700,
          height: 400,
          bgColor: "red",
          borderRadius: "5px",
          boxShadow: "0 2 10 0 black",
          display: "flex",
          flexDirectionn: "colum",
          background: `${colors.mainDarkColor}`,
          padding: "25px",
        }}
      >
        {children}
      </Box>
    </BoxWrapper>
  );
};

export default AuthBox;

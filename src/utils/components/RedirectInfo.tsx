import React from "react";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";

const RedirectText = styled("span")({
  color: "white",
  cursor: "pointer",
});

interface IRedirectInfoProps {
  additionalStyle?: React.CSSProperties | undefined;
  text: string;
  redirectText: string;
  redirectHandler: React.MouseEventHandler<HTMLSpanElement>;
}

const RedirectInfo: React.FC<IRedirectInfoProps> = ({
  redirectHandler,
  redirectText,
  text,
  additionalStyle,
}) => {
  return (
    <Typography
      sx={{ color: "red" }}
      style={additionalStyle ? additionalStyle : {}}
      variant="subtitle1"
    >
      {text}
      <RedirectText onClick={redirectHandler}> {redirectText} </RedirectText>
    </Typography>
  );
};

export default RedirectInfo;

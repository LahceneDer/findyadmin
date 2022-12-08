import React from "react";
import Button from "@mui/material/Button";
import { colors } from "../../variables";


interface ICustomPrimaryButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled: boolean;
  additionalStyle?: React.CSSProperties | undefined;
}

const CustomPrimaryButton: React.FC<ICustomPrimaryButtonProps> = ({
  label,
  disabled,
  onClick,
  additionalStyle,
}) => {
  return (
    <Button
      variant="contained"
      disabled={disabled}
      type="submit"
      sx={{
        bgcolor: `${colors.mainColor}`,
        textTransform: "none",
        fontWeight: 500,
        width: "100%",
        height: "40px",
      }}
      style={additionalStyle ? additionalStyle : {}}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomPrimaryButton;

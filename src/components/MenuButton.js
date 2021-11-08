import { useTheme } from "@emotion/react";
import { ExpandMore } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const MenuButton = (props) => {
  const theme = useTheme();
  return (
    <Button
      variant='outlined'
      disableRipple
      disableElevation
      {...props}
      sx={{
        width: props.width || "50%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mr: "10px",
        border: `.4px solid ${theme.palette.neutral.gray03}`,
      }}>
      <span>{props.name}</span>
      <ExpandMore />
    </Button>
  );
};

export default MenuButton;

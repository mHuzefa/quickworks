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
      disableFocusRipple
      disableTouchRipple
      {...props}
      sx={{
        width: props.width || "50%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: theme.palette.text.secondary,
        mr: "10px",
        border: `.4px solid ${theme.palette.neutral.gray03}`,
        "&:hover": {
          color: theme.palette.text.secondary,
          border: `.4px solid ${theme.palette.neutral.gray03}`,
          background: "none",
        },
      }}>
      <span>{props.name}</span>
      <ExpandMore />
    </Button>
  );
};

export default MenuButton;

import { Box } from "@mui/system";
import {
  Stack,
  Typography,
  Link as li,
  Button,
  Menu,
  MenuItem,
  Input,
  InputBase,
  Paper,
} from "@mui/material";
import { Language, OpenInFullSharp } from "@mui/icons-material";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import QuickworksLogo from "../../assets/images/logo.png";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "react-responsive";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { currencies } from "../../data/currencies";
import { languages } from "../../data/languages";

const Header = (props, ref) => {
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <Box>
      {isTabletOrMobile ? (
        <MobileHeader currencies={currencies} languages={languages} />
      ) : (
        <DesktopHeader currencies={currencies} languages={languages} />
      )}
    </Box>
  );
};

export default React.forwardRef(Header);

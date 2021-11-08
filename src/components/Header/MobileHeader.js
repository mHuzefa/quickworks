import { Box } from "@mui/system";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import QuickworksLogo from "../../assets/images/logo.png";
import {
  Button,
  Divider,
  Drawer,
  List,
  Menu,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

const MobileHeader = ({ currencies, languages }) => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState(currencies[0]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElL, setAnchorElL] = useState(null);
  const theme = useTheme();

  const open = Boolean(anchorEl);
  const openL = Boolean(anchorElL);
  const languageHandleClick = (event) => {
    setAnchorElL(event.currentTarget);
  };
  const languageHandleClose = (event) => {
    setAnchorElL(null);
  };
  const currencyHandleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setToggleDrawer(true);
  };
  const currencyHandleClose = (event, index) => {
    setAnchorEl(null);
  };
  const onClickToggle = () => {
    setToggleDrawer(true);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: 0,
          paddingLeft: "1rem",
          paddingRight: "1rem",
          backgroundColor: "primary.main",
        }}>
        <Button sx={{ margin: 0, padding: 0 }} onClick={onClickToggle}>
          <MenuIcon sx={{ color: theme.palette.common.white }} />
        </Button>

        <img
          src={QuickworksLogo}
          alt='Quickworks Logo'
          style={{ width: "3.5rem", paddingTop: "5px", paddingBottom: "5px" }}
        />
        <Button
          variant='text'
          sx={{
            color: theme.palette.secondary.main,
            textTransform: "capitalize",
            fontWeight: 700,
          }}>
          Join
        </Button>
      </Box>
      <Drawer open={toggleDrawer} onClick={() => setToggleDrawer(false)}>
        <List sx={{ width: "50vw" }}>
          <Button
            variant='conatined'
            sx={{
              background: theme.palette.secondary.main,
              ml: "1rem",
              mt: "1rem",
              mb: "1rem",
              "&:hover": { background: theme.palette.secondary.main },
            }}>
            Join Fiverr
          </Button>
          <Divider />
          <Box>
            <Typography variant='p' sx={{ fontWeight: 600, margin: "1rem" }}>
              General
            </Typography>

            <Divider />
            <Link to='/'>Home</Link>
            <Accordion>
              <AccordionDetails>English</AccordionDetails>
              <AccordionSummary>Helloo</AccordionSummary>
            </Accordion>
          </Box>
        </List>
      </Drawer>
    </Box>
  );
};

export default MobileHeader;

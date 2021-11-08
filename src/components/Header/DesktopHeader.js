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
import { Language } from "@mui/icons-material";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import QuickworksLogo from "../../assets/images/logo.png";
import { useTheme } from "@emotion/react";

const DesktopHeader = ({ currencies, languages }) => {
  const [language, setLanguage] = useState("English");
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
  };
  const currencyHandleClose = (event, index) => {
    setAnchorEl(null);
  };

  const [currency, setCurrency] = useState(currencies[0]);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 0,
        paddingLeft: "2.5rem",
        paddingRight: "2.5rem",
        backgroundColor: "primary.main",
      }}>
      <Link to='/'>
        <img
          style={{ width: "4rem" }}
          src={QuickworksLogo}
          alt='Quickworks Logo'
        />
      </Link>
      <Box sx={{ ml: "auto" }}>
        <Button
          onClick={languageHandleClick}
          variant='text'
          sx={{
            color: theme.palette.common.white,
            textTransform: "capitalize",
            fontWeight: 600,
          }}>
          <Language sx={{ mr: 1 }} />
          {language}
        </Button>
        <Button
          onClick={currencyHandleClick}
          variant='text'
          sx={{
            color: theme.palette.common.white,
            textTransform: "capitalize",
            fontWeight: 600,
          }}>
          {currency.symbol} - {currency.abbr}
        </Button>
        <Button
          variant='text'
          sx={{
            color: theme.palette.secondary.main,
            textTransform: "capitalize",
            fontWeight: 700,
          }}>
          Become a Seller
        </Button>
        <Button
          variant='text'
          sx={{
            color: theme.palette.common.white,
            textTransform: "capitalize",
          }}>
          Sign In
        </Button>
        <Button
          size='small'
          sx={{
            border: 1,
            borderColor: theme.palette.secondary.main,
            color: theme.palette.secondary.main,
            background: "none",
            "&:hover": {
              background: theme.palette.secondary.main,
              color: theme.palette.primary.main,
            },
          }}
          variant='contained'
          color='secondary'>
          Join
        </Button>
      </Box>
      <Menu
        anchorEl={anchorElL}
        open={openL}
        onClose={languageHandleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        {languages.map((language, index) => {
          return (
            <MenuItem
              onClick={() => {
                setAnchorElL(null);
                setLanguage(languages[index]);
              }}>
              {language}
            </MenuItem>
          );
        })}
      </Menu>
      <Menu
        anchorEl={anchorEl}
        open={open}
        sx={{
          height: "50vh",
        }}
        onClose={currencyHandleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        {currencies.map((currency, index) => {
          return (
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                console.log(index);
                setCurrency(currencies[index]);
              }}>
              <span>
                {currency.symbol} - {currency.abbr}
              </span>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};
export default DesktopHeader;

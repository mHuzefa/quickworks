import { Box } from "@mui/system";
import {
  Button,
  Menu,
  MenuItem
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
        p: ".5rem 2.5rem",

        backgroundColor: theme.palette.background,
      }}>
        <Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 0,
        p: ".5rem 2.5rem",

        backgroundColor: theme.palette.background,
      }}>
          <Link
            to='/'
            style={{
              display: "flex",
              alignItems: "center",
              margin:'0 1rem',
              textDecoration: "none",
              color: theme.palette.text.primary,
              fontWeight: "700",
            }}>
            <img
              style={{ width: "4rem" }}
              src={QuickworksLogo}
              alt='Quickworks Logo'
            />
            QUICKWORKS
          </Link>
          <Link
        to='/seller_dashboard'
        style={{
          display: "flex",
          alignItems: "center",
          margin:'0 1rem',
          textDecoration: "none",
          color: theme.palette.text.tertiary,
          fontWeight: "400",
        }}>
        
        Seller Dashboard
      </Link>
      <Link
        to='/users'
        style={{
          display: "flex",
          alignItems: "center",
          margin:'0 1rem',
          textDecoration: "none",
          color: theme.palette.text.tertiary,
          fontWeight: "400",
        }}>
        Users
      </Link>
      <Link
        to='/buyer_requests'
        style={{
          display: "flex",
          margin:'0 1rem',
          alignItems: "center",
          textDecoration: "none",
          color: theme.palette.text.tertiary,
          fontWeight: "400",
        }}>
        Buyer Request
      </Link>
      <Link
        to='/post/request'
        style={{
          display: "flex",
          alignItems: "center",
          margin:'0 1rem',
          textDecoration: "none",
          color: theme.palette.text.tertiary,
          fontWeight: "400",
        }}>
          Post Request
      </Link>
      <Link
        to='/manage_gigs'
        style={{
          display: "flex",
          alignItems: "center",
          margin:'0 1rem',
          textDecoration: "none",
          color: theme.palette.text.tertiary,
          fontWeight: "400",
        }}>
          Manage Gigs
      </Link>
      <Link
        to='/manage_orders'
        style={{
          display: "flex",
          margin:'0 1rem',
          alignItems: "center",
          textDecoration: "none",
          color: theme.palette.text.tertiary,
          fontWeight: "400",
        }}>
          Manage Orders
      </Link>
        </Box>

      <Box sx={{ ml: "auto" }}>
        <Button
          disableRipple
          disableFocusRipple
          disableTouchRipple
          onClick={languageHandleClick}
          variant='text'
          sx={{
            color: theme.palette.text.secondary,
            textTransform: "capitalize",
            fontWeight: 600,
          }}>
          <Language sx={{ mr: 1 }} />
          {language}
        </Button>
        <Button
          disableRipple
          disableFocusRipple
          disableTouchRipple
          onClick={currencyHandleClick}
          variant='text'
          sx={{
            color: theme.palette.text.secondary,
            textTransform: "capitalize",
            fontWeight: 600,
          }}>
          {currency.symbol} - {currency.abbr}
        </Button>
        <Button
          variant='text'
          sx={{
            color: theme.palette.text.secondary,
            textTransform: "capitalize",
            fontWeight: 700,
          }}>
          Become a Seller
        </Button>
        <Button
          variant='text'
          sx={{
            color: theme.palette.text.secondary,
            textTransform: "capitalize",
            fontWeight: "700",
          }}>
          Sign In
        </Button>
        <Button
          size='small'
          disableElevation
          disableRipple
          disableFocusRipple
          disableTouchRipple
          sx={{
            border: 1,
            borderColor: theme.palette.primary.main,
            color: theme.palette.text.primary,
            ml: ".5rem",
            fontWeight: "700",
            background: theme.palette.primary.main,
            "&:hover": {
              background: theme.palette.primary.main,
              boxShadow: theme.palette.shadow.shadow01,
            },
          }}
          variant='contained'
          color='primary'>
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

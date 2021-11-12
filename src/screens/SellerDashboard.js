import { useTheme } from "@emotion/react";
import { ExpandLess, ExpandMore, Star } from "@mui/icons-material";
import { Avatar, Button, Divider, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import StyledMenu from "../components/StyledMenu";
import Avataaar from "./../assets/images/avataaars.png";
const SellerDashboard = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [clicked, setClicked] = useState(false);
  const open = Boolean(anchorEl);
  const activeMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setClicked(!clicked);
  };
  const activeMenuClose = () => {
    setAnchorEl(null);
    setClicked(!clicked);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "column",
          lg: "row",
        },
        justifyContent: "space-between",
      }}>
      <Box
        sx={{
          maxWidth: "320px",
          minWidth: { xs: "80vw", sm: "78vw", md: "90vw", lg: "280px" },
          margin: "2rem",
        }}>
        <Box
          sx={{
            width: "100%",
            background: theme.palette.background.default,
            boxShadow: theme.palette.shadow.shadow01,
            padding: "1.5rem",
            pb: "5px",
            display: "flex",
            flexDirection: "column",
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "column",
              },
              justifyContent: { md: "space-between" },
            }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: theme.palette.text.primary,
                mb: "1rem",
              }}>
              <Box
                sx={{
                  display: "flex",

                  alignItems: "center",
                }}>
                <img
                  style={{
                    width: "3.5rem",
                    marginRight: "1rem",
                    borderRadius: "50%",
                  }}
                  src={Avataaar}
                  alt=''
                />
                <span
                  style={{
                    paddingTop: "5px",
                    fontSize: "1.2rem",
                    fontWeight: "700",
                  }}>
                  Jerryclark
                </span>
              </Box>

              <Box id='rating' sx={{ display: "flex", alignItems: "center" }}>
                <Star
                  sx={{ color: theme.palette.primary.main, fontSize: "1.1rem" }}
                />

                <span
                  style={{
                    color: theme.palette.primary.main,
                    fontWeight: "500",
                  }}>
                  5
                </span>
              </Box>
            </Box>
            <Divider />
            <Box sx={{ mt: "1rem" }}>
              <Analytics name='Inbox response rate' info='100%' />
              <Analytics name='Inbox response time' info='1 Hrs' />
              <Analytics name='Order response rate' info='100%' />
              <Analytics name='Delivered on time' info='100%' />
              <Analytics name='Order Completion Rate' info='100%' />
            </Box>
          </Box>
          <Divider />
          <Box sx={{ mt: "1rem" }}>
            <Analytics
              name='Earned in October'
              info='$770'
              color={theme.palette.text.primary}
            />
          </Box>
        </Box>
        <Box
          sx={{
            mt: "2rem",
            width: "100%",
            padding: "1.5rem",

            background: theme.palette.background.default,
            boxShadow: theme.palette.shadow.shadow01,
          }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: "1rem",
            }}>
            <span
              style={{ color: theme.palette.text.primary, fontWeight: "500" }}>
              Inbox
            </span>
            <Link
              to=''
              style={{
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "1rem",
                color: theme.palette.primary.main,
              }}>
              View all
            </Link>
          </Box>
          <Divider />
          <Box sx={{ maxHeight: "25rem", overflowY: "scroll" }}>
            <Chat />
            <Divider />
            <Chat />
            <Divider />
            <Chat />
            <Divider />
            <Chat />
            <Divider />
            <Chat />
            <Divider />
          </Box>
        </Box>
        <Box>Social Links</Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          float: "right",
          width: { lg: "70vw", md: "90vw", sm: "80vw", xs: "80vw" },
          margin: "2rem 2rem",
        }}>
        <Box
          sx={{
            background: theme.palette.background.default,
            boxShadow: theme.palette.shadow.shadow01,
            padding: "1rem 1.5rem",
            display: "flex",
            mb: "2rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <span
            style={{
              fontSize: "1.2rem",
              fontWeight: "700",
              color: theme.palette.text.primary,
            }}>
            Active Orders
          </span>
          <Button
            disableElevation
            disableRipple
            disableFocusRipple
            disableTouchRipple
            sx={{
              border: `1px solid ${theme.palette.text.primary}`,
              color: theme.palette.text.primary,
              p: ".5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "240px",
            }}
            onClick={activeMenuOpen}>
            Active Orders
            {clicked ? <ExpandLess /> : <ExpandMore />}
          </Button>
          <StyledMenu anchorEl={anchorEl} open={open} onClose={activeMenuClose}>
            <MenuItem onClick={activeMenuClose}>Active Orders</MenuItem>
            <Divider />
            <MenuItem onClick={activeMenuClose}>Completed</MenuItem>
            <MenuItem onClick={activeMenuClose}>Cancelled</MenuItem>
          </StyledMenu>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: "1.5rem 1rem",
            boxShadow: theme.palette.shadow.shadow01,
          }}>
          <Box>
            <Box
              component='img'
              sx={{ width: "5rem" }}
              src='https://fiverr-res.cloudinary.com/t_medium5,q_auto,f_auto/gigs/219368561/original/f199ef71323c3d4cbf2342aada1cf142a5e37b97.png'></Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar>H</Avatar>
            <Typography
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: "500",
                ml: "1rem",
              }}
              variant='b'>
              HalenKumar
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              component='span'
              sx={{ color: theme.palette.grey[400], mb: "4px" }}>
              Price
            </Box>
            <Box
              component='span'
              sx={{ color: theme.palette.text.secondary, fontWeight: "500" }}>
              $55
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              component='span'
              sx={{ color: theme.palette.grey[400], mb: "4px" }}>
              Status
            </Box>
            <Box
              component='span'
              sx={{
                fontSize: "10px",
                fontWeight: "600",
                color: theme.palette.background.default,
                background: theme.palette.grey[400],
                p: "3px 6px",
                borderRadius: "2rem",
              }}>
              COMPLETED
            </Box>
          </Box>
          <Box>
            <Button
              disableRipple
              sx={{ fontWeight: "700", "&:hover": { background: "none" } }}>
              View
            </Button>
          </Box>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default SellerDashboard;

const Analytics = ({ name, info, color }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mb: "1rem",
      }}>
      <span
        style={{
          fontWeight: "500",
          width: { lg: "0rem", md: "20rem" },
          fontSize: "1rem",
          color: theme.palette.text.tertiary,
        }}>
        {name}
      </span>
      <span
        style={{
          fontWeight: "600",
          fontSize: "1rem",
          marginLeft: "auto",
          color: color ? color : theme.palette.primary.main,
        }}>
        {info}
      </span>
    </Box>
  );
};

const Chat = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mt: "1rem",
        pd: "5px",
      }}>
      <Box>
        <img
          src={Avataaar}
          alt=''
          style={{
            width: "2.5rem",
            borderRadius: "50%",
            marginRight: "5px",
          }}
        />
      </Box>
      <Box
        sx={{
          mr: "auto",
          display: "flex",
          flexDirection: "column",
          alignSelf: "flex-start",
        }}>
        <span
          style={{
            color: theme.palette.text.tertiary,
            fontWeight: "700",
            marginBottom: "5px",
          }}>
          James Bond
        </span>
        <span style={{ color: theme.palette.grey[400] }}>
          Thank you for helping.{" "}
        </span>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "#666",
          fontSize: "12px",
        }}>
        <span>6d</span>
        <Star sx={{ fontSize: "1rem" }} />
      </Box>
    </Box>
  );
};

import { useTheme } from "@emotion/react";
import { Star } from "@mui/icons-material";
import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Avataaar from "./../assets/images/avataaars.png";
const SellerDashboard = () => {
  const theme = useTheme();
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
            background: theme.palette.common.white,
            boxShadow: "1px 1px 3px 1px rgba(0,0,0,0.1)",
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
                color: "#666",
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
                <Star sx={{ color: theme.palette.secondary.main }} />

                <span>5</span>
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
            <Analytics name='Earned in October' info='$770' color='#666' />
          </Box>
        </Box>
        <Box
          sx={{
            mt: "2rem",
            width: "100%",
            padding: "1.5rem",

            background: theme.palette.common.white,
            boxShadow: "1px 1px 3px 1px rgba(0,0,0,0.1)",
          }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: "1rem",
            }}>
            <span>Inbox</span>
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
            background: "#fff",
            boxShadow: "1px 1px 3px 1px rgba(0,0,0,0.1)",
            padding: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
          }}>
          <span
            style={{
              fontSize: "1.2rem",
              fontWeight: "700",
              color: theme.palette.primary.main,
            }}>
            Active Orders
          </span>
          <span>Orders</span>
        </Box>
        <Box></Box>
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
          fontWeight: "700",
          width: { lg: "0rem", md: "20rem" },
          fontSize: "1rem",
          color: "#777",
        }}>
        {name}
      </span>
      <span
        style={{
          fontWeight: "800",
          fontSize: "1rem",
          marginLeft: "auto",
          color: color ? color : theme.palette.secondary.main,
        }}>
        {info}
      </span>
    </Box>
  );
};

const Chat = () => {
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
            color: "#666",
            fontWeight: "700",
            marginBottom: "5px",
          }}>
          James Bond
        </span>
        <span style={{ color: "#888" }}>Thank you for helping. </span>
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

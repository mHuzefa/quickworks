import { Box } from "@mui/system";
import { InputBase, Paper, Typography, Button } from "@mui/material";
import { Search } from "@mui/icons-material";
import React from "react";
import PersonWorkingImage from "../assets/images/personworking.png";
import LogoDesign from "../assets/images/logodesign.jpg";
import { useTheme } from "@emotion/react";
import LinkCard from "../components/LinkCard/LinkCard";
const HomeScreen = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          background: "#f0f0f0",
          display: "flex",
          padding: "0 2rem",
          alignItems: "center",
          justifyContent: "space-around",
        }}>
        <Box sx={{ alignSelf: "flex-start", margin: "5rem 0" }}>
          <Typography
            variant='h1'
            sx={{
              fontSize: "3rem",
              fontWeight: 600,
              width: "45vw",
              margin: "2rem 0",
              mt: "3.5rem",
              color: theme.palette.primary.main,
            }}>
            Find the perfect freelance services for your business
          </Typography>

          <Paper
            sx={{
              width: "40vw",
              height: "3rem",
              display: "flex",
              alignItems: "center",
            }}>
            <Search sx={{ paddingLeft: "1rem" }} />
            <InputBase
              type='text'
              placeholder="Try 'Mobile App Development'"
              sx={{ paddingLeft: "1rem", mr: "auto", width: "35vw" }}
            />
            <Button
              variant='contained'
              disableRipple
              sx={{ height: "3rem", borderRadius: "1px", boxShadow: "none" }}>
              Search
            </Button>
          </Paper>
        </Box>
        <Box>
          <img src={PersonWorkingImage} alt="pp" />
        </Box>
      </Box>

      <Box sx={{ padding: "5rem 0" }}>
        <Typography
          variant='h2'
          sx={{
            color: theme.palette.primary.main,
            fontSize: "2rem",
            fontWeight: 600,
            margin: "0 3rem",
          }}>
          Popular Professional Services
        </Typography>
        <Box
          sx={{
            position: "relative",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            padding: "3rem 0",
          }}>
          <Box
            sx={{
              display: "flex",
              width: "90%",
              flexWrap: "no-wrap",
              overflowX: "scroll",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              "&::-webkit-scrollbar": { display: "none" },
            }}>
            <LinkCard
              src={LogoDesign}
              heading='Logo Design'
              subheading={"Brand your design"}
            />
            <LinkCard
              src={LogoDesign}
              heading='Logo Design'
              subheading={"Brand your design"}
            />
            <LinkCard
              src={LogoDesign}
              heading='Logo Design'
              subheading={"Brand your design"}
            />
            <LinkCard
              src={LogoDesign}
              heading='Logo Design'
              subheading={"Brand your design"}
            />
            <LinkCard
              src={LogoDesign}
              heading='Logo Design'
              subheading={"Brand your design"}
            />
            <LinkCard
              src={LogoDesign}
              heading='Logo Design'
              subheading={"Brand your design"}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeScreen;

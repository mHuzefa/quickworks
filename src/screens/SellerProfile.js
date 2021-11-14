import { useTheme } from "@emotion/react";
import {
  Add,
  Delete,
  Edit,
  GpsFixed,
  MoreHoriz,
  Pause,
  Person,
  PieChart,
  Schedule,
  ScheduleSend,
  Settings,
  Star,
  Visibility,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Divider,
  MenuItem,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import StyledMenu from "../components/GigMenu";
import TabPanel from "../components/TabPanel";

const SellerProfile = () => {
  const [value, setValue] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [translate, setTranslate] = useState({
    opacity: 0,
    translateX: "1rem",
  });
  const tabHandler = (event, newValue) => setValue(newValue);
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: {
          lg: "flex-start",
          md: "flex-start",
          sm: "center",
          xs: "center",
        },
        justifyContent: "center",
        flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
        m: "3rem",
      }}>
      <Box sx={{ width: "380px" }}>
        <Box
          sx={{
            boxShadow: theme.palette.shadow.shadow01,
            p: "2rem 1rem",
            pb: "0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Avatar
            sx={{ width: "8rem", height: "8rem" }}
            src={
              "data:image/jpeg;base64,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"
            }></Avatar>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: "1.3rem",
              mt: "1.5rem",
            }}
            variant={"h2"}>
            Jimcarry02
          </Typography>
          <p
            style={{
              color: theme.palette.text.tertiary,

              margin: "4px 0",
            }}>
            UI UX Designer & Frontend Developer
          </p>
          <span
            style={{
              border: `1px solid ${theme.palette.primary.main}`,
              borderRadius: "50px",
              fontSize: "13px",
              color: theme.palette.primary.main,
              padding: "1px 8px",
              textAlign: "center",
            }}>
            Online
          </span>
          <Box
            sx={{
              display: "flex",
              margin: "6px 0",
              fontSize: "14px",
              alignItems: "center",
            }}>
            <Box sx={{ mr: "3px" }}>
              <Star
                sx={{ fontSize: "1.2rem", color: theme.palette.primary.main }}
              />
              <Star
                sx={{ fontSize: "1.2rem", color: theme.palette.primary.main }}
              />
              <Star
                sx={{ fontSize: "1.2rem", color: theme.palette.primary.main }}
              />
              <Star
                sx={{ fontSize: "1.2rem", color: theme.palette.primary.main }}
              />
              <Star
                sx={{ fontSize: "1.2rem", color: theme.palette.primary.main }}
              />
            </Box>
            <span
              style={{
                color: theme.palette.text.secondary,
                fontWeight: "800",
                marginRight: "4px",
              }}>
              4.8
            </span>
            <span
              style={{
                color: theme.palette.grey[400],
                fontWeight: "400",
              }}>
              (5 reviews)
            </span>
          </Box>
          <Divider sx={{ width: "100%", mt: "1rem" }} />
          <Box
            component='ul'
            sx={{
              listStyleType: "none",
              display: "block",
              alignSelf: "stretch",
              padding: "0",
            }}>
            <MemberDetail Icon={GpsFixed} text='From' detail={"Pakistan"} />
            <MemberDetail
              Icon={Person}
              text='Member since'
              detail={"Aug 2021"}
            />
            <MemberDetail
              Icon={Schedule}
              text='Avg. Response Time'
              detail={"1 hour"}
            />
            <MemberDetail
              Icon={ScheduleSend}
              text='Last Delivery'
              detail={"7 Days"}
            />
          </Box>
        </Box>
        <Box
          sx={{
            mt: "2rem",
            boxShadow: theme.palette.shadow.shadow01,
            p: "2rem 1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}>
          <Box>
            <HeadingandBtn heading={"Description"} btn={"Edit Description"} />
            <Box
              sx={{
                color: theme.palette.text.tertiary,
                fontSize: "1rem",
                mt: "1rem",
                mb: "2rem",
                textAlign: "left",
              }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              excepturi dolorum corporis quidem voluptate, vitae id veniam
              praesentium aspernatur earum, iure illum neque eligendi? Velit in
              eos nobis quisquam laboriosam. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Nisi hic debitis, ratione voluptates
              ullam, rerum eveniet saepe, illum praesentium repellat quidem sed?
            </Box>
          </Box>
          <Divider />
          <Box sx={{ mt: "2rem" }}>
            <HeadingandBtn heading={"Languages"} btn={"Add new"} />
            <Box
              sx={{ p: "10px 0" }}
              onMouseOver={() => setOpacity(100)}
              onMouseOut={() => setOpacity(0)}>
              <span style={{ color: theme.palette.text.secondary }}>
                English
              </span>
              <span style={{ color: theme.palette.text.tertiary }}> - </span>
              <span
                style={{
                  color: theme.palette.text.tertiary,
                  fontStyle: "italic",
                }}>
                Native/Bilingual
              </span>
              <Box
                sx={{
                  opacity: opacity,
                  display: "inline-block",
                  transition: "opacity .1s ease-in",
                  ml: "1rem",
                }}>
                <Edit
                  sx={{
                    fontSize: "18px",
                    color: theme.palette.grey[400],
                    "&:hover": { color: theme.palette.grey[100] },
                  }}
                />
                <Delete
                  sx={{
                    fontSize: "18px",
                    color: theme.palette.neutral.gray,
                    "&:hover": { color: theme.palette.grey[100] },
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Divider />
          <Box sx={{ mt: "2rem" }}>
            <HeadingandBtn heading={"Skills"} btn={"Add new"} />
            <Box sx={{ m: "1rem 0" }}>
              <Paper
                elevation={0}
                onMouseOver={() =>
                  setTranslate({ opacity: "100", translateX: "-1.5rem" })
                }
                onMouseOut={() =>
                  setTranslate({ opacity: "0", translateX: "5px" })
                }
                sx={{
                  width: "max-content",
                  overflow: "hidden",
                  position: "relative",
                  dispay: "flex",
                  alignItems: "center",
                  p: "8px 1rem",
                  background: theme.palette.grey[100],

                  border: "1px solid #ccc",
                  borderRadius: "10rem",
                }}>
                <Typography variant='span' sx={{ color: "#666" }}>
                  Programmer
                </Typography>
                <Box
                  sx={{
                    display: "inline-block",
                    width: "3rem",
                    borderRadius: "2rem",
                    p: "8px 4px",
                    top: "0px",
                    opacity: translate.opacity,
                    transform: `translateX(${translate.translateX})`,
                    transition: "transform .3s ease-in, opacity .6s ease-in",
                    position: "absolute",
                    background: "#fff",
                    boxShadow: theme.palette.shadow.shadow01,
                  }}>
                  <Edit
                    sx={{
                      fontSize: "1rem",
                      color: theme.palette.neutral.gray,
                      "&:hover": { color: theme.palette.neutral.black03 },
                    }}
                  />
                  <Delete
                    sx={{
                      fontSize: "1rem",
                      color: theme.palette.neutral.gray,
                      "&:hover": { color: theme.palette.neutral.black03 },
                    }}
                  />
                </Box>
              </Paper>
            </Box>
          </Box>
          <Divider />
          <Box sx={{ m: "2rem 0" }}>
            <HeadingandBtn heading={"Education"} btn={"Add new"} />
          </Box>
          <Divider />
          <Box sx={{ m: "2rem 0" }}>
            <HeadingandBtn heading={"Certification"} btn={"Add new"} />
          </Box>
        </Box>
      </Box>
      <Box sx={{ m: "0 2rem" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Tabs
            sx={{
              boxShadow: { lg: theme.palette.shadow.shadow01 },
              height: "3.2rem",
              width: { lg: "50rem", md: "30rem" },
            }}
            value={value}
            onChange={tabHandler}>
            <Tab sx={{ fontWeight: "700" }} label={"ACTIVE"} />
            <Tab sx={{ fontWeight: "700" }} label={"PAUSED"} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: {
                  lg: "flex-start",
                  md: "flex-start",
                  sm: "center",
                  xs: '"center"',
                },
                flexWrap: "wrap",
                maxWidth: "50rem",
              }}>
              <ProfileGig
                gigTitle={"I will do mobile application development in flutter"}
                startPrice={"$50"}
                imgUrl={
                  "https://fiverr-res.cloudinary.com/images/t_medium7,q_auto,f_auto,q_auto,f_auto/gigs/219368561/original/f199ef71323c3d4cbf2342aada1cf142a5e37b97/do-web-and-mobile-app-ui-ux-design-as-ui-ux-designer.png"
                }
              />
              <ProfileGig
                gigTitle={"I will do mobile application development in flutter"}
                startPrice={"$50"}
                imgUrl={
                  "https://fiverr-res.cloudinary.com/images/t_medium7,q_auto,f_auto,q_auto,f_auto/gigs/219368561/original/f199ef71323c3d4cbf2342aada1cf142a5e37b97/do-web-and-mobile-app-ui-ux-design-as-ui-ux-designer.png"
                }
              />

              <ProfileGig
                gigTitle={"I will do mobile application development in flutter"}
                startPrice={"$50"}
                imgUrl={
                  "https://fiverr-res.cloudinary.com/images/t_medium7,q_auto,f_auto,q_auto,f_auto/gigs/225929717/original/03ce363ae3a2eac7c4624dd5a09b2c5af304188a/create-responsive-landing-page-design-and-website-design.png"
                }
              />
              <ProfileGig
                gigTitle={"I will do mobile application development in flutter"}
                startPrice={"$50"}
                imgUrl={
                  "https://fiverr-res.cloudinary.com/images/t_medium7,q_auto,f_auto,q_auto,f_auto/gigs/223857209/original/ce22480d72ff6a83e1c87552426b8fe86f70d0bb/do-ui-ux-design-for-mobile-and-website.png"
                }
              />
              <Box
                component={Link}
                to='/'
                sx={{
                  width: {
                    lg: "230px",
                    md: "230px",
                    sm: "100%",
                    xs: "100%",
                  },
                  height: "254.8px",
                  mt: { lg: 0, md: 0, sm: "2rem", xs: "2rem" },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #e5e5e5",
                  textDecoration: "none",
                }}>
                <Box
                  sx={{
                    background: theme.palette.secondary.main,
                    width: "5rem",
                    height: "5rem",
                    display: "flex",
                    mb: "1rem",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                  }}>
                  <Add
                    sx={{
                      color: "#fff",
                      fontSize: "2rem",
                      textAlign: "center",
                    }}
                  />
                </Box>
                <Typography
                  sx={{ fontWeight: "700", color: theme.palette.primary.main }}
                  variant={"span"}>
                  Create new Gig
                </Typography>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                width: { lg: "50rem", md: "30rem" },
              }}>
              <ProfileGig
                gigTitle={"I will do mobile application development in flutter"}
                startPrice={"$50"}
                imgUrl={
                  "https://fiverr-res.cloudinary.com/images/t_medium7,q_auto,f_auto,q_auto,f_auto/gigs/219561787/original/260573892050157bc86bd327f790d18709cde92f/do-mobile-app-development-with-react-native.png"
                }
              />
            </Box>
          </TabPanel>
        </Box>
        {/* <Box>Reviews</Box> */}
      </Box>
    </Box>
  );
};

export default SellerProfile;

const MemberDetail = ({ Icon, text, detail }) => {
  const theme = useTheme();
  return (
    <Box
      component='li'
      sx={{
        display: "flex",
        justifyContent: "space-between",
        m: "10px 0",
        alignItems: "center",
      }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Icon
          sx={{
            fontSize: "16px",
            mr: "10px",
            color: theme.palette.text.tertiary,
          }}
        />
        <span
          style={{
            fontSize: "15px",
            color: theme.palette.text.tertiary,
          }}>
          {text}
        </span>
      </Box>
      <b
        style={{
          color: theme.palette.text.secondary,
          fontWeight: "700",
          fontSize: "15px",
        }}>
        {detail}
      </b>
    </Box>
  );
};

const HeadingandBtn = ({ heading, btn, ...props }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <Typography
        variant='h2'
        sx={{
          fontSize: "1rem",
          fontWeight: "700",
          color: theme.palette.text.primary,
        }}>
        {heading}
      </Typography>
      <Button
        disableElevation
        disableRipple
        disableTouchRipple
        {...props}
        variant='outlined'
        sx={{
          border: "none",
          color: theme.palette.neutral.blue,

          p: "0",
          "&:hover": {
            border: "none",
            background: "none",
          },
        }}>
        {btn}
      </Button>
    </Box>
  );
};

const ProfileGig = ({ imgUrl, gigTitle, startPrice, gigUrl }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleOpenGigMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseGigMenu = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: { lg: "230px", md: "230px", sm: "100%", xs: "100%" },
        boxShadow: theme.palette.shadow.shadow01,
        m: { lg: "2rem", md: "2rem" },
        mt: "2rem",
        ml: { lg: "0rem", md: "0rem" },
      }}>
      <img style={{ width: "100%", height: "142px" }} src={imgUrl} alt='Gig' />
      <Typography
        variant={"h3"}
        sx={{
          fontSize: "1rem",
          p: "1rem 8px",
          fontWeight: "500",
          lineHeight: "1.5rem",
          cursor: "pointer",
          color: theme.palette.text.primary,
          "&:hover": {
            color: theme.palette.primary.main,
          },
        }}>
        {gigTitle}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          m: "3px 0",
          p: "0 8px",
        }}>
        <MoreHoriz
          onClick={handleOpenGigMenu}
          sx={{
            color: theme.palette.grey[400],
            fontSize: "1.8rem",
            cursor: "pointer",
            "&:hover": { color: theme.palette.grey[100] },
          }}
        />
        <span
          style={{
            color: theme.palette.text.primary,
            padding: "2px 8px",
            borderRadius: "19px",
            fontSize: "11px",
            fontWeight: "500",
            background: theme.palette.primary.main,
          }}>
          Starting at
          <span
            style={{ fontWeight: "700", fontSize: "15px", marginLeft: "5px" }}>
            {startPrice}
          </span>
        </span>
        <StyledMenu
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleCloseGigMenu}>
          <MenuItem onClick={handleCloseGigMenu}>
            <Box sx={{ display: "flex", alignItem: "center" }}>
              <Visibility
                sx={{ fontSize: "1.2rem", color: "#999", p: "8px 3px" }}
              />
              <span
                style={{ fontFamily: "Inter", padding: 0, marginTop: "6px" }}>
                Preview
              </span>
            </Box>
          </MenuItem>
          <MenuItem onClick={handleCloseGigMenu}>
            <Box sx={{ display: "flex", alignItem: "center" }}>
              <Pause sx={{ fontSize: "1.2rem", color: "#999", p: "8px 3px" }} />
              <span
                style={{ fontFamily: "Inter", padding: 0, marginTop: "6px" }}>
                Pause
              </span>
            </Box>
          </MenuItem>
          <MenuItem onClick={handleCloseGigMenu}>
            <Box sx={{ display: "flex", alignItem: "center" }}>
              <Edit sx={{ fontSize: "1.2rem", color: "#999", p: "8px 3px" }} />
              <span
                style={{ fontFamily: "Inter", padding: 0, marginTop: "6px" }}>
                Edit
              </span>
            </Box>
          </MenuItem>
          <MenuItem onClick={handleCloseGigMenu}>
            <Box sx={{ display: "flex", alignItem: "center" }}>
              <PieChart
                sx={{
                  fontSize: "1.2rem",
                  color: theme.palette.grey[100],
                  p: "8px 3px",
                }}
              />
              <span
                style={{ fontFamily: "Inter", padding: 0, marginTop: "6px" }}>
                Statistics
              </span>
            </Box>
          </MenuItem>

          <Divider />
          <MenuItem onClick={handleCloseGigMenu}>
            <Box sx={{ display: "flex", alignItem: "center" }}>
              <Settings
                sx={{ fontSize: "1.2rem", color: "#999", p: "8px 3px" }}
              />
              <span
                style={{ fontFamily: "Inter", padding: 0, marginTop: "6px" }}>
                Advance
              </span>
            </Box>
          </MenuItem>
        </StyledMenu>
      </Box>
    </Box>
  );
};

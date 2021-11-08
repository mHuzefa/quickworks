import { useTheme } from "@emotion/react";
import {
  Alarm,
  GpsFixed,
  LockClock,
  Person,
  Schedule,
  ScheduleSend,
  Star,
} from "@mui/icons-material";
import { Avatar, Button, Divider, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import TabPanel from "../components/TabPanel";

const SellerProfile = () => {
  const [value, setValue] = useState(0);
  const tabHandler = (event, newValue) => setValue(newValue);
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", flexDirection: { lg: "row" }, m: "3rem" }}>
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
          <Avatar sx={{ width: "8rem", height: "8rem" }}>H</Avatar>
          <Typography
            sx={{
              color: theme.palette.neutral.black01,
              fontSize: "1.3rem",
              mt: "1.5rem",
            }}
            variant={"h2"}>
            Jimcarry02
          </Typography>
          <p
            style={{
              color: theme.palette.neutral.black02,

              margin: "4px 0",
            }}>
            UI UX Designer & Frontend Developer
          </p>
          <span
            style={{
              border: `1px solid ${theme.palette.secondary.main}`,
              borderRadius: "50px",
              fontSize: "13px",
              color: theme.palette.secondary.main,
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
                sx={{ fontSize: "1.2rem", color: theme.palette.secondary.main }}
              />
              <Star
                sx={{ fontSize: "1.2rem", color: theme.palette.secondary.main }}
              />
              <Star
                sx={{ fontSize: "1.2rem", color: theme.palette.secondary.main }}
              />
              <Star
                sx={{ fontSize: "1.2rem", color: theme.palette.secondary.main }}
              />
              <Star
                sx={{ fontSize: "1.2rem", color: theme.palette.secondary.main }}
              />
            </Box>
            <span
              style={{
                color: theme.palette.neutral.blackLight,
                fontWeight: "800",
                marginRight: "4px",
              }}>
              4.8
            </span>
            <span
              style={{
                color: theme.palette.neutral.gray,
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
                  color: theme.palette.primary.main,
                }}>
                Description
              </Typography>
              <Button
                disableElevation
                disableRipple
                disableTouchRipple
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
                Edit Description
              </Button>
            </Box>
            <Box
              sx={{
                color: theme.palette.neutral.blackLight,
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
          <Box>Languages</Box>
          <Divider />
          <Box>Skills</Box>
          <Divider />
          <Box>Education</Box>
          <Divider />
          <Box>Certification</Box>
        </Box>
      </Box>
      <Box>
        <Box>
          <Tabs value={value} onChange={tabHandler}>
            <Tab label={"ACTIVE GIGS"} />
            <Tab label={"PAUSED"} />
          </Tabs>
          <TabPanel value={value} index={0}>
            Gigs
          </TabPanel>
          <TabPanel value={value} index={1}>
            Paused
          </TabPanel>
        </Box>
        <Box>Reviews</Box>
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
            color: theme.palette.neutral.blackLight,
          }}
        />
        <span
          style={{
            fontSize: "15px",
            color: theme.palette.neutral.blackLight,
          }}>
          {text}
        </span>
      </Box>
      <b
        style={{
          color: theme.palette.neutral.blackLight,
          fontWeight: "700",
          fontSize: "15px",
        }}>
        {detail}
      </b>
    </Box>
  );
};

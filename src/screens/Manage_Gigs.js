import { useTheme } from "@emotion/react";
import { ExpandMore } from "@mui/icons-material";
import {

  Typography,
  Tab,
  Tabs,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Switch,
  FormControlLabel,
  Button,
  IconButton,
  Checkbox,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

import TabPanel from "../components/TabPanel";

const manageTabs = [
  {
    index: 0,
    tabName: "Active",
    title: "Active Gigs",
    gigs: [
      {
        gigUrl: "",
        gigImageUrl:
          "https://fiverr-res.cloudinary.com/images/t_small_thumbnail,q_auto,f_auto/gigs/226627095/original/3f52a77bc26c03f4bc4362d89aa7789443ad9467/design-shopify-store-as-a-shopify-expert.png",
        gigTitle: "design shopify store as a shopify expert",
        impressions: "504",
        clicks: "5",
        orders: "2",
        cancellation: "0%",
      },
      {
        gigUrl: "",
        gigImageUrl:
          "https://fiverr-res.cloudinary.com/images/t_small_thumbnail,q_auto,f_auto/gigs/223857209/original/ce22480d72ff6a83e1c87552426b8fe86f70d0bb/do-ui-ux-design-for-mobile-and-website.png",
        gigTitle: "do ui ux design for mobile and website",
        impressions: "4204",
        clicks: "166",
        orders: "15",
        cancellation: "0%",
      },
      {
        gigUrl: "",
        gigImageUrl:
          "https://fiverr-res.cloudinary.com/images/t_small_thumbnail,q_auto,f_auto/gigs/226627095/original/3f52a77bc26c03f4bc4362d89aa7789443ad9467/design-shopify-store-as-a-shopify-expert.png",
        gigTitle: "design shopify store as a shopify expert",
        impressions: "504",
        clicks: "5",
        orders: "2",
        cancellation: "0%",
      },
      {
        gigUrl: "",
        gigImageUrl:
          "https://fiverr-res.cloudinary.com/images/t_small_thumbnail,q_auto,f_auto/gigs/226627095/original/3f52a77bc26c03f4bc4362d89aa7789443ad9467/design-shopify-store-as-a-shopify-expert.png",
        gigTitle: "design shopify store as a shopify expert",
        impressions: "504",
        clicks: "5",
        orders: "2",
        cancellation: "0%",
      },
    ],
  },
  {
    index: 1,
    tabName: "Pending Approval",
    title: "Gig Pending Approval",
    gigs: [],
  },
  {
    index: 2,
    tabName: "Requires Modification",
    title: "GIGS THAT REQUIRE MODIFICATIONS",
    gigs: [],
  },
  {
    index: 3,
    tabName: "Draft",
    title: "DRAFT GIGS",
    gigs: [],
  },
  {
    index: 4,
    tabName: "Denied",
    title: "Denied Gigs",
    gigs: [],
  },
  {
    index: 5,
    tabName: "Paused",
    title: "PUASED GIGS",
    gigs: [],
  },
];

const Gigs = () => {
  const [value, setValue] = useState(0);
  const [allGigChecked, setAllGigChecked] = useState(false);
  const tabChanged = (e, newValue) => setValue(newValue);
  const theme = useTheme();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          m: "2rem",
        }}>
        <Typography
          sx={{ fontSize: "2.1rem", color: theme.palette.text.primary }}
          variant='h1'>
          Gigs
        </Typography>
        <Box>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label={"Accepting Custom Offers"}
            labelPlacement='start'
            sx={{
              color: theme.palette.text.primary,
              fontSize: "14px",
              fontFamily: "inherit",
            }}
          />
        </Box>
      </Box>
      <Box sx={{ margin: "2rem" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <Tabs value={value} onChange={tabChanged}>
            {manageTabs.map((tab) => {
              return (
                <Tab
                  sx={{
                    color: theme.palette.text.secondary,
                  }}
                  label={`${tab.tabName} ${
                    tab.gigs.length !== 0 ? tab.gigs.length : ""
                  }`}
                />
              );
            })}
          </Tabs>
          <Button
            disableElevation
            disableRipple
            disableFocusRipple
            sx={{
              color: theme.palette.background.default,
              fontWeight: "700",
              "&:hover": {
                background: theme.palette.primary.main,
                boxShadow: theme.palette.shadow.shadow01,
              },
            }}
            variant='contained'>
            Create new Gig
          </Button>
        </Box>

        <Divider />
        {manageTabs.map((tabPanel) => {
          return (
            <TabPanel value={value} index={tabPanel.index}>
              <Box
                sx={{
                  boxShadow: theme.palette.shadow.shadow01,
                }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    m: "0 1.5rem",
                    p: "1rem 0",
                  }}>
                  <Box
                    component='span'
                    sx={{
                      color: theme.palette.text.secondary,
                      fontWeight: "500",
                      fontSize: "1.2rem",
                    }}>
                    {tabPanel.title}
                  </Box>
                  <Button
                    sx={{
                      color: theme.palette.text.secondary,
                      fontSize: "12px",
                      textTransform: "uppercase",
                      border: `1px solid ${theme.palette.text.secondary}`,
                    }}>
                    LAST 30 DAYS
                  </Button>
                </Box>
                <Divider />
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            size='small'
                            checked={allGigChecked}
                            onChange={() => setAllGigChecked(!allGigChecked)}
                          />
                        </TableCell>
                        <TableCell
                          sx={{
                            color: theme.palette.neutral.gray01,
                            fontWeight: "700",
                            fontSize: "12px",
                          }}>
                          GIGS
                        </TableCell>
                        <TableCell
                          sx={{
                            color: theme.palette.neutral.gray01,
                            fontWeight: "700",
                            fontSize: "12px",
                          }}>
                          IMPRESSIONS
                        </TableCell>
                        <TableCell
                          sx={{
                            color: theme.palette.neutral.gray01,
                            fontWeight: "700",
                            fontSize: "12px",
                          }}>
                          CLICKS
                        </TableCell>

                        {tabPanel.tabName === "Completed" ||
                        tabPanel.tabName === "Delivered" ? (
                          <TableCell
                            sx={{
                              color: theme.palette.neutral.gray01,
                              fontWeight: "700",
                              fontSize: "12px",
                              textTransform: "uppercase",
                            }}>
                            {"Delivered AT"}
                          </TableCell>
                        ) : (
                          ""
                        )}

                        <TableCell
                          sx={{
                            color: theme.palette.neutral.gray01,
                            fontWeight: "700",
                            fontSize: "12px",
                          }}>
                          ORDERS
                        </TableCell>
                        <TableCell
                          sx={{
                            color: theme.palette.neutral.gray01,
                            fontWeight: "700",
                            fontSize: "12px",
                          }}>
                          CANCELLATIONS
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {tabPanel.gigs.map((gig) => {
                        return (
                          <TableRow key={gig.gigTitle}>
                            <TableCell>
                              <Checkbox size='small' checked={allGigChecked} />
                            </TableCell>
                            <TableCell
                              sx={{ color: theme.palette.text.secondary }}>
                              <Box
                                sx={{ display: "flex", alignItems: "center" }}>
                                <Box
                                  component='img'
                                  sx={{
                                    borderRadius: "3px",
                                    mr: "1rem",
                                    width: "45px",
                                    height: "32px",
                                  }}
                                  src={gig.gigImageUrl}></Box>
                                <Box component='span'>{gig.gigTitle}</Box>
                              </Box>
                            </TableCell>
                            <TableCell>{gig.impressions}</TableCell>
                            <TableCell>{gig.clicks}</TableCell>

                            <TableCell> {gig.orders}</TableCell>
                            <TableCell>{gig.cancellation}</TableCell>
                            <TableCell>
                              <IconButton key={gig.gigTitle}>
                                <ExpandMore />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </TabPanel>
          );
        })}
      </Box>
    </Box>
  );
};

export default Gigs;

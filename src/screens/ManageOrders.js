import { useTheme } from "@emotion/react";
import { Search, Star } from "@mui/icons-material";
import {
  Input,
  Paper,
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
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

import TabPanel from "./../components/TabPanel";

const manageTabs = [
  {
    index: 0,
    tabName: "Priority",
    title: "Priority Orders",
    orders: [],
  },
  {
    index: 1,
    tabName: "Active",
    title: "Active Orders",
    orders: [],
  },
  {
    index: 2,
    tabName: "Late",
    title: "Late Orders",
    orders: [],
  },
  {
    index: 3,
    tabName: "Delivered",
    title: "Delivered Orders",
    orders: [],
  },
  {
    index: 4,
    tabName: "Completed",
    title: "Completed Orders",
    orders: [
      {
        orderId: "212e38938F82",
        status: "completed",
        gig: "do web design and programming",
        ordered: "custom",
        buyer: "marudevil",
        dueOn: "Oct 27",
        delivered: "Nov 03",
        price: "$39",
      },
      {
        orderId: "212e38938F82",
        status: "completed",
        gig: "do web design and programming",
        ordered: "custom",
        buyer: "marudevil",
        dueOn: "Oct 27",
        delivered: "Nov 03",
        price: "$39",
      },
    ],
  },
  {
    index: 5,
    tabName: "Cancelled",
    title: "Cancelled Orders",
    orders: [
      {
        orderId: "212e38938F82",
        status: "Cancelled",
        gig: "do web design and programming",
        ordered: "custom",
        buyer: "marudevil",
        dueOn: "Oct 27",
        delivered: "Nov 03",
        price: "$39",
      },
    ],
  },
];

const ManageOrders = () => {
  const [value, setValue] = useState(0);
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
          Manage Orders
        </Typography>
        <Box>
          <Paper elevation={0}>
            <Input
              type='text'
              placeholder={"Search Orders"}
              sx={{
                fontSize: "13px",
                color: theme.palette.text.primary,
                borderBottomColor: theme.palette.neutral.gray03,
              }}
            />
            <Search sx={{ fontSize: "16px", color: theme.palette.grey[400] }} />
          </Paper>
        </Box>
      </Box>
      <Box sx={{ margin: "2rem" }}>
        <Tabs value={value} onChange={tabChanged}>
          {manageTabs.map((tab) => {
            return (
              <Tab
                sx={{
                  color: theme.palette.text.secondary,
                }}
                label={`${tab.tabName} ${
                  tab.orders.length !== 0 ? tab.orders.length : ""
                }`}
              />
            );
          })}
        </Tabs>
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
                    color: theme.palette.text.secondary,
                    fontWeight: "500",
                    fontSize: "1.2rem",
                    m: "1rem",
                    pt: "1rem",
                  }}>
                  {tabPanel.title}
                </Box>
                <Divider />
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell
                          sx={{
                            color: theme.palette.neutral.gray01,
                            fontWeight: "700",
                            fontSize: "12px",
                          }}>
                          BUYER
                        </TableCell>
                        <TableCell
                          sx={{
                            color: theme.palette.neutral.gray01,
                            fontWeight: "700",
                            fontSize: "12px",
                          }}>
                          GIG
                        </TableCell>
                        <TableCell
                          sx={{
                            color: theme.palette.neutral.gray01,
                            fontWeight: "700",
                            fontSize: "12px",
                          }}>
                          DUE ON
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
                          TOTAL
                        </TableCell>
                        <TableCell
                          sx={{
                            color: theme.palette.neutral.gray01,
                            fontWeight: "700",
                            fontSize: "12px",
                          }}>
                          STATUS
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {tabPanel.orders.map((order) => {
                        return (
                          <TableRow key={order.orderId}>
                            <TableCell>{<Star />}</TableCell>
                            <TableCell
                              sx={{ color: theme.palette.text.secondary }}>
                              {order.buyer}
                            </TableCell>
                            <TableCell>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "3px 5px",
                                  borderRadius: "5px",
                                  marginRight: "4px",
                                  textTransform: "uppercase",
                                  fontSize: "10px",
                                  fontWeight: "700",
                                  color: theme.palette.text.secondary,
                                  background: theme.palette.info.main,
                                }}>
                                {order.ordered === "custom"
                                  ? "CUSTOM ORDER"
                                  : ""}
                              </span>
                              {order.gig}
                            </TableCell>
                            <TableCell>{order.dueOn}</TableCell>

                            {tabPanel.tabName === "Completed" ||
                            tabPanel.tabName === "Delivered" ? (
                              <TableCell>{order.delivered}</TableCell>
                            ) : (
                              ""
                            )}
                            <TableCell>{order.price}</TableCell>
                            <TableCell>
                              <Box
                                sx={{
                                  display: "inline-block",
                                  p: "3px 5px",
                                  borderRadius: "5px",
                                  textTransform: "uppercase",
                                  fontSize: "10px",
                                  fontWeight: "700",
                                  color: theme.palette.text.primary,
                                  background: `${
                                    order.status === "completed"
                                      ? theme.palette.primary.main
                                      : theme.palette.neutral.gray01
                                  }`,
                                }}>
                                {order.status}
                              </Box>
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

export default ManageOrders;

import { useTheme } from "@emotion/react";
import { AnchorRounded } from "@mui/icons-material";
import {
  Input,
  Tab,
  Tabs,
  Typography,
  Divider,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import MenuButton from "../components/MenuButton";
import StyledMenu from "../components/StyledMenu";

const requests = [
  {
    id: 0,
    request:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, beatae.",
    offers: 10,
    duration: "23 Days",
    budget: 122,
    buyer: "yousaf",
    date: "Oct 27, 2021",
  },
  {
    id: 1,
    request:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, beatae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, beatae.",
    offers: 10,
    duration: "3 Days",
    budget: 12,
    buyer: "haris",
    date: "Oct 27, 2021",
  },
];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && props.children}
    </div>
  );
}

const BuyerRequest = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [rowBackground, setRowBackground] = useState("none");
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const open = Boolean(anchorEl);
  const menuOpenHandle = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const menuCloseHandle = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          m: "2rem",
        }}>
        <Typography variant='h1' sx={{ fontSize: "2.5rem" }}>
          Buyer Requests
        </Typography>
        <Input type='text' placeholder={"search requests"} />
      </Box>
      <Box
        sx={{ m: "0 2rem", display: "flex", justifyContent: "space-between" }}>
        <Tabs sx={{ m: 0 }} value={value} onChange={handleChange}>
          <Tab label={"Active"} />
          <Tab label={"Sent Offers"} />
        </Tabs>
        <span
          style={{
            color: theme.palette.neutral.blackLight,
            fontSize: "1rem",
          }}>
          10 Offers left today
        </span>
      </Box>
      <Divider />
      <Box
        sx={{ boxShadow: theme.palette.shadow.shadow01, margin: "1rem 2rem" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: "2rem",
            mt: "2rem",
          }}>
          <Typography>Buyer Requests</Typography>
          <MenuButton
            width={"12rem"}
            onClick={menuOpenHandle}
            name={"All Subcategories"}
          />
          <StyledMenu open={open} onClose={menuCloseHandle} anchorEl={anchorEl}>
            <MenuItem onClick={menuCloseHandle}>Hello 1</MenuItem>
          </StyledMenu>
        </Box>
        <Divider />

        <TabPanel value={value} index={0}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      color: theme.palette.neutral.gray,
                      fontWeight: "700",
                      fontSize: "12px",
                    }}>
                    DATE
                  </TableCell>
                  <TableCell
                    sx={{
                      color: theme.palette.neutral.gray,
                      fontWeight: "700",
                      fontSize: "12px",
                    }}
                    align='left'>
                    BUYER
                  </TableCell>
                  <TableCell
                    sx={{
                      color: theme.palette.neutral.gray,
                      fontWeight: "700",
                      fontSize: "12px",
                      width: "40rem",
                    }}
                    align='left'>
                    REQUESTS
                  </TableCell>
                  <TableCell
                    sx={{
                      color: theme.palette.neutral.gray,
                      fontWeight: "700",
                      fontSize: "12px",
                    }}
                    align='left'>
                    OFFERS
                  </TableCell>
                  <TableCell
                    sx={{
                      color: theme.palette.neutral.gray,
                      fontWeight: "700",
                      fontSize: "12px",
                    }}
                    align='left'>
                    DURATION
                  </TableCell>
                  <TableCell
                    sx={{
                      color: theme.palette.neutral.gray,
                      fontWeight: "700",
                      fontSize: "12px",
                    }}
                    align='left'>
                    BUDGET
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {requests.map((req, index) => {
                  return (
                    <TableRow
                      hover
                      onMouseOver={(event) => console.log(event)}
                      onMouse
                      onClick={() => console.log(index)}
                      style={{
                        height: "8rem",
                        background: rowBackground,
                        "&:hover": {
                          background: "#000",
                        },
                      }}>
                      <TableCell sx={{ color: theme.palette.neutral.black03 }}>
                        {req.date}
                      </TableCell>
                      <TableCell sx={{ color: theme.palette.neutral.black03 }}>
                        {req.buyer}
                      </TableCell>
                      <TableCell sx={{ color: theme.palette.neutral.black03 }}>
                        {req.request}
                      </TableCell>
                      <TableCell sx={{ color: theme.palette.neutral.black03 }}>
                        {req.offers}
                      </TableCell>
                      <TableCell sx={{ color: theme.palette.neutral.black03 }}>
                        {req.duration}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: theme.palette.neutral.black03,
                        }}>
                        <Box>$ {req.budget}</Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </Box>
    </Box>
  );
};

export default BuyerRequest;

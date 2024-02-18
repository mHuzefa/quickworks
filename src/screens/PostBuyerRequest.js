import {
  Typography,
  TextareaAutosize,
  Paper,
  Button,
  MenuItem,
  Divider,
  ButtonGroup,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { AttachmentOutlined, Edit } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import StyledMenu from "./../components/StyledMenu";
import MenuButton from "../components/MenuButton";
const categories = [
  {
    id: 10,
    category: "Programming & Tech",
    subcategories: [
      {
        id: "1",
        subcategory: "WordPress",
      },
      {
        id: "2",
        subcategory: "Game Development",
      },
      {
        id: "3",
        subcategory: "Mobile App",
      },
      {
        id: "4",
        subcategory: "Website Development",
      },
    ],
  },
  {
    id: 1,
    category: "Digital Marketing",
    subcategories: [
      {
        id: "1",
        subcategory: "Social Media Marketting",
      },
      {
        id: "2",
        subcategory: "Local SEO",
      },
      {
        id: "3",
        subcategory: "Mobile Advertisement",
      },
      {
        id: "4",
        subcategory: "Ecommerece Marketting",
      },
    ],
  },
];

const PostBuyerRequest = () => {
  const [fileCount, setFileCount] = useState({ file: 0, display: "none" });
  const [anchorCategory, setAnchorCategory] = React.useState(null);
  const [anchorSubcategory, setAnchorSubcategory] = React.useState(null);
  const [categoryIndex, setCategoryIndex] = useState(null);
  const openCategory = Boolean(anchorCategory);
  const openSubcategory = Boolean(anchorSubcategory);
  const handleOpenCategoryMenu = (event) => {
    setAnchorCategory(event.currentTarget);
  };
  const handleCloseCategoryMenu = () => {
    setAnchorCategory(null);
  };
  const openSubcategoryMenu = (event) => {
    setAnchorSubcategory(event.currentTarget);
  };
  const closeSubcatgoryMenu = () => {
    setAnchorSubcategory(null);
  };
  const theme = useTheme();
  return (
    <Box
      sx={{
        ml: "2.5rem",
        mr: "2.5rem",
        mb: "6rem",
        position: "relative",
        fontFamily: "inherit",
      }}>
      <Typography
        variant='h2'
        sx={{
          fontSize: "1.7rem",
          fontWeight: "700",
          color: theme.palette.text.primary,
          mt: "2rem",
        }}>
        What services are you looking for?
      </Typography>
      <Box
        sx={{
          mt: "2rem",
          width: { lg: "40rem" },
          boxShadow: theme.palette.shadow.shadow01,
          overflow: "auto",
          borderRadius: theme.palette.common.radius,
        }}>
        <Box sx={{ padding: "2rem 1.5rem" }}>
          <Typography
            sx={{ color: theme.palette.text.secondary, fontWeight: "600" }}>
            Describe the service you're looking to purchase - please be as
            detailed as possible:
          </Typography>
          <Paper
            elevation={0}
            sx={{
              mt: "1rem",
              border: `1px solid ${theme.palette.grey[400]}`,
              borderRadius: "1px",
              width: "100%",
            }}>
            <TextareaAutosize
              style={{
                width: "99%",
                outline: "none",
                background: theme.palette.background.default,
                color: theme.palette.text.primary,
                fontFamily: "Inter",
                border: "none",
                resize: "none",
              }}
              minRows={4}
              maxRows={6}
              maxLength={2500}
              placeholder={"I am looking for..."}
            />
          </Paper>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <label htmlFor='contained-button-file'>
              <input
                style={{ display: "none" }}
                id='contained-button-file'
                multiple
                type='file'
                onChange={(event) =>
                  setFileCount({
                    file: event.target.files.length,
                    display: "inline-block",
                  })
                }
              />
              <Button
                variant='contained'
                component='span'
                disableElevation
                disableRipple
                endIcon={
                  <AttachmentOutlined sx={{ transform: "rotate(-45deg)" }} />
                }
                sx={{
                  background: theme.palette.neutral.gray03,
                  color: theme.palette.neutral.blackLight,
                  fontWeight: "700",
                  padding: "8px 10px",
                  mt: "1rem",
                  "&:hover": {
                    background: theme.palette.grey[100],
                  },
                }}>
                Attach Files
              </Button>
              <span className='selected_file'></span>
            </label>
            <span
              style={{
                display: fileCount.display,
                fontSize: "1rem",
                color: theme.palette.text.tertiary,
                fontWeight: "700",
              }}>
              {fileCount.file} attachments
            </span>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ padding: "2rem 1.5rem" }}>
          <Typography
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: "700",
              mb: "10px",
            }}>
            Choose a category:
          </Typography>
          <Box sx={{ display: "flex", mt: "1.5rem" }}>
            <MenuButton name={"Select..."} onClick={handleOpenCategoryMenu} />
            <MenuButton
              onClick={openSubcategoryMenu}
              disabled={categoryIndex ? false : true}
              name={"Select subcategory"}
            />
            <StyledMenu
              open={openCategory}
              anchorEl={anchorCategory}
              onClick={handleCloseCategoryMenu}>
              {categories.map((category, index) => {
                return (
                  <MenuItem
                    disableRipple
                    disableTouchRipple
                    onClick={() => {
                      setCategoryIndex(category.id);
                      setAnchorCategory(null);
                    }}
                    id={category.id}>
                    {category.category}
                  </MenuItem>
                );
              })}
            </StyledMenu>
            {categoryIndex ? (
              <StyledMenu
                anchorEl={anchorSubcategory}
                open={openSubcategory}
                onClose={closeSubcatgoryMenu}>
                {categories
                  .find((categoryFind) => categoryFind.id === categoryIndex)
                  .subcategories.map((subcategory) => {
                    return (
                      <MenuItem
                        onClick={closeSubcatgoryMenu}
                        id={subcategory.id}>
                        {subcategory.subcategory}
                      </MenuItem>
                    );
                  })}
              </StyledMenu>
            ) : (
              <Box></Box>
            )}
          </Box>
        </Box>
        <Divider />
        <Box sx={{ padding: "1rem 1.5rem" }}>
          <Typography
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: "700",
              mb: "10px",
            }}>
            Once you place your order, when would you like your service
            delivered?
          </Typography>
          <ButtonGroup
            style={{
              marginTop: "1.5rem",
              color: theme.palette.text.tertiary,
              borderColor: theme.palette.text.tertiary,
            }}>
            <Button
              sx={{
                fontWeight: "700",
                color: theme.palette.text.tertiary,
                borderColor: theme.palette.text.tertiary,
              }}>
              24 Hours
            </Button>
            <Button
              sx={{
                fontWeight: "700",
                color: theme.palette.text.tertiary,
                borderColor: theme.palette.text.tertiary,
              }}>
              7 Days
            </Button>
            <Button
              sx={{
                fontWeight: "700",
                color: theme.palette.text.tertiary,
                borderColor: theme.palette.text.tertiary,
              }}>
              14 Days
            </Button>
            <Button
              sx={{
                fontWeight: "700",
                color: theme.palette.text.tertiary,
                borderColor: theme.palette.text.tertiary,
              }}>
              <Edit sx={{ fontSize: "1rem" }} />
              Other
            </Button>
          </ButtonGroup>
        </Box>
        <Divider />
        <Box sx={{ padding: "1rem 1.5rem" }}>
          <Typography
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: "700",
              mb: "10px",
            }}>
            What is your budget for this service?
          </Typography>
          <Paper
            elevation={0}
            sx={{
              width: "20rem",
              padding: "0 1rem",
              mt: "1.5rem",
              border: `1px solid ${theme.palette.neutral.gray03}`,
            }}>
            <span>$</span>
            <input
              type='number'
              style={{
                border: "none",
                height: "2.2rem",
                background: theme.palette.background.default,
                color: theme.palette.text.primary,
                outline: "none",
                paddingLeft: "10px",
                fontFamily: "inherit",
                width: "18rem",
              }}
            />
          </Paper>
        </Box>
        <Box
          sx={{
            display: "block",
            position: "relative",
            float: "right",
            clear: "right",
          }}>
          <Button
            sx={{
              background: theme.palette.primary.main,
              color: theme.palette.text.primary,
              fontWeight: "700",
              width: "10rem",
              padding: "8px 10px",

              m: "1rem",
              "&:hover": {
                background: theme.palette.primary.main,
              },
            }}>
            Submit Request
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PostBuyerRequest;

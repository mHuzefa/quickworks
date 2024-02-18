import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

import { categories } from "../../data/categories";
const Categories = () => {
  const theme = useTheme();
  const [display, setDisplay] = useState({
    show: "none",
    innerText: "",
    clientX: 0,
  });
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",

        p: "0rem 1.5rem",
        m: "10px 0",

        alignItems: "center",
      }}>
      {categories.map((category) => {
        return (
          <Box>
            <Box
              sx={{
                textDecoration: "none",
                color: theme.palette.secondary.main,
                fontWeight: "500",
                position: "relative",
                p: "7px 0",
                "&:hover": {
                  borderBottom: `3px solid ${theme.palette.primary.main}`,
                },
              }}
              key={category.categoryId}
              onMouseOver={(e) => {
                setDisplay({
                  show: "flex",
                  innerText: e.target.innerText,
                  clientX: e.clientX,
                });
              }}
              component={Link}
              to={category.url}>
              {category.title}
            </Box>
            <Box
              key={category.categoryId}
              sx={{
                position: "absolute",
                display: display.show,
                zIndex: 1000,
                top: "7.2rem",
                left: display.clientX > 900 ? display.clientX - 250 : "none",
              }}>
              <Box
                //onMouseLeave={() => setDisplay({ show: "none" })}
                onMouseMove={() => setDisplay({ show: "flex" })}
                sx={{
                  display: "grid",
                  gridAutoFlow: "column",
                  gridTemplateRows: "repeat(auto-fill, 3rem)",
                  alignItems: "flex-start",
                  p: 0,

                  flexWrap: "wrap",
                  background: theme.palette.background.default,
                  boxShadow:
                    category.title === display.innerText
                      ? theme.palette.shadow.shadow01
                      : " none",
                  minWidth: "220px",
                  height:
                    category.title === display.innerText ? "350px" : " 0px",
                }}>
                {category.subCategories.map((sub) => {
                  return category.title === display.innerText ? (
                    <span
                      style={{
                        listStyleType: "none",
                        color: theme.palette.text.secondary,
                        padding: "1rem",
                        flex: "auto",
                      }}>
                      <Box
                        component={Link}
                        to={sub.url}
                        sx={{
                          textDecoration: "none",
                          color: theme.palette.text.tertiary,
                          fontWeight: "400",
                        }}>
                        {sub.title}
                      </Box>
                    </span>
                  ) : (
                    <span></span>
                  );
                })}
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Categories;

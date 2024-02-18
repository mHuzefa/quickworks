import { useTheme } from "@emotion/react";
import React from "react";
import { Link } from "react-router-dom";
const LinkCard = ({ src, heading, subheading }) => {
  const theme = useTheme();
  return (
    <Link
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        alignItems: "center",
        width: "15rem",
        height: "25rem",
        margin: "1rem 2rem",
      }}>
      <img
        src={src}
        alt='Logo Design Service'
        style={{
          width: "inherit",
          borderRadius: "5px",
          marginBottom: "8px",
        }}
      />
      <p
        style={{
          margin: 0,
          padding: 0,
          outline: "none",
          fontWeight: 600,
          color: "#666",
        }}>
        {subheading}
      </p>
      <h3
        style={{
          margin: 0,
          padding: 0,
          outline: "none",
          color: theme.palette.primary.main,
        }}>
        {heading}
      </h3>
    </Link>
  );
};

export default LinkCard;

import { Box } from "@mui/system";
import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { currencies } from "../../data/currencies";
import { languages } from "../../data/languages";

const Header = () => {
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <Box>
      {isTabletOrMobile ? (
        <MobileHeader currencies={currencies} languages={languages} />
      ) : (
        <DesktopHeader currencies={currencies} languages={languages} />
      )}
    </Box>
  );
};

export default React.forwardRef(Header);

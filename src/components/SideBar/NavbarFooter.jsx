import { Box } from "@chakra-ui/react";
import Home from "./Home";
import Explore from "./Explore";

export default function NavbarFooter() {
  return (
    <Box
      borderTop={"1px solid"}
      borderColor={"whiteAlpha.300"}
      position={"static"}
      w={"100%"}
      bg={"orange"}
    >
      <Home />
      <Explore />
    </Box>
  );
}

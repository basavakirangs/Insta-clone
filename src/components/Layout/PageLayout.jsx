import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../SideBar/Sidebar";
import { useLocation } from "react-router-dom";

export default function PageLayout({ children }) {
  const { pathname } = useLocation();
  return (
    <Flex justifyContent={pathname !== "/auth" ? "none" : "center"}>
      {pathname !== "/auth" ? (
        <Box w={{ base: "70px", lg: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
      <Box w={{ base: "calc(100%-70px", md: "calc(100%-240px" }} mx={"auto"}>
        {children}
      </Box>
    </Flex>
  );
}

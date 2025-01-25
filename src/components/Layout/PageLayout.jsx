import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../SideBar/Sidebar";
import { useLocation } from "react-router-dom";
import NavbarHead from "../SideBar/NavbarHead";
import NavbarFooter from "../SideBar/NavbarFooter";

export default function PageLayout({ children }) {
  const { pathname } = useLocation();
  return (
    <Flex
      justifyContent={pathname !== "/auth" ? "none" : "center"}
      flexDir={{ base: "column", md: "row" }}
    >
      {pathname !== "/auth" ? (
        <>
          <Box
            w={{ base: "70px", lg: "240px" }}
            display={{ base: "none", md: "block" }}
          >
            <Sidebar />
          </Box>
          <Box
            h={{ base: "70px", md: "240px" }}
            display={{ base: "block", md: "none" }}
          >
            <NavbarHead />
          </Box>
        </>
      ) : null}
      <Box
        w={{ base: "calc(100% - 70px)", lg: "calc(100% - 240px)" }}
        h={{ base: "calc(100% - 70px)", lg: "calc(100% - 240px)" }}
        // mx={"auto"}
        // bg="aqua"
        p={5}
        // w="full"
        // overflowY={"scroll"}
      >
        {children}
      </Box>
      <Box
        h={{ base: "70px", md: "240px" }}
        display={{ base: "block", md: "none" }}
      >
        <NavbarFooter />
      </Box>
    </Flex>
  );
}

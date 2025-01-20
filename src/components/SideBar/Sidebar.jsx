import { Box, Flex, Image } from "@chakra-ui/react";
import SidebarItems from "./SidebarItems";
import { FaInstagram } from "react-icons/fa";

export default function Sidebar() {
  return (
    <Box
      borderRight={"1px solid"}
      borderColor={"WhiteAlpha.300"}
      h={"100vh"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={{ base: "center", lg: "flex-start" }}
        gap={6}
      >
        <Box display={{ base: "none", lg: "block" }}>
          <Image src="/Instagram.png" alt="Instagram " h={"30px"} m={2} />
        </Box>
        <Box display={{ base: "block", lg: "none" }} mb={8}>
          <FaInstagram size={24} />
        </Box>
        <SidebarItems />
      </Flex>
    </Box>
  );
}

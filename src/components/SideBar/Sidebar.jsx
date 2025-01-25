import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import SidebarItems from "./SidebarItems";
import { InstagramLogo, InstagramMobileLogo } from "../../assets/constants";
import More from "./More";

export default function Sidebar() {
  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"WhiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
      minW={{ base: "70", lg: "240" }}
    >
      <Flex flexDir={"column"} gap={6} w={"full"} h={"full"}>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", lg: "block" }}
          cursor="pointer"
        >
          <InstagramLogo />
        </Link>
        <Link
          to={"/"}
          as={RouterLink}
          p={2}
          display={{ base: "block", lg: "none" }}
          borderRadius={6}
          _hover={{
            bg: "whiteAlpha.200",
          }}
          w={10}
          cursor="pointer"
        >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          <SidebarItems />
        </Flex>
        <Flex direction={"column"} gap={5} cursor={"pointer"} mt={"auto"}>
          <More />
        </Flex>
      </Flex>
    </Box>
  );
}

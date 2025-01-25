import { Box, Input, Flex } from "@chakra-ui/react";
import {
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/constants";

export default function NavbarHead() {
  return (
    <Flex
      borderBottom={"1px solid"}
      borderColor={"whiteAlpha.300"}
      position={"fixed"}
      w={"100%"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={10}
      bg="black"
    >
      <Box display={{ base: "block", sm: "none" }}>
        <InstagramMobileLogo />
      </Box>
      <Box display={{ base: "none", sm: "block" }}>
        <InstagramLogo />
      </Box>
      <Box>
        <Input type="text" placeholder="Search" />
      </Box>
      <NotificationsLogo />
    </Flex>
  );
}

import { Avatar, Box, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Profile() {
  return (
    <Tooltip
      hasArrow
      label={"Profile"}
      placement="right"
      ml={1}
      openDelay={500}
      display={{ base: "block", lg: "none" }}
    >
      <Link
        display={"flex"}
        to={"/username"}
        as={RouterLink}
        alignItems={"center"}
        gap={4}
        borderRadius={6}
        p={2}
        w={{ base: 10, lg: "full" }}
        justifyContent={{ base: "center", lg: "flex-start" }}
        _hover={{ bg: "gray.700", borderRadius: 4, textDecoration: "none" }}
      >
        <Avatar src="" size={"xs"} />
        <Box display={{ base: "none", lg: "block" }}>Profile</Box>
      </Link>
    </Tooltip>
  );
}

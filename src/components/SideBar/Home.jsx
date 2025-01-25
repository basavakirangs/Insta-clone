import { Box, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";

export default function Home() {
  return (
    <Tooltip
      hasArrow
      label={"Home"}
      placement="right"
      ml={1}
      openDelay={500}
      display={{ base: "block", lg: "none" }}
    >
      <Link
        display={"flex"}
        to={"/"}
        as={RouterLink}
        alignItems={"center"}
        gap={4}
        borderRadius={6}
        p={2}
        w={{ base: 10, lg: "full" }}
        justifyContent={{ base: "center", lg: "flex-start" }}
        _hover={{ bg: "gray.700", borderRadius: 4, textDecoration: "none" }}
      >
        <GoHomeFill size={24} />
        <Box display={{ base: "none", lg: "block" }}>Home</Box>
      </Link>
    </Tooltip>
  );
}

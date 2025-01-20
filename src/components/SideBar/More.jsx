import { Box, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

export default function More() {
  return (
    <Tooltip
      hasArrow
      label={"More"}
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
      >
        <AiOutlineMenu size={24} />
        <Box display={{ base: "none", lg: "block" }}>More</Box>
      </Link>
    </Tooltip>
  );
}

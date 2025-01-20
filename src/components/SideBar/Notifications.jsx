import { Box, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { LuHeart } from "react-icons/lu";
import { NotificationsLogo } from "../../assets/constants";

export default function Notifications() {
  return (
    <Tooltip
      hasArrow
      label={"Notifications"}
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
        <NotificationsLogo size={24} />
        <Box display={{ base: "none", lg: "block" }}>Notifications</Box>
      </Link>
    </Tooltip>
  );
}

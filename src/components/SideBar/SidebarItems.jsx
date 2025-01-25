import { Flex } from "@chakra-ui/react";
import Home from "./Home";
import Search from "./search";
import Explore from "./Explore";
import Reels from "./Reels";
import Messages from "./Messages";
import Notifications from "./Notifications";
import Create from "./Create";
import Profile from "./Profile";

export default function SidebarItems() {
  return (
    <Flex
      alignItems={{ base: "center", lg: "flex-start" }}
      justifyContent={"space-between"}
      flexDir={"column"}
      gap={"4"}
    >
      <Home />
      <Search />
      <Explore />
      <Reels />
      <Messages />
      <Notifications />
      <Create />
      <Profile />
    </Flex>
  );
}

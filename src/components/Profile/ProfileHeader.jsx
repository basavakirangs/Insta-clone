import { Avatar, AvatarGroup, Flex, Text, Box, Button } from "@chakra-ui/react";
import { IoIosSettings } from "react-icons/io";

export default function ProfileHeader() {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      w={"100%"}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        // justifySelf={"center"}
        // alignSelf={"flex-start"}
        // mx={"auto"}
      >
        <Avatar src="" alt={"user profile pic"} />
      </AvatarGroup>
      <Flex
        direction={"column"}
        gap={4}
        alignItems={"flex-start"}
        justifyContent={"center"}
      >
        <Flex gap={2} alignItems={"center"} justifyContent={"center"}>
          <Box>
            <Text>k_i_r_a_n_b_g_s</Text>
          </Box>
          <Button>Edit Profile</Button>
          <Button>View Archives</Button>
          <IoIosSettings size={"42"} />
        </Flex>
        <Flex justifyContent={"center"} alignItems={"flex-start"} gap={10}>
          <Text> 1 post</Text>
          <Text> 100 followers</Text>
          <Text> 200 following</Text>
        </Flex>
        <Text>UserFullName</Text>
        <Text>Bio</Text>
      </Flex>
    </Flex>
  );
}

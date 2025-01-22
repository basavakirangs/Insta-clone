import { Avatar, Flex, Text, Box, Button } from "@chakra-ui/react";

export default function PostHeader() {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src="" alt={"user profile pic"} size={"sm"} />
        <Text> username</Text>
        <Box color={"gray.500"}>• 1 day ago</Box>
      </Flex>
      <Box cursor={"pointer"}>
        <Button
          size={"xs"}
          bg={"transparent"}
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{
            color: "white",
          }}
          transition={"0.2s ease-in-out"}
        >
          Unfollow
        </Button>
      </Box>
    </Flex>
  );
}

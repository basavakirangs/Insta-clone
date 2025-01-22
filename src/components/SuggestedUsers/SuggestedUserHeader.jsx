import { Avatar, Button, Flex, Text } from "@chakra-ui/react";

export default function SuggestedUserHeader() {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar size={"sm"} src="" />
        <Text fontSize={12} fontWeight={"bold"}>
          username
        </Text>
      </Flex>

      <Button
        size={"sm"}
        background={"transparent"}
        _hover={{ background: "transparent" }}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        style={{ textDecoration: "none" }}
        cursor={"pointer"}
      >
        Log out
      </Button>
    </Flex>
  );
}

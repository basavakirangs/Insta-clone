import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";

export default function SuggestedUser() {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src="" size={"sm"} />
        <VStack spacing={1} alignItems={"flex-start"}>
          <Box fontSize={11} fontWeight={"bold"}>
            user full name
          </Box>
          <Box fontSize={11} color={"gray.500"}>
            100 followers
          </Box>
        </VStack>
      </Flex>
      <Button
        fontSize={13}
        bg={"transparent"}
        p={0}
        h={"max-content"}
        fontWeight={"medium"}
        color={"blue.500"}
      >
        follow
      </Button>
    </Flex>
  );
}

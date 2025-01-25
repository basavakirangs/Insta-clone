import { VStack, Flex, Text } from "@chakra-ui/react";
import SuggestedUser from "./SuggestedUser";
import SuggestedUserHeader from "./SuggestedUserHeader";

export default function SuggestedUsers() {
  return (
    <VStack py={8} px={6} gap={4} w={"300px"}>
      <SuggestedUserHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser />
    </VStack>
  );
}

import {
  Box,
  Button,
  Image,
  Input,
  VStack,
  Flex,
  Text,
} from "@chakra-ui/react";

export default function AuthForm() {
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} p={4}>
        <VStack
          spacing={2}
          alignItems={"center"}
          justifyContent={"center"}
          padding={8}
        >
          <Image
            src="Instagram.png"
            alt="Instagram name"
            cursor={"pointer"}
            h={51}
            w={170}
            mb={6}
          />

          <Input
            name="Email"
            type="Email"
            placeholder="Email/UserName"
            size={"sm"}
          />
          <Input
            name="Password"
            type="password"
            placeholder="Password"
            size={"sm"}
          />

          <Button colorScheme="blue" size={"sm"} w={"full"} mt={3}>
            LogIn
          </Button>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            gap={2}
            flexDir={"column"}
            cursor={"pointer"}
          >
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              gap={2}
              color={"blue.500"}
              cursor={"pointer"}
            >
              <Image src="facebook.png" alt="facebook icon" h={5} />
              <Text>Log in with Facebook</Text>
            </Flex>
            <Text>Forgot password?</Text>
          </Flex>
        </VStack>
      </Box>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            Already have an account?
          </Box>
          <Box color={"blue.500"} cursor={"pointer"}>
            Log in
          </Box>
        </Flex>
      </Box>
    </>
  );
}

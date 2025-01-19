import { Box, Container, Flex, Image } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForms/AuthForm";
import Carousel from "../../components/Carousels";

export default function AuthPage() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={4}>
          {/* Left Side */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            display={{ base: "none", md: "flex" }}
          >
            <Image src="/auth.png" h={"565px"} w={"430px"} />
            <Box mt={110} marginLeft={-268}>
              <Carousel />
            </Box>
          </Flex>
          {/* Right Side */}
          <Flex flexDir={"column"} minW={"350px"} gap={4}>
            <AuthForm />
            <Box textAlign={"center"}>Get the app.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="/playstore.png" h={"10"} alt="Playstore logo" />
              <Image src="/microsoft.png" h={"10"} alt="Microsoft logo" />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}

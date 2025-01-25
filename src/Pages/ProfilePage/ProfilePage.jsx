import { Container, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfilePosts from "../../components/Profile/ProfilePosts";

export default function ProfilePage() {
  const { username } = useParams();

  return (
    // <Container
    //   maxW={"container.lg"}
    //   py={5}
    //   bg="wheat"
    //   // w={"100%"}
    // >
    <Flex direction={"column"} bg="teal" w="100%">
      <ProfileHeader />
      <ProfilePosts />
    </Flex>
    // </Container>
  );
}

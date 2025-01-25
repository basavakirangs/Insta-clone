import { Container, Flex, Box } from "@chakra-ui/react";
import Status from "../../components/FeedPosts/Status";
import FeedPosts from "../../components/FeedPosts/Feedposts";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";

export default function HomePage() {
  return (
    // <Container maxH={"container.lg"}>
    <Flex gap={20}>
      <Box flex={2} py={5} mx={0}>
        <Status />
        <FeedPosts />
      </Box>
      <Box flex={3} mr={20} display={{ base: "none", lg: "block" }}>
        <SuggestedUsers />
      </Box>
    </Flex>
    // </Container>
  );
}

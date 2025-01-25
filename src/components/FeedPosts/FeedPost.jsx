import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import { Box, Flex, Image } from "@chakra-ui/react";

export default function FeedPost() {
  return (
    <Box justifyContent={"space-evenly"} alignItems={"center"}>
      <PostHeader />
      <Box p={4} borderRadius={4}>
        <Image src="/img-1.jpeg" alt={"FEED POST IMG"} />
      </Box>
      <PostFooter />
    </Box>
  );
}

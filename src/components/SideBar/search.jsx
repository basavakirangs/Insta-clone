import { Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { SearchLogo } from "../../assets/constants";

export default function Search() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Tooltip
        hasArrow
        label={"Search"}
        placement="right"
        ml={1}
        openDelay={500}
        display={{ base: "block", lg: "none" }}
      >
        <Flex
          display={"flex"}
          alignItems={"center"}
          gap={4}
          borderRadius={6}
          p={2}
          w={{ base: 10, lg: "full" }}
          justifyContent={{ base: "center", lg: "flex-start" }}
          _hover={{ bg: "gray.700", borderRadius: 4, textDecoration: "none" }}
          onClick={onOpen}
        >
          <SearchLogo size={24} />
          <Box display={{ base: "none", lg: "block" }}>Search</Box>
        </Flex>
      </Tooltip>

      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Search</DrawerHeader>
          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

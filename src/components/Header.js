import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Flex
      background="url(../assets/header.png) center right"
      backgroundSize="cover"
      minHeight="412px"
      width="100%"
    >
      <Heading color="white" fontSize="64px" alignSelf="flex-end" padding={6}>
        Electronics
      </Heading>
    </Flex>
  );
};

export default Header;

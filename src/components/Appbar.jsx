import React from "react";
import { Box, Text, Flex, Avatar } from "@chakra-ui/core";

function Appbar() {
  return (
    <Box h={20} backgroundColor="blue.800" width="100%" float="right" mt="0px">
      <Flex
        float={["left", "left", "left", "right"]}
        ml={["10%", "10%", "10%", "0%"]}
        mr={["0%", "0%", "0%", "5%"]}
        pt="15px"
      >
        <Avatar src="https://bit.ly/sage-adebayo" border="2px solid white" />
        <Box ml="3" color="white">
          <Text fontWeight="bold" d={["none", "none", "none", "flex"]}>
            Malla Reddy
          </Text>
          <Text fontSize="sm" d={["none", "none", "none", "flex"]}>
            CEO
          </Text>
        </Box>
        <Box
          d={["flex", "flex", "flex", "none"]}
          border="2px solid white"
          borderRadius="5px"
          color="white"
          ml="100%"
        >
          <Text textAlign="center" p="8px">
            &lt;
            <b>
              <u>1</u>
            </b>
            /130&gt;
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Appbar;

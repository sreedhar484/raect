import React from "react";
import { Button, Box, Text } from "@chakra-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Submit() {
  return (
    <Box mt={6} mx={[0, 0, 4, 4]} d="flex">
      <Box
        mt={2}
        mx={[0, 0, 2, 2]}
        w="10%"
        d={["none", "none", "none", "flex"]}
      >
        <Button
          backgroundColor="white"
          w="100%"
          color="#1A365D"
          border="1px solid #1A365D"
        >
          <Link to="/main">BACK</Link>
        </Button>
      </Box>
      <Box mt={["20%", "20%", "15%", "15%"]} mx={6} w="80%">
        <Text
          color="#1A365D"
          fontWeight="bold"
          pt={2}
          textAlign="center"
          fontSize={[20, 20, 32, 32]}
        >
          Entry Successfully Added !
        </Text>
        <Button
          backgroundColor="#1A365D"
          color="white"
          mt={8}
          ml={["30%", "30%", "40%", "40%"]}
          justifyContent="center"
        >
          <Link to="/newForm">ADD ANOTHER</Link>
        </Button>
      </Box>
    </Box>
  );
}

export default Submit;

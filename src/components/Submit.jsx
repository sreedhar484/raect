import React, { useEffect } from "react";
import { Button, Box, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";
function Submit(props) {
  useEffect(() => {
    props.state.entry = false;
  }, []);
  return (
    <Box mt={6} mx={[0, 0, 4, 4]} d="flex">
      <Box
        mt={2}
        mx={[0, 0, 2, 2]}
        w="10%"
        d={["none", "none", "none", "flex"]}
      >
        <Link to="/main" w="full">
          <Button
            backgroundColor="white"
            color="#1A365D"
            border="1px solid #1A365D"
          >
            BACK
          </Button>
        </Link>
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
        <Link to="/newForm">
          <Button
            backgroundColor="#1A365D"
            color="white"
            mt={8}
            ml={["30%", "30%", "40%", "40%"]}
            justifyContent="center"
          >
            ADD ANOTHER
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Submit;

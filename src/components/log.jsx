import React, { Component } from "react";
import { Box, Text, Button, Input } from "@chakra-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Log extends Component {
  render() {
    return (
      <div>
        <Box
          h="100vh"
          mt={["60%", "60%", "60%", "0%"]}
          backgroundColor="blue.900"
          width={[
            "100%", // base
            "80%", // 480px upwards
            "60%", // 768px upwards
            "40%", // 992px upwards
          ]}
          float="right"
        >
          <Box w="300px" h="25%" ml="50%" d="flex">
            <Box
              backgroundColor="grey.300"
              w="120px"
              h="200px"
              mt="-5%"
              border="1px solid #CBD5E0"
              borderTopLeftRadius="30%"
              borderBottomRightRadius="30%"
              transform="rotate(15deg)"
            ></Box>
            <Box
              backgroundColor="grey.300"
              w="120px"
              h="200px"
              ml="-15%"
              mt="-15%"
              border="1px solid #CBD5E0"
              borderTopLeftRadius="30%"
              borderBottomRightRadius="30%"
              transform="rotate(15deg)"
            ></Box>
          </Box>

          <Box mx={10} mt="35%" mb="22%">
            <Text my={6} fontWeight="bold" fontSize="2rem" color="#4299E1">
              LOGIN
            </Text>
            <Input
              my={6}
              variant="flushed"
              placeholder="USER NAME"
              color="white"
              borderColor="#2A69AC"
            />
            <Input
              my={6}
              variant="flushed"
              placeholder="PASSWORD"
              color="white"
              borderColor="#2A69AC"
            />

            <Button my={6} w={32}>
              <Link to="/main">LOGIN</Link>
            </Button>
          </Box>
        </Box>
      </div>
    );
  }
}

export default Log;

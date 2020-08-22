import React from "react";
import { Box, Text, Button, Input } from "@chakra-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Log(props) {
  return (
    <div>
      <Box
        h="100vh"
        mt={["60%", "60%", "60%", "0%"]}
        backgroundColor="blue.900"
        width={["100%", "80%", "60%", "40%"]}
        float="right"
      >
        <Box w="300px" h="25%" ml="50%" d="flex">
          <Box
            backgroundColor="grey.300"
            w="120px"
            h="200px"
            mt="-5%"
            border="1px solid blue.900"
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
            border="1px solid blue.900"
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
            name="userName"
            placeholder="USER NAME"
            color="white"
            onChange={props.changeHandle}
            borderColor={props.state.erroru ? "crimson" : "#2A69AC"}
            focusBorderColor={props.state.errorp ? "crimson" : "#2A69AC"}
          />
          <Input
            name="password"
            my={6}
            variant="flushed"
            placeholder="PASSWORD"
            color="white"
            borderColor="#2A69AC"
            onChange={props.changeHandle}
            borderColor={props.state.errorp ? "crimson" : "#2A69AC"}
            focusBorderColor={props.state.errorp ? "crimson" : "#2A69AC"}
          />

          <Button my={6} w={32} onClick={props.btnClick}>
            {props.state.log ? <Link to="/main">LOGIN</Link> : "LOGIN"}
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Log;

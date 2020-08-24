import React from "react";
import {
  Box,
  Text,
  Button,
  Input,
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Log(props) {
  return (
    <div>
      <Box
        h="100vh"
        mt={["40%", "40%", "40%", "0%"]}
        backgroundColor="blue.900"
        width={["100%", "100%", "100%", "40%"]}
        float="right"
      >
        <Box mx={10} mt="60%" mb="22%">
          <form>
            <Text my={6} fontWeight="bold" fontSize="2rem" color="#4299E1">
              LOGIN
            </Text>
            {/* <FormControl my={6}>
              <Input
                id="name"
                variant="flushed"
                name="userName"
                placeholder="USER NAME"
                color="white"
                onChange={props.changeHandle}
                borderColor={props.state.erroru ? "crimson" : "#2A69AC"}
                focusBorderColor={props.state.errorp ? "crimson" : "#2A69AC"}
              />
              <FormHelperText color="red.500">
                {props.state.erroru ? props.state.errorum : ""}
              </FormHelperText>
            </FormControl>
            <FormControl my={6}>
              <Input
                id="name"
                variant="flushed"
                name="userName"
                placeholder="PASSWORD"
                color="white"
                onChange={props.changeHandle}
                borderColor={props.state.errorp ? "crimson" : "#2A69AC"}
                focusBorderColor={props.state.errorp ? "crimson" : "#2A69AC"}
              />
              <FormHelperText color="red.500">
                {props.state.errorp ? props.state.errorpm : ""}
              </FormHelperText>
            </FormControl> */}

            <Input
              my={6}
              variant="flushed"
              name="userName"
              placeholder="USER NAME"
              color="white"
              onChange={props.changeHandle}
              borderColor={props.state.erroru ? "crimson" : "#2A69AC"}
              focusBorderColor={props.state.erroru ? "crimson" : "#2A69AC"}
            />
            <FormHelperText color="red.500">
              {props.state.erroru ? props.state.errorum : ""}
            </FormHelperText>

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
            <FormHelperText color="red.500">
              {props.state.errorp ? props.state.errorpm : ""}
            </FormHelperText>
            {props.state.log ? (
              <Link to="/main">
                <Button my={6} w={32} onClick={props.btnClick}>
                  LOGIN
                </Button>
              </Link>
            ) : (
              <Button my={6} w={32} onClick={props.btnClick}>
                LOGIN
              </Button>
            )}
          </form>
        </Box>
      </Box>
    </div>
  );
}

export default Log;

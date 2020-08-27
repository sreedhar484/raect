import React from "react";
import {
  Box,
  Text,
  Button,
  Input,
  FormControl,
  FormHelperText,
} from "@chakra-ui/core";
import Axios from "axios";
import { Redirect } from "react-router-dom";

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
          <Text my={6} fontWeight="bold" fontSize="2rem" color="#4299E1">
            LOGIN
          </Text>
          <form onSubmit={props.btnClick}>
            <FormControl my={6}>
              <Input
                type="text"
                placeholder="USER NAME"
                value={props.state.userName}
                variant="flushed"
                name="userName"
                color="white"
                onChange={props.changeHandle}
                borderColor={props.state.erroru ? "crimson" : "#2A69AC"}
                focusBorderColor={props.state.erroru ? "crimson" : "#2A69AC"}
              />
              <FormHelperText color="red.500">
                {props.state.errorum}
              </FormHelperText>
            </FormControl>
            <FormControl my={6}>
              <Input
                type="password"
                variant="flushed"
                placeholder="PASSWORD"
                color="white"
                name="password"
                value={props.state.password}
                onChange={props.changeHandle}
                borderColor={props.state.errorp ? "crimson" : "#2A69AC"}
                focusBorderColor={props.state.errorp ? "crimson" : "#2A69AC"}
              />
              <FormHelperText color="red.500">
                {props.state.errorpm}
              </FormHelperText>
            </FormControl>
            {props.state.log ? (
              <Redirect to="/main" />
            ) : (
              <Button type="submit" my={6}>
                Login
              </Button>
            )}
          </form>
        </Box>
      </Box>
    </div>
  );
}

export default Log;

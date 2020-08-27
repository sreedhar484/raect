import React, { useState } from "react";
import {
  Text,
  Button,
  FormControl,
  FormHelperText,
  Input,
  Box,
} from "@chakra-ui/core";
function Form1() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [userv, setUserv] = useState(false);
  const [passv, setPassv] = useState(false);
  const validate = (event) => {
    if (user === "sree") {
      setUserv(false);
      if (pass === "1234") {
        console.log("logged in");
        setPassv(false);
      } else {
        setPassv(true);
      }
    } else {
      setUserv(true);
    }
    event.preventDefault();
  };
  return (
    <Box mx={20} my={20}>
      <form onSubmit={validate}>
        <FormControl>
          <Input
            type="text"
            placeholder="User Name"
            value={user}
            variant="flushed"
            isRequired={true}
            borderColor={userv ? "red.500" : "blue.500"}
            onChange={(e) => setUser(e.target.value)}
          />
          <FormHelperText color="red.500">
            {userv ? "incorrect user name" : ""}
          </FormHelperText>
        </FormControl>
        <FormControl>
          <Input
            type="text"
            placeholder="Password"
            value={pass}
            isRequired={true}
            variant="flushed"
            borderColor={passv ? "red.500" : "blue.500"}
            onChange={(e) => setPass(e.target.value)}
          />
          <FormHelperText color="red.500">
            {passv ? "incorrect password" : ""}
          </FormHelperText>
        </FormControl>
        <Button type="submit">Login</Button>
      </form>
    </Box>
  );
}

export default Form1;

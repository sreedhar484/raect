import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import {
  Box,
  Text,
  Button,
  Input,
  Radio,
  RadioGroup,
  InputRightElement,
  Icon,
  InputGroup,
  Textarea,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
} from "@chakra-ui/core";

function NewForm(props) {
  useEffect(() => {
    props.state.edit = false;
  }, []);
  return (
    <Box mt={6} mx={[0, 0, 0, 4]} d="flex">
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
      <Box mt={[0, 0, 0, 2]} mx={6} w="80%">
        <form onSubmit={props.onSubmit1}>
          <Text color="#1A365D" fontWeight="bold" pt={2}>
            New Debenture Form
          </Text>
          <FormControl mt={8}>
            <FormLabel htmlFor="name">User Name</FormLabel>
            <Input
              placeholder="User Name"
              variant="flushed"
              name="name"
              id="name"
              value={props.state.name}
              onChange={props.nameChange}
            ></Input>
            <FormHelperText color="red.500">
              {props.state.erroruser}
            </FormHelperText>
          </FormControl>
          <Box d={["", "", "", "flex"]}>
            <Box w={["100%", "100%", "100%", "25%"]}>
              <FormControl mt={8}>
                <FormLabel htmlFor="phone">PHONE</FormLabel>
                <Input
                  placeholder="PHONE"
                  variant="flushed"
                  name="phone"
                  id="phone"
                  type="tel"
                  value={props.state.phone}
                  onChange={props.nameChange}
                ></Input>
                <FormHelperText color="red.500">
                  {props.state.errorphone}
                </FormHelperText>
              </FormControl>
            </Box>
            <Box
              w={["100%", "100%", "100%", "70%"]}
              ml={["0%", "0%", "0%", "5%"]}
            >
              <FormControl mt={8}>
                <FormLabel htmlFor="email">EMAIL</FormLabel>
                <Input
                  placeholder="EMAIL"
                  variant="flushed"
                  name="email"
                  type="email"
                  id="email"
                  value={props.state.email}
                  onChange={props.nameChange}
                ></Input>
                <FormHelperText color="red.500">
                  {props.state.erroremail}
                </FormHelperText>
              </FormControl>
            </Box>
          </Box>
          <FormControl mt={8}>
            <FormLabel htmlFor="type">DEBENTURE TYPE</FormLabel>
            <RadioGroup
              id="type"
              name="type"
              onChange={props.nameChange}
              value={props.type}
              defaultValue="0"
              spacing={[2, 2, 2, 10]}
              mt={4}
              isInline={["", "", "", "true"]}
            >
              <Radio variantColor="green" value="book">
                Book Debenture
              </Radio>
              <Radio variantColor="green" value="purchase">
                Purchase Debenture
              </Radio>
            </RadioGroup>
            <FormHelperText color="red.500">
              {props.state.errortype}
            </FormHelperText>
          </FormControl>
          <FormControl mt={8}>
            <FormLabel htmlFor="amount">DEBENTURE AMOUNT</FormLabel>
            <Text id="amount" mt={4} d="flex">
              10,000{"  "}+{"   "}(
              <InputGroup>
                <Input
                  variant="flushed"
                  w={20}
                  type="number"
                  h="28px"
                  name="amountCount"
                  value={props.state.amountCount}
                  onChange={props.nameChange}
                />
                <InputRightElement
                  children={
                    <IconButton
                      icon="chevron-down"
                      color="green.500"
                      size={8}
                      mb={4}
                      border="none"
                      backgroundColor="white"
                      onClick={props.onDownClick}
                    />
                  }
                />
              </InputGroup>
              *1,000)
              {"  "}={"   "}
              <b font-size="20px">
                &#8377;{props.state.amountCount * 1000 + 10000}
              </b>
            </Text>
          </FormControl>
          {props.state.type === "purchase" ? (
            <Box>
              <Text color="grey.200" mt={8}>
                NOTES
              </Text>
              <Textarea name="notes" onChange={props.nameChange}></Textarea>
            </Box>
          ) : (
            ""
          )}
          {props.state.entry ? (
            <Redirect to="/submit" />
          ) : (
            <Button
              type="submit"
              my={6}
              backgroundColor="#1A365D"
              color="white"
              mt={8}
              w={["100%", "100%", "15%", "15%"]}
            >
              SUBMIT
            </Button>
          )}
        </form>
      </Box>
    </Box>
  );
}

export default NewForm;

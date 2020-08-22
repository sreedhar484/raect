import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
} from "@chakra-ui/core";

function NewForm(props) {
  const [value, setValue] = React.useState("0");
  const [value1, onBtnClick] = React.useState(0);
  const [notes, onNotes] = React.useState("");
  return (
    <Box mt={6} mx={[0, 0, 0, 4]} d="flex">
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
      <Box mt={[0, 0, 0, 2]} mx={6} w="80%">
        <Text color="#1A365D" fontWeight="bold" pt={2}>
          New Debenture Form
        </Text>
        <Text color="grey.200" mt={8}>
          USER NAME
        </Text>
        <Input
          placeholder="User Name"
          variant="flushed"
          name="name"
          value={props.state.name}
          onChange={props.nameChange}
        ></Input>
        <Box d={["", "", "", "flex"]}>
          <Box w={["100%", "100%", "100%", "25%"]}>
            <Text color="grey.200" mt={8}>
              PHONE
            </Text>
            <Input
              placeholder="PHONE"
              variant="flushed"
              name="phone"
              value={props.state.phone}
              onChange={props.nameChange}
            ></Input>
          </Box>
          <Box
            w={["100%", "100%", "100%", "70%"]}
            ml={["0%", "0%", "0%", "5%"]}
          >
            <Text color="grey.200" mt={8}>
              EMAIL
            </Text>
            <Input
              placeholder="EMAIL"
              variant="flushed"
              name="email"
              value={props.state.email}
              onChange={props.nameChange}
            ></Input>
          </Box>
        </Box>
        <Text color="grey.200" mt={8}>
          DEBENTURE TYPE
        </Text>
        <RadioGroup
          onChange={(e) => setValue(e.target.value)}
          value={value}
          defaultValue="2"
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
        <Text color="grey.200" mt={8}>
          DEBENTURE AMOUNT
        </Text>
        <Text mt={4} d="flex">
          10,000{"  "}+{"   "}(
          <InputGroup>
            <Input
              variant="flushed"
              w={20}
              type="number"
              h="28px"
              value={value1}
              onChange={(event) => onBtnClick(event.target.value)}
            />
            <InputRightElement
              children={
                <Icon
                  name="chevron-down"
                  color="green.500"
                  size={8}
                  mb={4}
                  onClick={() => onBtnClick(Number(value1) + 1)}
                />
              }
            />
          </InputGroup>
          *1,000)
          {"  "}={"   "}
          <b font-size="20px">{value1 * 1000 + 10000}</b>
        </Text>
        {value === "purchase" ? (
          <Box>
            <Text color="grey.200" mt={8}>
              NOTES
            </Text>
            <Textarea
              onChange={(event) => onNotes(event.target.value)}
            ></Textarea>
          </Box>
        ) : (
          ""
        )}
        <Button
          backgroundColor="#1A365D"
          color="white"
          mt={8}
          w={["100%", "100%", "15%", "15%"]}
          onClick={(e) => props.onSubmit(notes, value, value1)}
        >
          <Link to="/submit">SUBMIT</Link>
        </Button>
      </Box>
    </Box>
  );
}

export default NewForm;

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Box,
  Text,
  Button,
  Input,
  Grid,
  InputGroup,
  InputLeftElement,
  Icon,
  ListIcon,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/core";
import "../App.css";

export class Content extends Component {
  render() {
    return (
      <React.Fragment>
        <Box>
          <Grid
            templateColumns="75% 25%"
            gap={0}
            mx={4}
            mt={6}
            shadow="lg"
            d={["none", "none", "none", "grid"]}
          >
            <Grid templateColumns="75% 25%" gap={0}>
              <Text p={5}>104 Potential Buyers</Text>
              <Text p={5}>1,57,68,000 Pledged Amount</Text>
            </Grid>
            <Text backgroundColor="#CBD5E0" fontWeight="bold" p={5}>
              51,87,000 Realized Amount
            </Text>
          </Grid>
          <Grid
            templateRows="1fr 1fr"
            gap={6}
            mx={4}
            mt={4}
            d={["grid", "grid", "grid", "none"]}
          >
            <Text p={5} shadow="lg" textAlign="center">
              51,87,000 Realized Amount
            </Text>
            <Text p={5} shadow="lg" textAlign="center">
              1,57,68,000 Pledged by 104 Buyers
            </Text>
          </Grid>

          <Grid templateColumns="80% 20%" gap={0} mx={4} mt={6}>
            <Text>
              All Debenture Buyers
              <Button
                d={["none", "none", "none", "inline"]}
                ml={6}
                backgroundColor="white"
                border="1px solid blue"
                borderRadius="5px"
                fontSize="12px"
                h="30px"
              >
                {"  "}
                <Icon name="add" color="blue.500" />
                <Link to="newForm">ADD A NEW ENTRY</Link>
              </Button>
            </Text>
            <InputGroup d={["none", "none", "none", "flex"]}>
              <InputLeftElement
                children={
                  <Icon name="search" color="blue.500" h="30px" pb="7px" />
                }
              />
              <Input
                type="text"
                placeholder="Search Entry"
                variant="flushed"
                h="30px"
              />
            </InputGroup>
            <Box d={["flex", "flex", "flex", "none"]}>
              <IconButton
                variant="outline"
                variantColor="white"
                aria-label="Call Sage"
                fontSize="20px"
                icon="search"
                border="none"
              ></IconButton>
              <IconButton
                variant="outline"
                variantColor="white"
                aria-label="Call Sage"
                fontSize="20px"
                icon="copy"
                border="none"
              ></IconButton>
            </Box>
          </Grid>
          <Grid
            d={["none", "none", "none", "grid"]}
            templateRows="repeat(3, 1fr)"
            mx={4}
            mt={4}
            border="1px solid #153E75"
            borderRadius="10px"
          >
            <Grid
              templateColumns="repeat(8, 1fr)"
              gap={2}
              backgroundColor="#153E75"
              color="white"
              border="1px solid #153E75"
              borderTopLeftRadius="10px"
              borderTopRightRadius="10px"
              p={2}
            >
              <Text d="flex">
                <Text>NAME</Text>
                <Grid templateRows="1fr 1fr">
                  <Icon name="triangle-up" size="12px" />
                  <Icon name="triangle-down" size="12px" />
                </Grid>
              </Text>
              <Text>PHONE</Text>
              <Text>EMAIL</Text>
              <Text d="flex">
                <Text>PLEDGED DATE</Text>
                <Grid templateRows="1fr 1fr">
                  <Icon name="triangle-up" size="12px" />
                  <Icon name="triangle-down" size="12px" />
                </Grid>
              </Text>
              <Text d="flex">
                <Text>PLEDGED AMOUNT</Text>
                <Grid templateRows="1fr 1fr">
                  <Icon name="triangle-up" size="12px" />
                  <Icon name="triangle-down" size="12px" />
                </Grid>
              </Text>
              <Text d="flex">
                <Text>RECIEVED DATE</Text>
                <Grid templateRows="1fr 1fr">
                  <Icon name="triangle-up" size="12px" />
                  <Icon name="triangle-down" size="12px" />
                </Grid>
              </Text>
              <Text d="flex">
                <Text>RECIEVED AMOUNT</Text>
                <Grid templateRows="1fr 1fr">
                  <Icon name="triangle-up" size="12px" />
                  <Icon name="triangle-down" size="12px" />
                </Grid>
              </Text>
              <Text>STATUS</Text>
            </Grid>

            <Grid templateColumns="repeat(8, 1fr)" p={2} gap={2}>
              <Text>sreedhar</Text>
              <Text>+916302306825</Text>
              <Text>sreedharr484@gmail.com</Text>
              <Text>15 mar 2020</Text>
              <Text>40,000</Text>
              <Text>15 mar 2020</Text>
              <Text>40,000</Text>
              <Text color="green.500">
                <ListIcon icon="check-circle" color="green.500" />
                RECIEVED
                <Popover>
                  <PopoverTrigger>
                    <IconButton
                      variant="outline"
                      variantColor="white"
                      aria-label="Call Sage"
                      fontSize="20px"
                      icon="drag-handle"
                      border="none"
                    ></IconButton>
                  </PopoverTrigger>
                  <PopoverContent
                    zIndex={4}
                    backgroundColor="teal.500"
                    w="150px"
                  >
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody color="white">
                      <IconButton
                        icon="edit"
                        backgroundColor="teal.500"
                        border="none"
                      ></IconButton>
                      Edit<br></br>
                      <IconButton
                        icon="delete"
                        backgroundColor="teal.500"
                        border="none"
                      ></IconButton>
                      Delete
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Text>
            </Grid>

            <Grid templateColumns="repeat(8, 1fr)" p={2} gap={2}>
              <Text>sreedhar</Text>
              <Text>+916302306825</Text>
              <Text>sreedharr484@gmail.com</Text>
              <Text>15 mar 2020</Text>
              <Text>40,000</Text>
              <Text>15 mar 2020</Text>
              <Text>40,000</Text>
              <Text color="green.500">
                <ListIcon icon="check-circle" color="green.500" />
                RECIEVED
                <Popover>
                  <PopoverTrigger>
                    <IconButton
                      variant="outline"
                      variantColor="white"
                      aria-label="Call Sage"
                      fontSize="20px"
                      icon="drag-handle"
                      border="none"
                    ></IconButton>
                  </PopoverTrigger>
                  <PopoverContent
                    zIndex={4}
                    backgroundColor="teal.500"
                    w="150px"
                  >
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody color="white">
                      <IconButton
                        icon="edit"
                        backgroundColor="teal.500"
                        border="none"
                      ></IconButton>
                      Edit<br></br>
                      <IconButton
                        icon="delete"
                        backgroundColor="teal.500"
                        border="none"
                      ></IconButton>
                      Delete
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Text>
            </Grid>
          </Grid>
          <Grid
            d={["grid", "grid", "grid", "none"]}
            templateRows="repeat(2, 1fr)"
            gap={4}
            mx={4}
            mt={4}
          >
            <Box shadow="lg">
              <Grid templateColumns="2fr 1fr" backgroundColor="#CBD5E0">
                <Text pl={4} py={4}>
                  Sreedhar
                </Text>
                <Text color="green.500" pl={4} py={4}>
                  <ListIcon icon="check-circle" color="green.500" />
                  RECIEVED
                </Text>
              </Grid>
              <Grid templateColumns="1fr 1fr">
                <Text pl={4} py={4}>
                  Recieved Amount
                </Text>
                <Text pl={4} py={4}>
                  Recieved Date
                </Text>
              </Grid>
              <Grid templateColumns="1fr 1fr">
                <Text pl={4} pb={2}>
                  40,000
                </Text>
                <Text pl={4} pb={2}>
                  15 Mar 2020
                </Text>
              </Grid>
            </Box>
            <Box shadow="lg">
              <Grid templateColumns="2fr 1fr" backgroundColor="#CBD5E0">
                <Text pl={4} py={4}>
                  Sreedhar
                </Text>
                <Text color="green.500" pl={4} py={4}>
                  <ListIcon icon="check-circle" color="green.500" />
                  RECIEVED
                </Text>
              </Grid>
              <Grid templateColumns="1fr 1fr">
                <Text pl={4} py={4}>
                  Recieved Amount
                </Text>
                <Text pl={4} py={4}>
                  Recieved Date
                </Text>
              </Grid>
              <Grid templateColumns="1fr 1fr">
                <Text pl={4} pb={2}>
                  40,000
                </Text>
                <Text pl={4} pb={2}>
                  15 Mar 2020
                </Text>
              </Grid>
            </Box>
          </Grid>
          <Text
            textAlign="center"
            p="8px"
            width="150px"
            float="right"
            mr={4}
            ml="89%"
            mt={4}
            border="1px solid #153E75"
            borderRadius="5px"
            d={["none", "none", "none", "flex"]}
          >
            &lt;
            <b>
              <u>1</u>
            </b>
            /130&gt;
          </Text>
          <Button
            bottom="0px"
            d={["flex", "flex", "flex", "none"]}
            mx="2%"
            backgroundColor="white"
            border="1px solid blue"
            borderRadius="5px"
            fontSize="12px"
            h="30px"
            w="96%"
          >
            {"  "}
            <Icon name="add" color="blue.500" />
            <Link to="newForm">ADD A NEW ENTRY</Link>
          </Button>
        </Box>
      </React.Fragment>
    );
  }
}

export default Content;

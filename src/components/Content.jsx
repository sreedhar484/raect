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
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/core";
import "../App.css";
import ReactPaginate from "react-paginate";

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search1: false,
    };
  }
  onMouse = () => {
    this.setState({ search1: !this.state.search1 }, () =>
      console.log(this.state.search1)
    );
  };
  render() {
    return (
      <React.Fragment>
        <Box>
          <Grid
            templateColumns="75% 25%"
            gap={0}
            mx={4}
            mt={6}
            boxShadow="0px 0px 5px 0px rgba(0,0,0,.5)"
            border="1px solid white"
            borderRadius="10px"
            d={["none", "none", "none", "grid"]}
          >
            <Grid templateColumns="75% 25%" gap={0}>
              <Text p={3} d="flex">
                <Text fontSize={26} mr={2}>
                  {this.props.state.array.length}
                </Text>
                <Text pt={2}>Potential Buyers</Text>
              </Text>
              <Text p={4}>
                &#8377; {this.props.state.totalpledged} Pledged Amount
              </Text>
            </Grid>
            <Text
              backgroundColor="#CBD5E0"
              color="blue.800"
              fontWeight="bold"
              p={3}
              d="flex"
            >
              <Text fontSize={26} mr={2} ml={20}>
                &#8377; {this.props.state.totalrecieved}
              </Text>
              <Text pt={2}>Realized Amount</Text>
            </Text>
          </Grid>
          <Grid
            templateRows="1fr 1fr"
            gap={6}
            mx={4}
            mt={4}
            d={["grid", "grid", "grid", "none"]}
          >
            <Text
              boredr="1px solid white"
              borderRadius="5px"
              p={5}
              boxShadow="0px 0px 5px 0px rgba(0,0,0,.5)"
              textAlign="center"
              color="blue.800"
              fontSize={24}
            >
              <b>&#8377; {this.props.state.totalrecieved}</b> Realized Amount
            </Text>
            <Text
              boredr="1px solid white"
              borderRadius="5px"
              p={5}
              fontSize={20}
              boxShadow="0px 0px 5px 0px rgba(0,0,0,.5)"
              textAlign="center"
            >
              &#8377; {this.props.state.totalpledged} Pledged by{" "}
              <b>{this.props.state.array.length}</b> Buyers
            </Text>
          </Grid>
          <Grid
            templateColumns={this.state.search1 ? "50% 50%" : "80% 20%"}
            gap={0}
            mx={4}
            mt={6}
          >
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
                onClick={this.props.addNew}
              >
                {"  "}
                <Icon name="add" color="blue.500" mb={1} mr={2} />
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
                onChange={this.props.search}
              />
            </InputGroup>
            <Box d={["flex", "flex", "flex", "none"]}>
              {this.state.search1 ? (
                <Input
                  type="text"
                  placeholder="Search Entry"
                  variant="flushed"
                  h="30px"
                  onChange={this.props.search}
                />
              ) : (
                ""
              )}
              <IconButton
                variant="outline"
                variantColor="white"
                aria-label="Call Sage"
                fontSize="20px"
                icon="search"
                border="none"
                onClick={this.onMouse}
              ></IconButton>
              <Popover placement="left-start">
                <PopoverTrigger>
                  <IconButton
                    variant="outline"
                    variantColor="white"
                    aria-label="Call Sage"
                    fontSize="20px"
                    icon="copy"
                    border="none"
                  ></IconButton>
                </PopoverTrigger>
                <PopoverContent zIndex={4} backgroundColor="teal.500" w="150px">
                  <PopoverArrow />
                  <PopoverBody color="white">
                    <Button backgroundColor="teal.500" border="none">
                      <Icon name="edit" mr={2}></Icon>Edit
                    </Button>
                    <br></br>
                    <Button
                      icon="delete"
                      backgroundColor="teal.500"
                      border="none"
                    >
                      <Icon name="delete" mr={2}></Icon>Delete
                    </Button>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>
          </Grid>
          <Grid
            d={["none", "none", "none", "grid"]}
            templateRows="repeat(4, 1fr)"
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
                <Text mr={2}>NAME</Text>
                <Grid templateRows="1fr 1fr">
                  <IconButton
                    icon="triangle-up"
                    border="none"
                    backgroundColor="none"
                    size="8px"
                    onClick={() => this.props.nameAsci("name")}
                  />
                  <IconButton
                    icon="triangle-down"
                    border="none"
                    size="8px"
                    backgroundColor="none"
                    onClick={() => this.props.nameDsci("name")}
                  />
                </Grid>
              </Text>
              <Text>PHONE</Text>
              <Text>EMAIL</Text>
              <Text d="flex">
                <Text mr={2}>PLEDGED DATE</Text>
                <Grid templateRows="1fr 1fr">
                  <IconButton
                    icon="triangle-up"
                    border="none"
                    backgroundColor="none"
                    size="8px"
                  />
                  <IconButton
                    icon="triangle-down"
                    border="none"
                    size="8px"
                    backgroundColor="none"
                  />
                </Grid>
              </Text>
              <Text d="flex">
                <Text mr={2}>PLEDGED AMOUNT</Text>
                <Grid templateRows="1fr 1fr">
                  <IconButton
                    icon="triangle-up"
                    border="none"
                    backgroundColor="none"
                    size="8px"
                    onClick={() => this.props.nameAsci("pledgedAmount")}
                  />
                  <IconButton
                    icon="triangle-down"
                    border="none"
                    size="8px"
                    backgroundColor="none"
                    onClick={() => this.props.nameDsci("pledgedAmount")}
                  />
                </Grid>
              </Text>
              <Text d="flex">
                <Text mr={2}>RECIEVED DATE</Text>
                <Grid templateRows="1fr 1fr">
                  <IconButton
                    icon="triangle-up"
                    border="none"
                    backgroundColor="none"
                    size="8px"
                  />
                  <IconButton
                    icon="triangle-down"
                    border="none"
                    size="8px"
                    backgroundColor="none"
                  />
                </Grid>
              </Text>
              <Text d="flex">
                <Text mr={2}>RECIEVED AMOUNT</Text>
                <Grid templateRows="1fr 1fr">
                  <IconButton
                    icon="triangle-up"
                    border="none"
                    backgroundColor="none"
                    size="8px"
                    onClick={() => this.props.nameAsci("recievedAmount")}
                  />
                  <IconButton
                    icon="triangle-down"
                    border="none"
                    size="8px"
                    backgroundColor="none"
                    onClick={() => this.props.nameAsci("recievedAmount")}
                  />
                </Grid>
              </Text>
              <Text>STATUS</Text>
            </Grid>
            {this.props.state.cou.map((data, idx) => (
              <Grid templateColumns="repeat(8, 1fr)" p={2} gap={2} key={idx}>
                <Text>{data.name}</Text>
                <Text>{data.phone}</Text>
                <Text>{data.email}</Text>
                <Text>{data.pledgedDate}</Text>
                <Text textAlign="center">{data.pledgedAmount}</Text>
                <Text>{data.recievedDate}</Text>
                <Text textAlign="center">{data.recievedAmount}</Text>
                <Text
                  color={
                    data.status === "recieved"
                      ? "green.500"
                      : data.status === "pledged"
                      ? "teal.500"
                      : data.status === "declined"
                      ? "red.500"
                      : "blue.500"
                  }
                >
                  <ListIcon
                    icon={
                      data.status === "recieved"
                        ? "check-circle"
                        : data.status === "pledged"
                        ? "time"
                        : data.status === "declined"
                        ? "warning"
                        : "check-circle"
                    }
                    color={
                      data.status === "recieved"
                        ? "green.500"
                        : data.status === "pledged"
                        ? "teal.500"
                        : data.status === "declined"
                        ? "red.500"
                        : "blue.500"
                    }
                  />
                  {data.status.toUpperCase()}
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
                      <PopoverBody color="white">
                        <Button
                          backgroundColor="teal.500"
                          border="none"
                          onClick={() => this.props.onEdit(data.id)}
                        >
                          {this.props.state.edit ? (
                            <Link to="/newForm">
                              <Icon name="edit" mr={2} />
                            </Link>
                          ) : (
                            <Icon name="edit" mr={2} />
                          )}
                          Edit
                        </Button>
                        <br></br>
                        <Button
                          icon="delete"
                          backgroundColor="teal.500"
                          border="none"
                        >
                          <Icon name="delete" mr={2}></Icon>Delete
                        </Button>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Text>
              </Grid>
            ))}
          </Grid>
          <Grid
            d={["grid", "grid", "grid", "none"]}
            templateRows="repeat(3, 1fr)"
            gap={4}
            mx={4}
            mt={4}
          >
            {this.props.state.cou.map((data, idx) => (
              <Box
                boxShadow="0px 0px 5px 0px rgba(0,0,0,.5)"
                key={idx}
                boredr="1px solid white"
                borderRadius="5px"
              >
                <Grid templateColumns="2fr 1fr" backgroundColor="#CBD5E0">
                  <Text pl={4} py={4}>
                    {data.name}
                  </Text>
                  <Text
                    pl={4}
                    py={4}
                    color={
                      data.status === "recieved"
                        ? "green.500"
                        : data.status === "pledged"
                        ? "teal.500"
                        : data.status === "declined"
                        ? "red.500"
                        : "blue.500"
                    }
                  >
                    <ListIcon
                      icon={
                        data.status === "recieved"
                          ? "check-circle"
                          : data.status === "pledged"
                          ? "time"
                          : data.status === "declined"
                          ? "warning"
                          : "check-circle"
                      }
                      color={
                        data.status === "recieved"
                          ? "green.500"
                          : data.status === "pledged"
                          ? "teal.500"
                          : data.status === "declined"
                          ? "red.500"
                          : "blue.500"
                      }
                    />
                    {data.status.toUpperCase()}
                  </Text>
                </Grid>
                <Grid templateColumns="1fr 1fr">
                  <Text pl={4} py={4}>
                    {data.status === "recieved" || data.status === "reduced"
                      ? "Recieved Amount"
                      : "Pledged Amount"}
                  </Text>
                  <Text pl={4} py={4}>
                    {data.status === "recieved" || data.status === "reduced"
                      ? "Recieved Date"
                      : "Pledged Date"}
                  </Text>
                </Grid>
                <Grid templateColumns="1fr 1fr">
                  <Text pl={4} pb={2}>
                    {data.status === "recieved" || data.status === "reduced"
                      ? data.recievedAmount
                      : data.pledgedAmount}
                  </Text>
                  <Text pl={4} pb={2}>
                    {data.status === "recieved" || data.status === "reduced"
                      ? data.recievedDate
                      : data.pledgedDate}
                  </Text>
                </Grid>
              </Box>
            ))}
          </Grid>
          <Box
            d={["none", "none", "none", "flex"]}
            float="right"
            border="1px solid grey"
            color="blue.800"
            mr={4}
            mt={4}
            h={8}
            borderRadius="5px"
          >
            <ReactPaginate
              previousLabel={<Icon name="chevron-left" />}
              nextLabel={<Icon name="chevron-right" />}
              breakLabel={"/ " + " " + this.props.state.pageCount}
              pageCount={this.props.state.pageCount}
              marginPagesDisplayed={0}
              pageRangeDisplayed={0}
              onPageChange={this.props.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </Box>
          <Button
            bottom="0px"
            d={["flex", "flex", "flex", "none"]}
            mx="3%"
            backgroundColor="white"
            border="1px solid blue"
            borderRadius="5px"
            fontSize="12px"
            h="30px"
            w="94%"
            onClick={this.props.addNew}
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

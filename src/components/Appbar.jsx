import React from "react";
import { Box, Text, Flex, Avatar, Icon } from "@chakra-ui/core";
import ReactPaginate from "react-paginate";
import "../App.css";
function Appbar(props) {
  return (
    <Box
      h={20}
      backgroundColor="blue.800"
      width="100%"
      float="right"
      mt="0px"
      overflow="hidden"
      top="0"
      position="sticky"
    >
      <Flex
        float={["left", "left", "left", "right"]}
        ml={["10%", "10%", "10%", "0%"]}
        mr={["0%", "0%", "0%", "5%"]}
        pt="15px"
      >
        <Avatar src="https://bit.ly/sage-adebayo" border="2px solid white" />
        <Box ml="3" color="white">
          <Text fontWeight="bold" d={["none", "none", "none", "flex"]}>
            Malla Reddy
          </Text>
          <Text fontSize="sm" d={["none", "none", "none", "flex"]}>
            CEO
          </Text>
        </Box>
        <Box
          d={["flex", "flex", "flex", "none"]}
          borderRadius="5px"
          color="white"
          border="1px solid white"
          ml="80%"
          h={8}
          mt={2}
        >
          <ReactPaginate
            previousLabel={<Icon name="chevron-left" />}
            nextLabel={<Icon name="chevron-right" />}
            breakLabel={"/" + props.state.pageCount}
            pageCount={props.state.pageCount}
            marginPagesDisplayed={0}
            pageRangeDisplayed={0}
            onPageChange={props.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Appbar;

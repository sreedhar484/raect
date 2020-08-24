import React from "react";
import { Button, Icon } from "@chakra-ui/core";
function Bottom() {
  return (
    <React.Fragment>
      <Button
        d={["none", "none", "none", "inline"]}
        ml={6}
        bottom="0px"
        position="fixed"
        backgroundColor="white"
        border="1px solid blue"
        borderRadius="5px"
        fontSize="12px"
        h="30px"
      >
        {"  "}
        <Icon name="add" color="blue.500" />
        ADD A NEW ENTRY
      </Button>
    </React.Fragment>
  );
}

export default Bottom;

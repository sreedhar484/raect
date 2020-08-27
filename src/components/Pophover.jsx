import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  IconButton,
} from "@chakra-ui/core";
function Pophover() {
  return (
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
      <PopoverContent zIndex={4} backgroundColor="teal.500" w="150px">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
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
  );
}

export default Pophover;

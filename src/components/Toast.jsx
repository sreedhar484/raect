import React, { useMemo } from "react";
import { useToast, Button } from "@chakra-ui/core";

function Toast() {
  const toast = useToast();
  toast({
    position: "top",
    title: "Account created.",
    description: "We've created your account for you.",
    status: "success",
    duration: 9000,
    isClosable: true,
  });
}
export default Toast;

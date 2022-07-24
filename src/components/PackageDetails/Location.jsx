import { Box } from "@chakra-ui/react";
import React from "react";
import AboutArea from "./AboutArea";
import AboutProperty from "./AboutProperty";

const Location = () => {
  return (
    <Box w="1100px" m="auto" bg="white" boxShadow={"xl"}>
      <AboutArea />
      <AboutProperty />
    </Box>
  );
};

export default Location;

import React from "react";
import { Box } from "@chakra-ui/react";
import PropertyAminities from "./PropertyAminities";
import RoomAminities from "./RoomAminities";

const Aminities = () => {
  return (
    <Box boxShadow={"xl"} p="10px">
      <PropertyAminities />
      <RoomAminities />
    </Box>
  );
};

export default Aminities;

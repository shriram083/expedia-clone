import React from "react";
import { Box } from "@chakra-ui/react";
import PropertyAminities from "./PropertyAminities";
import RoomAminities from "./RoomAminities";

const Aminities = () => {
  return (
    <Box boxShadow="xl" m="auto" p="10px" mb={"50px"} w="1100px" bg="white">
      <PropertyAminities />
      <RoomAminities />
    </Box>
  );
};

export default Aminities;

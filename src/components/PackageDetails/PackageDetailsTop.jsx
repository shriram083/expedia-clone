import React from "react";
import { Box } from "@chakra-ui/react";
import Images from "./Images";
import Overview from "./Overview";
import TripDetails from "./TripDetails";
import ChooseRoom from "./ChooseRoom";

const PackageDetailsTop = () => {
  return (
    <Box width="1100px" m="auto" mb="50px">
      <Box boxShadow="xl" mb="-30px" bg="white">
        <Images />
        <Overview />
      </Box>

      <TripDetails />
      <ChooseRoom />
    </Box>
  );
};

export default PackageDetailsTop;

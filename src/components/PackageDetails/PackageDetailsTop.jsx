import React from "react";
import { Box } from "@chakra-ui/react";
import Images from "./Images";
import Overview from "./Overview";
import TripDetails from "./TripDetails";

const PackageDetailsTop = () => {
  return (
    <Box width="1100px" m="auto">
      <Box boxShadow="xl">
        <Images />
        <Overview />
      </Box>

      <TripDetails />
    </Box>
  );
};

export default PackageDetailsTop;

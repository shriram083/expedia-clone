import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import PackageDetailsTop from "../components/PackageDetails/PackageDetailsTop";
import Location from "../components/PackageDetails/Location";
import Aminities from "../components/PackageDetails/Aminities";

const PackageDetails = () => {
  return (
    <Box>
      <Heading>PackageDetails</Heading>
      <PackageDetailsTop />
      <Location />
      <Aminities />
    </Box>
  );
};

export default PackageDetails;

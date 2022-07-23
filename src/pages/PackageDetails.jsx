import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import PackageDetailsTop from "../components/PackageDetails/PackageDetailsTop";
import Location from "../components/PackageDetails/Location";

const PackageDetails = () => {
  return (
    <Box>
      <Heading>PackageDetails</Heading>
      <PackageDetailsTop />
      <Location />
    </Box>
  );
};

export default PackageDetails;

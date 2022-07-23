import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import PackageDetailsTop from "../components/PackageDetails/PackageDetailsTop";
import Location from "../components/PackageDetails/Location";
import Aminities from "../components/PackageDetails/Aminities";
import Policy from "../components/PackageDetails/Policy";

const PackageDetails = () => {
  return (
    <Box>
      <PackageDetailsTop />
      <Location />
      <Aminities />
      <Policy />
    </Box>
  );
};

export default PackageDetails;

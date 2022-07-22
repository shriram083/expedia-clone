import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const TripDetails = () => {
  return (
    <Box
      p="20px"
      boxShadow="xl"
      mb="30px"
      display={"flex"}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box textAlign="left">
        <Heading fontSize={"17px"}>Trip Details</Heading>
        <Text>
          {
            "Aug 3 - Aug 4 • Stay (1 night) + Flight (2 roundtrip tickets), taxes & fees"
          }
        </Text>
      </Box>
      <Box textAlign="right">
        <Heading fontSize={"17px"}>$210</Heading>
        <Text>per traveler (includes 1 room)</Text>
      </Box>
    </Box>
  );
};

export default TripDetails;

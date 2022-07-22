import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";

const RoomCard = ({ name, price, image }) => {
  return (
    <Box boxShadow="base" width="350px" borderRadius="10px" textAlign="left">
      <Image src={image} borderRadius="10px 10px 0px 0px" h="200px" w="350px" />
      <Heading fontSize="16px">{name}</Heading>
      <Heading>{price}</Heading>
    </Box>
  );
};

export default RoomCard;

import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import RoomCard from "./RoomCard";

const ChooseRoom = () => {
  return (
    <Box>
      <Heading textAlign="left" mb="20px">
        Choose Room
      </Heading>
      <Box
        boxShadow="xl"
        display="flex"
        alignItems="center"
        gap="20px"
        p="20px"
      >
        <Image src="https://a.travel-assets.com/travel-assets-manager/03052020/illustration__free__cancellation__sml.svg" />
        <Box textAlign="left">
          <Heading fontSize="14px">Flexibility matters</Heading>
          <Text fontSize="15px">
            All rooms are fully refundable. You can change or cancel this stay
            if plans change.
          </Text>
        </Box>
      </Box>
      <Box mt="20px" mb="20px" display="flex" justifyContent="space-between">
        <RoomCard
          name={"Executive Room, Non Smoking"}
          price={"+ $1"}
          image={
            "https://images.trvl-media.com/hotels/1000000/200000/199500/199404/c68feed4.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
          }
        />
        <RoomCard
          name={"Club Room, City View, Tower"}
          price={"+ $7"}
          image={
            "https://images.trvl-media.com/hotels/1000000/200000/199500/199404/32679c93.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
          }
        />

        <RoomCard
          name={"Club Suite, 1 King Bed, Non Smoking, City View"}
          price={"+ $16"}
          image={
            "https://images.trvl-media.com/hotels/1000000/200000/199500/199404/4686cad2.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
          }
        />
      </Box>
    </Box>
  );
};

export default ChooseRoom;

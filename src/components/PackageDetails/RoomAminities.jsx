import { Box, Flex, Heading, List, ListItem } from "@chakra-ui/react";
import React from "react";
import { MdDone, MdRestaurantMenu } from "react-icons/md";
import { FaBed, FaShower } from "react-icons/fa";

const RoomAminities = () => {
  return (
    <Flex>
      <Heading p={"10px"} w="350px" fontSize="25px">
        Room Animities
      </Heading>
      <Box p={"10px"} w="350px">
        <Box textAlign="left">
          <Flex alignItems="center" gap="20px">
            <FaBed fontSize="25px" />
            <Heading fontSize="25px">Bedroom</Heading>
          </Flex>
          <List m="20px 0px 20px 50px">
            <ListItem>Air conditioning (climate-controlled)</ListItem>
            <ListItem>Bed sheets</ListItem>
            <ListItem>Blackout drapes/curtains</ListItem>
            <ListItem>Pillow menu</ListItem>
            <ListItem>Rollaway/extra beds (surcharge)</ListItem>
          </List>
        </Box>
        <Box textAlign="left">
          <Flex alignItems="center" gap="20px">
            <FaShower fontSize="25px" />
            <Heading fontSize="25px">Bathroom</Heading>
          </Flex>
          <List m="20px 0px 20px 50px">
            <ListItem>Bathtub or shower</ListItem>
            <ListItem>Free toiletries</ListItem>
            <ListItem>Hair dryer</ListItem>
            <ListItem>Private bathroom</ListItem>
            <ListItem>Towels</ListItem>
          </List>
        </Box>
      </Box>
      <Box p={"10px"} w="350px">
        <Box textAlign="left">
          <Flex alignItems="center" gap="20px">
            <MdDone fontSize="25px" />
            <Heading fontSize="25px">Entertainment</Heading>
          </Flex>
          <List m="20px 0px 20px 50px">
            <ListItem>Cable/satellite channels</ListItem>
          </List>
        </Box>
        <Box textAlign="left">
          <Flex alignItems="center" gap="20px">
            <MdRestaurantMenu fontSize="25px" />
            <Heading fontSize="25px">Food and drink</Heading>
          </Flex>
          <List m="20px 0px 20px 50px">
            <ListItem>Coffee/tea maker</ListItem>
            <ListItem>Free bottled water</ListItem>
          </List>
        </Box>
        <Box textAlign="left">
          <Flex alignItems="center" gap="20px">
            <MdDone fontSize="25px" />
            <Heading fontSize="25px">More</Heading>
          </Flex>
          <List m="20px 0px 20px 50px">
            <ListItem>Desk</ListItem>
            <ListItem>Iron/ironing board</ListItem>
            <ListItem>Phone</ListItem>
            <ListItem>Safe</ListItem>
            <ListItem>Slippers</ListItem>
          </List>
        </Box>
      </Box>
    </Flex>
  );
};

export default RoomAminities;

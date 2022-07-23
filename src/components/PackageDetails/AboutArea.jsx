import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { MdLocationOn, MdRestaurantMenu, MdFlight } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { FaBusAlt } from "react-icons/fa";

const AboutArea = () => {
  return (
    <Box boxShadow={"xl"} p="10px" mb="50px">
      <Flex>
        <Box
          w="350px"
          textAlign="left"
          display="flex"
          flexDirection="column"
          gap="20px"
          p="10px"
        >
          <Heading fontSize="25px">About this area</Heading>
          <Heading fontSize="20px">Hyderabad</Heading>
          <Text>
            ITC Kakatiya, a Luxury Collection Hotel, Hyderabad is located in
            Begumpet, a neighborhood in Hyderabad, and is near the airport and
            near a metro station. Birla Mandir Temple and Charminar are notable
            landmarks, and travelers looking to shop may want to visit Hyderabad
            Central Mall. Traveling with kids? Don't miss Snow World and Nehru
            Zoological Park. Spend some time exploring the area's activities,
            including outlet shopping.
          </Text>
          <Flex
            cursor="pointer"
            color="#3662d8"
            fontWeight="500"
            _hover={{ textDecoration: "underline" }}
            alignItems="center"
            gap="10px"
          >
            <Text>Visit our Travel guide</Text>
            <BsBoxArrowInUpRight />
          </Flex>
        </Box>
        <Box w="750px">
          <Box border="1px solid #e3e3e3" mb="10px">
            <Image
              w="750px"
              src="https://maps.googleapis.com/maps/api/staticmap?channel=expedia-HotelInformation&maptype=roadmap&format=jpg&zoom=13&scale=&size=660x330&markers=icon:https://a.travel-assets.com/shopping-pwa/images/his-preview-marker.png%7C17.432514,78.457279&key=AIzaSyCYjQus5kCufOpSj932jFoR_AJiL9yiwOw&signature=djSearu-15JKvJ5K6TS3KENwawY="
            />
            <Text
              cursor="pointer"
              color="#3662d8"
              fontWeight="500"
              _hover={{ textDecoration: "underline" }}
              m="10px 0px"
            >
              View in map
            </Text>
          </Box>
          <Flex>
            <Box w="360px" textAlign="left">
              <Box>
                <Flex alignItems="center" gap="20px">
                  <MdLocationOn fontSize="25px" />
                  <Heading fontSize="25px">What's nearby</Heading>
                </Flex>
                <List m="20px 0px 20px 50px">
                  <ListItem>Hyderabad Central Mall - 11 min walk</ListItem>
                  <ListItem>GVK One Mall - 6 min drive</ListItem>
                  <ListItem>KIMS Hospitals - 15 min drive</ListItem>
                  <ListItem>Hussain Sagar Lake - 23 min drive</ListItem>
                  <ListItem>Jalavihar - 27 min drive</ListItem>
                </List>
              </Box>
              <Box>
                <Flex alignItems="center" gap="20px">
                  <AiFillCar fontSize="25px" />
                  <Heading fontSize="25px">Getting around</Heading>
                </Flex>
                <Box
                  p="10px 10px 10px 30px"
                  display="flex"
                  flexDirection={"column"}
                  gap="10px"
                >
                  <Flex alignItems="center" gap="10px">
                    <FaBusAlt />
                    <Text>Hyderabad Begumpet Station - 10 min walk</Text>
                  </Flex>
                  <Flex alignItems="center" gap="10px">
                    <MdFlight />
                    <Text>Rajiv Gandhi Intl. Airport (HYD) - 60 min drive</Text>
                  </Flex>
                </Box>
              </Box>
            </Box>
            <Box w="360px" textAlign="left">
              <Flex alignItems="center" gap="20px">
                <MdRestaurantMenu fontSize="25px" />
                <Heading fontSize="25px">Restaurants</Heading>
              </Flex>
              <List m="20px 0px 20px 50px">
                <ListItem>Hyderabad Central Mall - 11 min walk</ListItem>
                <ListItem>GVK One Mall - 6 min drive</ListItem>
                <ListItem>KIMS Hospitals - 15 min drive</ListItem>
                <ListItem>Hussain Sagar Lake - 23 min drive</ListItem>
                <ListItem>Jalavihar - 27 min drive</ListItem>
              </List>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutArea;

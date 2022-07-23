import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import {
  MdOutlinePool,
  MdOutlineLocalParking,
  MdRestaurantMenu,
  MdSanitizer,
  MdCleanHands,
  MdMasks,
  MdLocationOn,
  MdFlight,
} from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { GiFairyWings } from "react-icons/gi";
import { FaSpa, FaPeopleArrows } from "react-icons/fa";
import React from "react";

const Overview = () => {
  return (
    <Box m={"50px"} textAlign={"left"} display="flex" pb={"20px"}>
      <Box w="700px">
        <Box gap={"10px"}>
          <Heading>ITC Kakatiya, a Luxury Collection Hotel, Hyderabad</Heading>
          <Flex>
            <AiFillStar color="#727483" />
            <AiFillStar color="#727483" />
            <AiFillStar color="#727483" />
            <AiFillStar color="#727483" />
            <AiFillStar color="#727483" />
          </Flex>
          <Heading>4.2/5 Very Good</Heading>
          <Text>Guests rated this property 4.2/5 for cleanliness.</Text>
          <Text>{"See All Reviews >"}</Text>
        </Box>
        <Box>
          <Heading fontSize={"20px"} fontWeight="500" mt={"20px"}>
            Popular Animities
          </Heading>
          <Flex
            justifyContent={"space-between"}
            fontSize="20px"
            w={"500px"}
            mt="20px"
          >
            <Box>
              <Flex alignItems="center" gap="10px">
                <MdOutlinePool />
                <Text>Pool</Text>
              </Flex>
              <Flex alignItems="center" gap="10px">
                <MdOutlineLocalParking />
                <Text>Parking included</Text>
              </Flex>
              <Flex alignItems="center" gap="10px">
                <GiFairyWings />
                <Text>Air conditioning</Text>
              </Flex>
            </Box>
            <Box>
              <Flex alignItems="center" gap="10px">
                <FaSpa />
                <Text>Spa</Text>
              </Flex>
              <Flex alignItems="center" gap="10px">
                <MdRestaurantMenu />
                <Text>Restaurant</Text>
              </Flex>
              <Flex alignItems="center" gap="10px">
                <CgGym />
                <Text>Gym</Text>
              </Flex>
            </Box>
          </Flex>
          <Text color={"blue.500"} cursor="pointer">
            {" See All >"}
          </Text>
        </Box>

        <Box>
          <Heading fontSize={"20px"} fontWeight="500" mt={"20px"}>
            Cleaning and safety practices
          </Heading>
          <Flex
            justifyContent={"space-between"}
            fontSize="20px"
            w={"600px"}
            mt="20px"
          >
            <Box>
              <Flex alignItems="center" gap="10px">
                <MdSanitizer />
                <Text>Cleaned with disinfectant</Text>
              </Flex>
              <Flex alignItems="center" gap="10px">
                <MdCleanHands />
                <Text>Hand sanitizer provided</Text>
              </Flex>
            </Box>
            <Box>
              <Flex alignItems="center" gap="10px">
                <MdMasks />
                <Text>Personal protective equipment</Text>
              </Flex>
              <Flex alignItems="center" gap="10px">
                <FaPeopleArrows />
                <Text>Social distancing</Text>
              </Flex>
            </Box>
          </Flex>
          <Text color={"blue.500"} cursor="pointer">
            {" See All >"}
          </Text>
        </Box>
      </Box>
      <Box w="300px" display="flex" flexDirection="column" gap="10px">
        <Image src="https://maps.googleapis.com/maps/api/staticmap?channel=expedia-HotelInformation&maptype=roadmap&format=jpg&zoom=13&scale=&size=375x250&markers=icon:https://a.travel-assets.com/shopping-pwa/images/his-preview-marker.png%7C17.432514,78.457279&key=AIzaSyCYjQus5kCufOpSj932jFoR_AJiL9yiwOw&signature=_6aDzPc7L4rEraDl5EBnrysvkx8=" />
        <Text>6 -3 -1187, Begumpet, Hyderabad, Andhra Pradesh, 500016</Text>
        <Text color={"blue.600"} cursor="pointer">
          {" View in a Map >"}
        </Text>
        <Heading fontSize={"20px"} fontWeight="500" mt={"20px"}>
          Explore the Area
        </Heading>
        <Flex justifyContent={"space-between"} gap="10px" alignItems="center">
          <MdLocationOn />
          <Text w={"170px"}>Hyderabad Central Mall</Text>
          <Text>11 min walk</Text>
        </Flex>
        <Flex justifyContent={"space-between"} gap="10px" alignItems="center">
          <MdLocationOn />
          <Text w={"170px"}>Hussain Sagar Lake</Text>
          <Text>23 min walk</Text>
        </Flex>
        <Flex justifyContent={"space-between"} gap="10px" alignItems="center">
          <MdLocationOn />
          <Text w={"170px"}>Jalavihar</Text>
          <Text>27 min walk</Text>
        </Flex>
        <Flex justifyContent={"space-between"} gap="10px" alignItems="center">
          <MdFlight />
          <Text w={"170px"}>Hyderabad (HYD-Rajiv Gandhi Intl.)</Text>
          <Text>60 min drive</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Overview;

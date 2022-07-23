import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiArea } from "react-icons/bi";
import { FaCity, FaBed } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdLocalParking } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";

const RoomCard = ({ name, price, image }) => {
  const [value, setValue] = useState("1");
  return (
    <Box boxShadow="base" width="350px" borderRadius="10px" textAlign="left">
      <Image src={image} borderRadius="10px 10px 0px 0px" h="200px" w="350px" />
      <Heading m="10px" fontSize="16px">
        {name}
      </Heading>
      <Box
        p="20px 0px 20px 20px"
        borderBottom="1px solid #e3e3e3"
        display="flex"
        flexDirection="column"
        gap="10px"
      >
        <Flex gap="20px" alignItems="center">
          <BiArea fontSize="20px" />
          <Text>334 sq ft</Text>
        </Flex>
        <Flex gap="20px" alignItems="center">
          <FaCity fontSize="20px" />
          <Text>City view</Text>
        </Flex>
        <Flex gap="20px" alignItems="center">
          <BsFillPeopleFill fontSize="20px" />
          <Text>Sleeps 4</Text>
        </Flex>
        <Flex gap="20px" alignItems="center">
          <FaBed fontSize="20px" />
          <Text>1 Queen Bed OR 2 Twin Beds</Text>
        </Flex>
        <Flex gap="20px" alignItems="center">
          <MdLocalParking fontSize="20px" />
          <Text>Free self parking</Text>
        </Flex>
        <Box>
          <Flex alignItems="center" gap={"10px"} cursor="pointer">
            <Text fontSize="18px" _hover={{ textDecoration: "underline" }}>
              Fully Refundable
            </Text>
            <AiOutlineInfoCircle />
          </Flex>
          <Text fontSize="15px">Before Wed, Aug 3</Text>
        </Box>
        <Text
          cursor="pointer"
          color="#3662d8"
          fontWeight="500"
          _hover={{ textDecoration: "underline" }}
        >
          {"More Details >"}
        </Text>
      </Box>
      <Box p="15px" mb="100px">
        <Heading mb="10px" fontSize="15px">
          Extras
        </Heading>
        <RadioGroup onChange={setValue} value={value}>
          <Stack>
            <Radio value="1">
              <Flex justifyContent="space-between" w="300px">
                <Text>Breakfast buffet</Text>
                <Text>+ $0</Text>
              </Flex>
            </Radio>
            <Radio value="2">
              <Flex justifyContent="space-between" w="300px">
                <Text>Half board</Text>
                <Text>+ $16</Text>
              </Flex>
            </Radio>
            <Radio value="3">
              <Flex justifyContent="space-between" w="300px">
                <Text>All Meals</Text>
                <Text>+ $32</Text>
              </Flex>
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Flex
        mb="20px"
        justifyContent="space-between"
        alignItems="center"
        p="10px"
      >
        <Box>
          <Heading fontSize="22px">{price}</Heading>
          <Text fontSize="10px">per traveler (includes taxes and fees)</Text>
        </Box>
        <Box textAlign="right">
          <Text fontSize="10px" color="red" m="5px">
            We have 5 left
          </Text>
          <Button colorScheme="blue">Reserve</Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default RoomCard;

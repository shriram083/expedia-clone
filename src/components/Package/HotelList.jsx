import { Box, Flex, Icon, Image, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { GrTag } from "react-icons/gr";
import { useSelector } from "react-redux";

const HotelList = () => {
  const hotelList = useSelector((state) => state.appReducer.hotels);
  // console.log(hotelList);

  console.log(hotelList);

  return (
    <Box w="85%" mt="10px">
      {hotelList.map((el) => (
        <Flex
          mt="15px"
          //   border="1px solid"
          bg="whiteAlpha.900"
          w="90%"
          borderRadius="10px"
          key={el.id}
          cursor="pointer"
        >
          <Box w="95%">
            <Flex textAlign="left">
              {/* img box */}
              <Box h="252px" w="224">
                <Image w="100%" h="100%" src={el.img}></Image>
              </Box>
              <VStack alignItems="flex-start" p="4" w="70%">
                {/* 1st box  */}
                <Box>
                  <Text fontWeight="bold" fontSize="25px" textAlign="left">
                    {el.name}
                  </Text>
                  <Text fontSize="large">{el.details}</Text>
                </Box>
                {/* 2nd box */}
                <Box>
                  <Text fontWeight="bold" mt="15px">
                    {el.p1}
                  </Text>
                  <Text>{el.p2}</Text>
                </Box>
                {/* 3rd box */}
                <Box>
                  <Text color="green.700">{el?.refund ? el.refund : ""}</Text>
                  <Text color="green.700">{el?.review ? el.review : ""}</Text>
                </Box>
                {/* 4rth box */}
                <Box textAlign="left">
                  <Text>{`${el.rating}/5 ${el.reviews} `}</Text>
                </Box>
              </VStack>
              <VStack w="35.5%" p="0.5" alignItems="flex-end">
                {/* tag box */}
                <Flex
                  border="1px solid yellow"
                  p="1"
                  alignItems={"center"}
                  borderRadius={"15px"}
                  mt="130px"
                  bg="#F4C94A"
                  justifyContent="space-around"
                >
                  <Box>
                    <Icon as={GrTag}></Icon>
                  </Box>

                  <Box ml="8px">
                    <Text>{el?.tag ? el.tag : "Member Price avilable"}</Text>
                  </Box>
                </Flex>
                {/* price box  */}
                <Box w="30%" alignItems="flex-end">
                  <Text fontWeight="bold" fontSize="25px">
                    {el.price}
                  </Text>
                  <Text>{el.total}</Text>
                </Box>
              </VStack>
            </Flex>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default HotelList;

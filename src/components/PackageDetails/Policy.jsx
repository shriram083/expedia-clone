import {
  Box,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdDone, MdRestaurantMenu } from "react-icons/md";
import { FaBed, FaShower } from "react-icons/fa";

const Policy = () => {
  return (
    <Flex w={"1100px"} boxShadow="xl" m="auto" mb={"50px"} bg="white">
      <Heading p={"10px"} w="350px" fontSize="25px">
        Policies
      </Heading>
      <Box p={"10px"} w="350px">
        <Box textAlign="left">
          <Heading fontSize="25px">Check-in</Heading>

          <List m="20px 0px 20px 0px">
            <ListItem>Check-in from 3:00 PM - midnight</ListItem>
            <ListItem>Early check-in subject to availability</ListItem>
            <ListItem>
              Early check-in is available for a fee (amount varies)
            </ListItem>
            <ListItem>Late check-in subject to availability</ListItem>
            <ListItem>Minimum check-in age - 18</ListItem>
          </List>
        </Box>
        <Box textAlign="left">
          <Heading fontSize="25px">Special check-in instructions</Heading>

          <List m="20px 0px 20px 0px">
            <ListItem>Front desk staff will greet guests on arrival</ListItem>
          </List>
          <Text>
            To register at this property, guests who are Indian citizens must
            provide a valid photo identity card issued by the Government of
            India; travelers who are not citizens of India must present a valid
            passport and visa.
          </Text>
        </Box>
        <Box textAlign="left" mt={"20px"}>
          <Heading fontSize="25px">Access methods</Heading>

          <List m="20px 0px 20px 0px">
            <ListItem>Staffed front desk</ListItem>
          </List>
        </Box>
        <Box textAlign="left" mt={"20px"}>
          <Heading fontSize="25px">Pets</Heading>

          <List m="20px 0px 20px 0px">
            <ListItem>No pets or service animals allowed</ListItem>
          </List>
        </Box>
        <Box textAlign="left" mt={"20px"}>
          <Heading fontSize="25px">Children and extra beds</Heading>

          <List m="20px 0px 20px 0px">
            <ListItem>Children are welcome</ListItem>
            <ListItem>
              Kids stay free! Children stay free when using existing bedding
            </ListItem>
            <ListItem>
              Rollaway/extra beds are available for INR 2000.0 per night
            </ListItem>
            <ListItem>Cribs (infant beds) are not available</ListItem>
          </List>
        </Box>
        <Box textAlign="left" mt={"20px"}>
          <Heading fontSize="25px">Property payment types</Heading>

          <Flex m="20px 0px" gap="2px">
            <Image src="https://a.travel-assets.com/dms-svg/payments/cards-cc_american_express.svg" />
            <Image src="https://a.travel-assets.com/dms-svg/payments/cards-cc_diners_club.svg" />
            <Image src="https://a.travel-assets.com/dms-svg/payments/cards-cc_discover.svg" />
            <Image src="https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg" />
            <Image src="https://a.travel-assets.com/dms-svg/payments/cards-cc_visa.svg" />
          </Flex>
        </Box>
      </Box>
      <Box p={"10px"} w="350px">
        <Box textAlign="left">
          <Heading fontSize="25px">Check-out</Heading>

          <List m="20px 0px 20px 0px">
            <ListItem>Check-out before noon</ListItem>
            <ListItem>Late check-out subject to availability</ListItem>
            <ListItem>A late check-out fee will be charged</ListItem>
            <ListItem>Express check-out</ListItem>
          </List>
        </Box>
      </Box>
    </Flex>
  );
};

export default Policy;

import { Box, Flex, Heading, List, ListItem } from "@chakra-ui/react";
import React from "react";
import {
  MdDone,
  MdLocalParking,
  MdRestaurantMenu,
  MdToday,
  MdFamilyRestroom,
  MdOutlineLocalConvenienceStore,
  MdRoomService,
  MdBusinessCenter,
  MdOutdoorGrill,
} from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import { FaSpa, FaWheelchair } from "react-icons/fa";

const PropertyAminities = () => {
  return (
    <Flex borderBottom={"1px solid #e3e3e3"}>
      <Heading p={"10px"} w="350px" fontSize="25px">
        Property Animities
      </Heading>
      <Box p={"10px"} w="350px">
        <Box textAlign="left">
          <Flex alignItems="center" gap="20px">
            <AiOutlineWifi fontSize="25px" />
            <Heading fontSize="25px">Internet</Heading>
          </Flex>
          <List m="20px 0px 20px 50px">
            <ListItem>Available in all rooms: WiFi</ListItem>
          </List>
        </Box>
        <Box textAlign="left">
          <Flex alignItems="center" gap="20px">
            <MdLocalParking fontSize="25px" />
            <Heading fontSize="25px">Parking and transportation</Heading>
          </Flex>
          <List m="20px 0px 20px 50px">
            <ListItem>Free self parking on site</ListItem>
            <ListItem>Free valet parking on site</ListItem>
            <ListItem>Wheelchair-accessible parking available</ListItem>
            <ListItem>Limo/town car service</ListItem>
          </List>
        </Box>
        <Box textAlign="left">
          <Flex alignItems="center" gap="20px">
            <MdRestaurantMenu fontSize="25px" />
            <Heading fontSize="25px">Food and drink</Heading>
          </Flex>
          <List m="20px 0px 20px 50px">
            <ListItem>2 restaurants and 1 coffee shop/cafe</ListItem>
            <ListItem>1 bar</ListItem>
            <ListItem>24-hour room service</ListItem>
            <ListItem>Coffee/tea in common area(s)</ListItem>
          </List>
        </Box>
        <Box textAlign="left">
          <Flex alignItems="center" gap="20px">
            <MdRestaurantMenu fontSize="25px" />
            <Heading fontSize="25px">Restaurants on site</Heading>
          </Flex>
          <List m="20px 0px 20px 50px">
            <ListItem>Deccan Pavilion</ListItem>
            <ListItem>{"Kebabs & Kurries"}</ListItem>
            <ListItem>Marco Polo</ListItem>
            <ListItem>Dakshin</ListItem>
          </List>
        </Box>
        <Box textAlign="left">
          <Flex alignItems="center" gap="20px">
            <MdToday fontSize="25px" />
            <Heading fontSize="25px">Things to do</Heading>
          </Flex>
          <List m="20px 0px 20px 50px">
            <ListItem>Fitness center</ListItem>
            <ListItem>Full-service spa</ListItem>
            <ListItem>Outdoor pool</ListItem>
            <ListItem>Sauna</ListItem>
          </List>
        </Box>
        <Box textAlign="left">
          <Flex alignItems="center" gap="20px">
            <MdFamilyRestroom fontSize="25px" />
            <Heading fontSize="25px">Family friendly</Heading>
          </Flex>
          <List m="20px 0px 20px 50px">
            <ListItem>Laundry facilities</ListItem>
            <ListItem>Outdoor pool</ListItem>
            <ListItem>Rollaway/extra beds (surcharge)</ListItem>
          </List>
        </Box>
        <Box textAlign="left">
          <Flex alignItems="center" gap="20px">
            <MdOutlineLocalConvenienceStore fontSize="25px" />
            <Heading fontSize="25px">Conveniences</Heading>
          </Flex>
          <List m="20px 0px 20px 50px">
            <ListItem>Ballroom</ListItem>
            <ListItem>Banquet hall</ListItem>
            <ListItem>Elevator</ListItem>
            <ListItem>Front-desk safe</ListItem>
          </List>
        </Box>
        <Box textAlign="left">
          <Flex alignItems="center" gap="20px">
            <MdRoomService fontSize="25px" />
            <Heading fontSize="25px">Guest services</Heading>
          </Flex>
          <List m="20px 0px 20px 50px">
            <ListItem>24-hour front desk</ListItem>
            <ListItem>Concierge services</ListItem>
            <ListItem>Daily housekeeping</ListItem>
            <ListItem>Dry cleaning service</ListItem>
            <ListItem>Laundry facilities</ListItem>
            <ListItem>Porter/bellhop</ListItem>
            <ListItem>Tour/ticket assistance</ListItem>
            <ListItem>Wedding services</ListItem>
          </List>
        </Box>
      </Box>
      <Box p={"10px"} w="350px">
        <Box textAlign="left">
          <Flex alignItems="center" gap="20px">
            <MdBusinessCenter fontSize="25px" />
            <Heading fontSize="25px">Business services</Heading>
          </Flex>
          <List m="20px 0px 20px 50px">
            <ListItem>24-hour business center</ListItem>
            <ListItem>Conference center</ListItem>
          </List>
        </Box>
        <Box textAlign="left">
          <Flex alignItems="center" gap="20px">
            <MdOutdoorGrill fontSize="25px" />
            <Heading fontSize="25px">Outdoors</Heading>
          </Flex>
          <List m="20px 0px 20px 50px">
            <ListItem>Pool sun loungers</ListItem>
          </List>
        </Box>
        <Box textAlign="left">
          <Flex alignItems="center" gap="20px">
            <FaSpa fontSize="25px" />
            <Heading fontSize="25px">Spa</Heading>
          </Flex>
          <List m="20px 0px 20px 50px">
            <ListItem>4 treatment rooms</ListItem>
            <ListItem>Ayurvedic treatments</ListItem>
            <ListItem>Body scrubs</ListItem>
            <ListItem>Body treatments</ListItem>
            <ListItem>Body wraps</ListItem>
            <ListItem>Manicures and pedicures</ListItem>
            <ListItem>Massages</ListItem>
            <ListItem>Massage/treatment rooms</ListItem>
            <ListItem>Sauna</ListItem>
            <ListItem>Spa open daily</ListItem>
          </List>
        </Box>
        <Box textAlign="left">
          <Flex alignItems="center" gap="20px">
            <FaWheelchair fontSize="25px" />
            <Heading fontSize="25px">Accessibility</Heading>
          </Flex>
          <List m="20px 0px 20px 50px">
            <ListItem>
              If you have requests for specific accessibility needs, please
              contact the property using the information on the reservation
              confirmation received after booking.
            </ListItem>
            <ListItem>Well-lit path to entrance</ListItem>
            <ListItem>Wheelchair-accessible business center</ListItem>
            <ListItem>Wheelchair-accessible concierge desk</ListItem>
            <ListItem>Wheelchair-accessible fitness center</ListItem>
            <ListItem>Wheelchair-accessible lounge</ListItem>
            <ListItem>Wheelchair-accessible parking</ListItem>
            <ListItem>Wheelchair-accessible path of travel</ListItem>
            <ListItem>Wheelchair-accessible path to elevator</ListItem>
            <ListItem>Wheelchair-accessible pool</ListItem>
            <ListItem>Wheelchair-accessible public washroom</ListItem>
            <ListItem>Wheelchair-accessible registration desk</ListItem>
            <ListItem>Wheelchair-accessible restaurant</ListItem>
          </List>
        </Box>
        <Box textAlign="left">
          <Flex alignItems="center" gap="20px">
            <MdDone fontSize="25px" />
            <Heading fontSize="25px">More</Heading>
          </Flex>
          <List m="20px 0px 20px 50px">
            <ListItem>Designated smoking areas</ListItem>
          </List>
        </Box>
      </Box>
    </Flex>
  );
};

export default PropertyAminities;

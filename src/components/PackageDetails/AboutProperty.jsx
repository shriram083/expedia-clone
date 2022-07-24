import React from "react";
import { Box, Flex, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { WiStars } from "react-icons/wi";
import { FaPeopleArrows } from "react-icons/fa";
import { MdDone } from "react-icons/md";

const AboutProperty = () => {
  return (
    <Box boxShadow={"xl"} p="20px" mb={"50px"} textAlign="left">
      <Flex borderBottom="1px solid #e3e3e3" p="10px">
        <Heading w="400px" fontSize={"25px"}>
          About this property
        </Heading>
        <Box w="700px" display="flex" flexDirection="column" gap="20px">
          <Heading fontSize={"20px"}>
            ITC Kakatiya, a Luxury Collection Hotel, Hyderabad
          </Heading>
          <Text>5-star luxury hotel in the heart of Begumpet</Text>
          <Text>
            Take advantage of a coffee shop/cafe, dry cleaning/laundry services,
            and a bar at ITC Kakatiya, a Luxury Collection Hotel, Hyderabad.
            Treat yourself to Ayurvedic treatments, a body scrub, or a body wrap
            at Kaya Kalp, the onsite spa. Enjoy international cuisine, brunch,
            and happy hour at the two
          </Text>
          <Heading fontSize={"20px"}>Languages</Heading>
          <Text>English, Hindi</Text>
        </Box>
      </Flex>

      <Flex p="10px">
        <Heading w="400px" fontSize={"25px"}>
          Cleaning and safety practices
        </Heading>
        <Box w="700px" display="flex" flexDirection="column" gap="20px">
          <Box textAlign="left">
            <Flex alignItems="center" gap="20px">
              <WiStars fontSize="25px" />
              <Heading fontSize="25px">Enhanced cleanliness measures</Heading>
            </Flex>
            <List m="20px 0px 20px 50px">
              <ListItem>Disinfectant is used to clean the property</ListItem>
              <ListItem>
                High-touch surfaces are cleaned and disinfected
              </ListItem>
              <ListItem>
                Sheets and towels are washed at 60°C/140°F or hotter
              </ListItem>
              <ListItem>
                Follows standard cleaning and disinfection practices of
                Commitment to Clean (Marriott)
              </ListItem>
            </List>
          </Box>
          <Box textAlign="left">
            <Flex alignItems="center" gap="20px">
              <FaPeopleArrows fontSize="25px" />
              <Heading fontSize="25px">Social distancing</Heading>
            </Flex>
            <List m="20px 0px 20px 50px">
              <ListItem>Contactless check-out</ListItem>
              <ListItem>Social distancing measures in place</ListItem>
            </List>
          </Box>
          <Box textAlign="left">
            <Flex alignItems="center" gap="20px">
              <MdDone fontSize="25px" />
              <Heading fontSize="25px">Safety measures</Heading>
            </Flex>
            <List m="20px 0px 20px 50px">
              <ListItem>Temperature checks given to staff</ListItem>
              <ListItem>Temperature checks available for guests</ListItem>
              <ListItem>Masks and gloves available</ListItem>
              <ListItem>Hand sanitizer provided</ListItem>
            </List>
          </Box>
          <Text>This information is provided by our partners.</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutProperty;

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Checkbox,
  Flex,
  HStack,
  Icon,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { MdLocationOn } from "react-icons/md";
import { ImUser } from "react-icons/im";
import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";

const TopInputBox = () => {
  return (
    <Box width="70%" padding="5px" margin="auto">
      <VStack padding="5">
        <HStack>
          <Flex border="1px solid black" h="50px" w="450px" borderRadius="md">
            <Box
              style={{
                width: "25px",
                height: "25px",
                padding: "auto",
                margin: "auto",
              }}
            >
              <Icon fontSize="2xl" as={MdLocationOn} />
            </Box>

            <Flex
              flexDirection="column"
              alignItems="flex-start"
              marginLeft="10px"
            >
              <label>Leaving from</label>
              <Input
                w="400px"
                size="sm"
                fontWeight="bold"
                fontSize="lg"
                variant="unstyled"
                placeholder="Leaving From"
              />
            </Flex>
          </Flex>
          <Flex borderRadius="md" border="1px solid black" h="50px" w="450px">
            <Box
              style={{
                width: "25px",
                height: "25px",
                padding: "auto",
                margin: "auto",
              }}
            >
              <Icon fontSize="2xl" as={MdLocationOn} />
            </Box>
            <Flex
              flexDirection="column"
              alignItems="flex-start"
              marginLeft="10px"
            >
              <label>Going to</label>
              <Input
                w="400px"
                size="sm"
                fontWeight="bold"
                fontSize="lg"
                variant="unstyled"
                placeholder="Going to"
              />
            </Flex>
          </Flex>
          <Flex border="1px solid black" h="50px" w="450px" borderRadius="md">
            <Box
              style={{
                width: "25px",
                height: "25px",
                padding: "auto",
                margin: "auto",
              }}
            >
              <Icon fontSize="2xl" as={ImUser}></Icon>
            </Box>

            <Flex
              flexDirection="column"
              alignItems="flex-start"
              marginLeft="10px"
            >
              <label>Travelers</label>
              <Input
                w="400px"
                size="sm"
                fontWeight="bold"
                fontSize="lg"
                variant="unstyled"
                placeholder="Leaving From"
              />
            </Flex>
          </Flex>
        </HStack>
        <HStack>
          <Flex border="1px solid black" h="50px" w="450px" borderRadius="md">
            <Box
              style={{
                width: "25px",
                height: "25px",
                padding: "auto",
                margin: "auto",
              }}
            >
              <Icon fontSize="2xl" as={MdOutlineAirlineSeatReclineExtra}></Icon>
            </Box>

            <Flex
              flexDirection="column"
              alignItems="flex-start"
              marginLeft="10px"
            >
              <label>Preferred Class</label>
              <Select
                w="400px"
                size="sm"
                fontWeight="bold"
                fontSize="lg"
                variant="unstyled"
                placeholder="Economy"
              >
                <option value="econy">Econy</option>
                <option value="premium-economy">Premium Economy</option>
                <option value="buisness">Buisness</option>
                <option value="firstClass">FirstClass</option>
              </Select>
            </Flex>
          </Flex>
          <Flex border="1px solid black" h="50px" w="450px" borderRadius="md">
            <Box
              style={{
                width: "25px",
                height: "25px",
                padding: "auto",
                margin: "auto",
              }}
            >
              <Icon fontSize="2xl" as={BsCalendarDate}></Icon>
            </Box>

            <Flex
              flexDirection="column"
              alignItems="flex-start"
              marginLeft="10px"
            >
              <label>Departure</label>
              <Input
                type="month"
                w="400px"
                size="sm"
                fontWeight="bold"
                fontSize="lg"
                variant="unstyled"
                placeholder="Leaving From"
              />
            </Flex>
          </Flex>
          <Flex border="1px solid black" h="50px" w="450px" borderRadius="md">
            <Box
              style={{
                width: "25px",
                height: "25px",
                padding: "auto",
                margin: "auto",
              }}
            >
              <Icon fontSize="2xl" as={BsCalendarDate}></Icon>
            </Box>

            <Flex
              flexDirection="column"
              alignItems="flex-start"
              marginLeft="10px"
            >
              <label>Returning</label>
              <Input
                type="month"
                w="400px"
                size="sm"
                fontWeight="bold"
                fontSize="lg"
                variant="unstyled"
                placeholder="Leaving From"
              />
            </Flex>
          </Flex>
        </HStack>
      </VStack>
      {/* checkBoxes */}
      <VStack w="93%" margin="auto" alignItems="flex-start">
        <Box>
          <Checkbox size="lg">Direct flights only</Checkbox>
        </Box>
        <Box>
          <Checkbox size="lg">
            I only need accommodations for part of my trip
          </Checkbox>
        </Box>
      </VStack>
      <br />
      <VStack w="93%" margin="auto" alignItems="flex-start">
        <Button size="lg" w="300px" colorScheme="blue">
          Search
        </Button>
      </VStack>
      <br />

      {/* BreadCrumb  */}
      <HStack w="93%" margin="auto">
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <Text fontSize="large" fontWeight="bold">
              {" "}
              Choose your stay
            </Text>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Text> Choose departing flight</Text>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Text> Choose returning flight</Text>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Text> Choose your trip</Text>
          </BreadcrumbItem>
        </Breadcrumb>
      </HStack>
    </Box>
  );
};

export default TopInputBox;

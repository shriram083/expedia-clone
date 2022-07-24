import {
  Box,
  Checkbox,
  Flex,
  Heading,
  HStack,
  Icon,
  Radio,
  RadioGroup,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const PackageSidebar = () => {
  const hotels = useSelector((state) => state.appReducer.hotels);
  const labelStyles = {
    mt: "2",
    ml: "-35",
    fontSize: "lg",
  };

  const [sliderValue, setSliderValue] = useState(0);
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();

  const [searchParams, setSeactchParams] = useSearchParams();
  const urlCategory = searchParams.getAll("category");
  const urlRating = searchParams.getAll("rating");
  const [rating, setrating] = useState(urlRating || []);
  const [popularF, setPopularF] = useState(urlCategory || []);

  const handleChange = (e) => {
    let option = e.target.value;
    let newCategory = [...popularF];

    if (popularF.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setPopularF(newCategory);
  };

  const handleclick = (i) => {
    let newCategory = [...rating];
    if (rating.includes(i)) {
      newCategory.splice(newCategory.indexOf(i), 1);
    } else {
      newCategory.push(i);
    }
    setrating(newCategory);
  };

  useEffect(() => {
    if (popularF || rating) {
      let params = {};
      popularF && (params.popularF = popularF);
      rating && (params.rating = rating);
      setSeactchParams(params);
    }
  }, [popularF, rating, dispatch, setSeactchParams]);

  return (
    <Box
      w="20%"
      // margin="auto"
      mt="6"
      boxSizing="border-box"
      textAlign="start"
    >
      {/* popular filters */}
      <VStack textAlign="start" alignItems="self-start" w="90%">
        <Heading>Filter by</Heading> <br />
        <Text fontWeight="bold">Popular filters</Text>
        <Checkbox
          value="Free airport shuttle"
          onChange={(e) => handleChange(e)}
          size="lg"
        >
          Free airport shuttle
        </Checkbox>
        <Checkbox value="Pool" onChange={(e) => handleChange(e)} size="lg">
          Pool
        </Checkbox>
        <Checkbox
          value="All inclusive"
          onChange={(e) => handleChange(e)}
          size="lg"
        >
          All inclusive
        </Checkbox>
        <Checkbox
          value="Ocean view"
          onChange={(e) => handleChange(e)}
          size="lg"
        >
          Ocean view
        </Checkbox>
        <Checkbox value="Old port" onChange={(e) => handleChange(e)} size="lg">
          old port
        </Checkbox>
      </VStack>
      {/* price per night  */}
      <Box w="90%" pt={6} pb={2}>
        <Text fontWeight="bold">Price per night</Text> <br />
        <Slider
          w="80%"
          aria-label="slider-ex-6"
          onChange={(val) => setSliderValue(val)}
        >
          <SliderMark value={0} {...labelStyles}>
            <Text> $0</Text>
          </SliderMark>

          <SliderMark value={100} {...labelStyles}>
            <Text> $300+</Text>
          </SliderMark>

          <SliderMark
            value={sliderValue}
            textAlign="center"
            bg="blue.500"
            color="white"
            mt="-10"
            ml="-5"
          >
            {sliderValue * 3}$
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
      <br />
      {/* guest rating  */}
      <RadioGroup
        alignItems="self-start"
        w="90%"
        onChange={setValue}
        value={value}
      >
        <Text fontWeight="bold">Guest rating</Text>
        <Stack direction="column">
          <Radio size="lg" value="any">
            Any
          </Radio>
          <Radio size="lg" value="wonderful">
            Wonderful 4.5+
          </Radio>
          <Radio size="lg" value="verygood">
            Very God 4+
          </Radio>
          <Radio size="lg" value="good">
            Good 3.5+
          </Radio>
        </Stack>
      </RadioGroup>{" "}
      <br />
      {/* star rating  */}
      <Text fontWeight="bold">Star rating</Text>
      <HStack alignItems="self-start" p="4" w="90%">
        <Flex
          p="2"
          w="30%"
          value="1"
          onClick={() => handleclick("1")}
          direction="row"
          borderRadius="5"
          textAlign="center"
          border="1px solid black"
          h="30%"
        >
          {" "}
          <Text fontSize="bold">1</Text>
          <Icon margin="auto" as={AiFillStar}>
            1
          </Icon>
        </Flex>
        <Flex
          p="2"
          w="30%"
          value="2"
          onClick={() => handleclick("2")}
          flexDirection="space-around"
          borderRadius="5"
          textAlign="center"
          border="1px solid black"
          h="30%"
        >
          {" "}
          <Text fontSize="bold">2</Text>
          <Icon margin="auto" as={AiFillStar}>
            2
          </Icon>
        </Flex>
        <Flex
          p="2"
          w="30%"
          value="3"
          onClick={() => handleclick("3")}
          flexDirection="space-around"
          borderRadius="5"
          textAlign="center"
          border="1px solid black"
          h="30%"
        >
          {" "}
          <Text fontSize="bold">3</Text>
          <Icon margin="auto" as={AiFillStar}>
            3
          </Icon>
        </Flex>
        <Flex
          p="2"
          w="30%"
          value="4"
          onClick={() => handleclick("4")}
          flexDirection="space-around"
          borderRadius="5"
          textAlign="center"
          border="1px solid black"
          h="30%"
        >
          {" "}
          <Text fontSize="bold">4</Text>
          <Icon margin="auto" as={AiFillStar}>
            4
          </Icon>
        </Flex>
        <Flex
          p="2"
          w="30%"
          value="5"
          onClick={() => handleclick("5")}
          flexDirection="space-around"
          borderRadius="5"
          textAlign="center"
          border="1px solid black"
          h="30%"
        >
          {" "}
          <Text fontSize="bold">5</Text>
          <Icon margin="auto" as={AiFillStar}>
            5
          </Icon>
        </Flex>
      </HStack>
      {/* payment type  */}
      <VStack textAlign="start" alignItems="self-start" w="90%">
        <Text fontWeight="bold">Payment Type</Text>
        <Checkbox size="lg">Fully refundable</Checkbox>
        <Checkbox size="lg">Reserve now, pay later</Checkbox>
      </VStack>{" "}
      <br />
      {/* property types  */}
      <VStack textAlign="start" alignItems="self-start" w="90%">
        <Text fontWeight="bold">Property type</Text>
        <Checkbox size="lg">Bed & breakfast</Checkbox>
        <Checkbox size="lg">Hotel resort</Checkbox>
        <Checkbox size="lg">Holiday resort</Checkbox>
        <Checkbox size="lg">Holiday park</Checkbox>
        <Checkbox size="lg">Apart-hotel</Checkbox>
      </VStack>{" "}
      <br />
      {/* Neighbourhood  */}
      <RadioGroup
        alignItems="self-start"
        w="90%"
        onChange={setValue}
        value={value}
      >
        <Text fontWeight="bold">Neighbourhood</Text>
        <Stack direction="column">
          <Radio
            size="lg"
            // value="any"
          >
            Foce
          </Radio>
          <Radio
            size="lg"
            // value="wonderful"
          >
            Genoa
          </Radio>
          <Radio
            size="lg"
            // value="verygood"
          >
            Sant'llario
          </Radio>
          <Radio
            size="lg"
            // value="good"
          >
            Lagaccio
          </Radio>
          <Radio
            size="lg"
            // value="good"
          >
            Carignano
          </Radio>
        </Stack>
      </RadioGroup>
      <br />
      {/* popular locations  */}
      <RadioGroup
        alignItems="self-start"
        w="90%"
        onChange={setValue}
        value={value}
      >
        <Text fontWeight="bold">Popular locations</Text>
        <Stack direction="column">
          <Radio
            size="lg"
            // value="any"
          >
            Port of Genoa Cruise Ship Terminal
          </Radio>
          <Radio
            size="lg"
            // value="wonderful"
          >
            Aquarium of Genoa
          </Radio>
          <Radio
            size="lg"
            // value="verygood"
          >
            Old fort
          </Radio>
          <Radio
            size="lg"
            // value="good"
          >
            Gaslini Hospital
          </Radio>
          <Radio
            size="lg"
            // value="good"
          >
            Pizza de ferrari
          </Radio>
        </Stack>
      </RadioGroup>
      <br />
      {/* meal plans */}
      <VStack textAlign="start" alignItems="self-start" w="90%">
        <Text fontWeight="bold">Meal plans available</Text>
        <Checkbox size="lg">Breakfast included</Checkbox>
        <Checkbox size="lg">Lunch included</Checkbox>
        <Checkbox size="lg">Dinner included</Checkbox>
        <Checkbox size="lg">All inclusive</Checkbox>
      </VStack>{" "}
      <br /> {/* amenities */}
      <VStack textAlign="start" alignItems="self-start" w="90%">
        <Text fontWeight="bold">Amenities</Text>
        <Checkbox size="lg">Free airport shuttle</Checkbox>
        <Checkbox size="lg">Pool</Checkbox>
        <Checkbox size="lg">Ocean view</Checkbox>
        <Checkbox size="lg">Spa</Checkbox>
        <Checkbox size="lg">Free WiFi</Checkbox>
      </VStack>
      <br />
      {/* Expedia Rewards  */}
      <VStack textAlign="start" alignItems="self-start" w="90%">
        <Text fontWeight="bold">Expedia Rewards</Text>
        <Checkbox size="lg">VIP Access properties</Checkbox>
        <Checkbox size="lg">Member Prices</Checkbox>
      </VStack>
      <br />
      {/* Accessibilty  */}
      <VStack textAlign="start" alignItems="self-start" w="90%">
        <Text fontWeight="bold">Accesibility</Text>
        <Checkbox size="lg">Wheelchair-accecibility parking</Checkbox>
        <Checkbox size="lg">Elevator</Checkbox>
        <Checkbox size="lg">Accecibility bathroom</Checkbox>
        <Checkbox size="lg">Roll-in-shower</Checkbox>
      </VStack>
      <br />
    </Box>
  );
};

export default PackageSidebar;

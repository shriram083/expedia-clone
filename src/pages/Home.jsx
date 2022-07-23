import { Heading, SimpleGrid,Input,Text,Box,Stack,Container,Flex,Image,HStack,Button,Center} from "@chakra-ui/react";
import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
const Home = () => {
  return <div>
    <SimpleGrid gap={"10px"}>
      <Container maxWidth={"80%"} gap={2}>
          <Flex border={"1px solid grey"} borderRadius={"5px"} gap={4}>
          <Box maxW={"25%"}><Image boxSize={"200px"} objectFit={"cover"} src="https://a.travel-assets.com/mad-service/footer/bnaBanners/BEX_ROME_iStock_72dpi.jpg" alt="Images1"/></Box>
          <Box maxW={"50%"}>
            <Heading fontSize={"18px"}>Our app takes you further</Heading>
            <Text fontSize={"12px"}>When you book on the app you can save up to 25% on select hotels while earning double the points with every booking. With these app deals you'll save even more on trips, and that means you can take more trips, and manage it all on the go.</Text>
            <Heading fontSize={"12px"}>Text yourself a download link for easy access</Heading>
            <HStack>
            <Input placeholder="Countrycode"/><Input placeholder="Phone number"/><Button maxW={"2xl"}bgColor="blue" color={"white"}>app</Button>
            </HStack>
            <Text fontSize={"12px"}>By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.</Text>
          </Box>
          <Box maxWidth={"25%"}><Image boxSize={"200px"} objectFit={"contain"} src="https://a.travel-assets.com/mad-service/qr-code/footer_qr_hp/1_QR_FOOTER_BNA_HP.png" alt="Qr code" />
          <Center><Text fontSize={"12px"}>Scan QR Code</Text></Center>
          </Box>
          </Flex>
      <Stack width={"100%"} alignContent={"center"} justifyContent={"center"} marginTop={"5%"}>
        <Box>
          <Image borderRadius={"10px"} src="https://a.travel-assets.com/travel-assets-manager/5348/MTT-HP-Hero-D-928x398.jpg" alt=""/>
        </Box>
      </Stack>        
      </Container>
    </SimpleGrid>

{/* 2nd part of the home page */}

    <SimpleGrid width={"80%"}  margin={"auto"} gap={4} padding={2}>
      <Box><Heading>Here to help keep you on the move</Heading></Box>
      <SimpleGrid  justifyContent={"space-evenly"} columns={3} spacing={10} cursor={"pointer"}  >
        <Box padding={5} border={"1px solid gray"} borderRadius={"5px"}><Heading fontSize={"18px"}>Change or cancel a Trip</Heading>
        <Text fontSize={"12px"}>Make Updates to your iternary or cancel your bookings</Text></Box>
        <Box  padding={5}border={"1px solid gray"} borderRadius={"5px"}><Heading fontSize={"18px"}>Use Credit or Coupon</Heading>
        <Text fontSize={"12px"}>Apply coupon code or credit to your Trip</Text></Box>
        <Box padding={5} border={"1px solid gray"} borderRadius={"5px"}><Heading fontSize={"18px"}>Track Your refund</Heading>
        <Text fontSize={"12px"}>Check the Status of your Refund currently in progress</Text></Box>
      </SimpleGrid>
    </SimpleGrid >

    <SimpleGrid width={"80%"} columns={2} margin={"auto"} gap={2} border={"1px solid grey"} borderRadius={"10px"}>
      <Box ><Image borderRadius={"10px"} src="https://images.unsplash.com/photo-1530123985359-4fd0cce1ea8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Miane"/></Box>
      <Box padding={5}>
        <Heading as="h2" size={"2xl"}>Maine</Heading>
        <Heading as ="h3" size={"lg"}>Places words can't describe</Heading>
        <Text>Coastlines are the only beginning.Get to know all the Maine</Text>
      </Box>

    </SimpleGrid>
  
    

    
  </div>;
};

export default Home;

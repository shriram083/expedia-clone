import { Heading, SimpleGrid,Input,Text,Box,Stack,Container,Flex,Image,HStack,Button,Center,Link} from "@chakra-ui/react";
import React from "react";
import HomeSearchComponent from "../components/HomeSearchComponent";



const Home = () => {
  return <div>
    <SimpleGrid gap={"10px"}>
      <Container>
        <HomeSearchComponent/>
        <Button bgColor={"blue"} ><Link href={"/package"}>Search Hotels</Link></Button>
      </Container>
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
    <SimpleGrid width={"80%"} columns={3} margin={"auto"} marginTop={"2%"} gap={5} cursor={"pointer"} >
      <Box borderRadius={"5%"} padding={"2%"}>
        <Image borderRadius={"5%"} src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VhJTIwYmVhY2glMjB3aXQlMjBocGVvcGxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
        <Heading as="h3" size={"sm"} fontWeight={"light"}>VIP ACCESS</Heading>
        <Text fontWeight={"bolder"}>The view looks even better as a VIP</Text>
      </Box>
      <Box borderRadius={"5%"} padding={"2%"}>
        <Image borderRadius={"5%"} src="https://media.istockphoto.com/photos/couple-in-love-ride-in-cabriolet-car-picture-id878599762?k=20&m=878599762&s=612x612&w=0&h=CqouOvFuxvRmJ7y0HhaKYf_dyKVXI4App-IZdvAsg6w=" alt=""/>
        <Heading as="h3" size={"sm"} fontWeight={"light"}>GRAB YOUR KEYS</Heading>
        <Text fontWeight={"bolder"}>You need a Change of Scenary</Text>
      </Box>
      <Box borderRadius={"5%"} padding={"2%"}>
        <Image borderRadius={"5%"} src="https://media.istockphoto.com/photos/curve-of-the-jetty-and-man-picture-id166542295?k=20&m=166542295&s=612x612&w=0&h=SGe8GqjT8z-qcWUQ4en2maAD6u7swCaaRkVE7dW-7Qs=" alt=""/>
        <Heading as="h3" size={"sm"} fontWeight={"light"}>BRODEN YOUR HORIZONS</Heading>
        <Text fontWeight={"bolder"}>There's a Whole lot of world out there-go see more of it</Text>
      </Box>
    </SimpleGrid>
    <Flex width={"80%"} margin="auto" marginTop={"2%"} gap={4} cursor={"pointer"}>
    <Box width={"100%"} borderRadius={"5%"}>
        <Image width={"100%"} height={"80%"} borderRadius={"5%"} src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VhJTIwYmVhY2glMjB3aXQlMjBocGVvcGxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
        <Heading as="h3" size={"sm"} fontWeight={"light"}>FOR THE LOVE OF SUMMER</Heading>
        <Text fontWeight={"bolder"}>Chase the Sun someplace Extradinary</Text>
      </Box>
      <Box width={"100%"} borderRadius={"5%"}>
        <Image width={"100%"} height={"80%"} borderRadius={"5%"} src="https://media.istockphoto.com/photos/cruisin-through-the-palm-trees-picture-id1284685747?k=20&m=1284685747&s=612x612&w=0&h=WjFHK2lKAW57v2BOarmCtlv25dBSFWR_kJWJflMnYN4=" alt=""/>
        <Heading as="h3" size={"sm"} fontWeight={"light"}>YOUR BEACH BLISS AWAITS</Heading>
        <Text fontWeight={"bolder"}>Experience Ultimate Relxation with a coastal Gateway</Text>
      </Box>
    </Flex>
    <Flex width={"80%"} columns={2} margin={"auto"} gap={4}>
      <Box width={"80%"} flex={3}><Image width={"100%"} height={"300px"} borderRadius={"5%"} src="https://media.istockphoto.com/photos/cropped-shot-of-tourist-woman-pulling-her-luggage-to-her-hotel-after-picture-id1183891002?k=20&m=1183891002&s=612x612&w=0&h=LO5wHycRCOCxvNpnWw-oDyGc2fOaZplpPNLG0hxh_oM=" alt="" /></Box>
      <Box width={"20%"}><Image src="https://tpc.googlesyndication.com/simgad/1332138509148536343?" alt="" /></Box>
    </Flex>
  
    

    
  </div>;

};

export default Home;

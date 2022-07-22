import { ReactNode } from 'react';
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image
} from '@chakra-ui/react';

const Logo=()=> {
  return (
    <Image src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg" alt="Logo(Groups)" width={"50%"} height={"10%"}/>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};



export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('white')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'7xl'} py={10} borderBottom={"1px solid grey"} >
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          gap={"1rem"} spacing={4}  fontSize={"12px"}>
          <Stack justifyContent={"left"} >           
              <Logo color={useColorModeValue('gray.700', 'white')} />
            {/* <Text fontSize={'sm'}>
              © 2022 Chakra Templates. All rights reserved
            </Text> */}
          </Stack>
          <Stack textAlign={"left"} align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Jobs</Link>
            <Link href={'#'}>List Your Property</Link>
            <Link href={'#'}>Partnerships</Link>
            <Link href={'#'}>Newsroom</Link>
            <Link href={'#'}>Investor Relationships</Link>
            <Link href={'#'}>Advertising</Link>
          </Stack>
          <Stack textAlign={"left"} align={'flex-start'}>
            <ListHeader>Explore</ListHeader>
            <Link href={'#'}>United states of America Travel guide</Link>
            <Link href={'#'}>Hotels in United States of America</Link>
            <Link href={'#'}>Vacation rentals in United State of America</Link>
            <Link href={'#'}>Vacation Packages in United States of America</Link>
            <Link href={'#'}>Domestic Flights</Link>
            <Link href={'#'}>Car Rentals in United States of America</Link>
            <Link href={'#'}>All Accomodation types</Link>
          </Stack>
          <Stack  textAlign={"left"}align={'flex-start'}>
            <ListHeader>Policies</ListHeader>
            <Link href={'#'}>Privacy policy</Link>
            <Link href={'#'}>Terms of Use</Link>
            <Link href={'#'}>Vrbo terms and conditions</Link>
            <Link href={'#'}>Expedia Rewards Terms</Link>
            <Link href={'#'}>Accessability</Link>
            <Link href={'#'}>Do not sell my personal information</Link>
          </Stack>
          <Stack textAlign={"left"} align={'flex-start'}>
            <ListHeader>Help</ListHeader>
            <Link href={'#'}>Support</Link>
            <Link href={'#'}>Cancel your hotel or vacation rental Booking</Link>
            <Link href={'#'}>Cancel your flight</Link>
            <Link href={'#'}>refund timelines,policies&processes</Link>
            <Link href={'#'}>Use an Expedia coupon</Link>
            <Link href={'#'}>International travel documents</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Container  maxW={"6xl"} marginTop={5} fontSize={"12px"} >
        <Box>
          <Text>Expedia-clone, Inc. is not responsible for content on external Web sites</Text>
        </Box>
        <Box>
          <Text>© 2022 Expedia-clone, Inc., an Expedia-clone Group company. All rights reserved. Expedia and the Airplane Logo are trademarks or registered trademarks of Expedia, Inc. CST# 2029030-50.</Text>
        </Box>
      </Container>
    </Box>
  );
}
import { Box ,Flex, Image} from '@chakra-ui/react'
import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
  import LinkCreate from './LinkCreate'

const Bottom = () => {
  return (
    <Box style={{marginTop:"20px",margin:"auto", width:"71%" , height:"500px"}}>
     
     <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' style={{fontWeight:"bold"}}>
            Trip Planning
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={1}>
      
        <Flex style={{marginBottom:"15px"}}>
          <Box  style={{marginRight:"90px" , fontWeight:"bold"}}>Hotels</Box>
          <Box><LinkCreate title={"Sydney Hotels"}/><LinkCreate title={"Boston Hotels"}/><LinkCreate title={" Walt Disney World Area Hotels"}/><LinkCreate title={"las Vegas Hotels"}/><LinkCreate title={"maui Hotels"}/><LinkCreate title={"Paris Hotels"}/><LinkCreate title={"New York hotels"}/><LinkCreate title={"San Francisco Hotels"}/><LinkCreate title={"Grand Canyon Hotels"}/><LinkCreate title={"VIP access hotels"}/></Box>
        </Flex>
    
       
        <Flex style={{marginBottom:"15px"}}>
          <Box  style={{marginRight:"90px" ,fontWeight:"bold"}} >Flights</Box>
           <Box><LinkCreate title={"flight to vancouver"}/><LinkCreate title={"flight to Boston"}/><LinkCreate title={"flight to Chicago"}/><LinkCreate title={"flight to San Francisco "}/><LinkCreate title={"flight to Orlands"}/><LinkCreate title={"Flight to Los Angeles"}/><LinkCreate title={"Flight to Las Vegas"}/><LinkCreate title={"Flight to New York"}/></Box>
        </Flex>

        <Flex style={{marginBottom:"15px"}}>
          <Box  style={{marginRight:"90px",fontWeight:"bold"}}>General</Box>
          <Box><LinkCreate title={"san antonio car rental"}/><LinkCreate title={"New Orleans Car Rental"}/><LinkCreate title={"Dallas Car Rental"}/><LinkCreate title={"Honolulu Car Rental"}/><LinkCreate title={"Denver Car Rental"}/><LinkCreate title={"Reno Car Rental"}/><LinkCreate title={"New Orleans Car Rental"}/><LinkCreate title={"Toronto Car Rental"}/><LinkCreate title={"vancouver Car Rental"}/></Box>
        </Flex>

        <Flex style={{marginBottom:"15px"}}>
          <Box  style={{marginRight:"90px",fontWeight:"bold"}}>vacation packages</Box>
          <Box><LinkCreate title={"Las Vegas Vacations"}/><LinkCreate title={"orlando Vacations"}/><LinkCreate title={"New York Vacations"}/><LinkCreate title={"Maimi Vacations"}/><LinkCreate title={"San Diego Vacations"}/><LinkCreate title={"San Francisco Vacations"}/><LinkCreate title={"Los angeles Vacations"}/><LinkCreate title={"New orleran Vacations"}/><LinkCreate title={"Vanvouver Vacations"}/><LinkCreate title={"Boston Vacations"}/><LinkCreate title={"seattle Vacations"}/><LinkCreate title={"Honolulu Vacations"}/></Box>
        </Flex>

        <Box>Savings based on all package bookings with Flight + Hotel on Expedia.com from January through December 2018, as compared to price of the same components booked separately. Savings will vary based on origin/destination, length of trip, stay dates and selected travel supplier(s). Savings not available on all packages. For Free Flight or 100% Off Flight deals, package savings is greater than or equal to the current cost of one component, when both are priced separately.</Box>
        
     
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' style={{fontWeight:"bold"}}>
          Explore More
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    {/* <LinkCreate title={""}/><LinkCreate title={""}/><LinkCreate title={""}/><LinkCreate title={""}/> */}
    <AccordionPanel pb={1}>
    <Flex style={{marginBottom:"15px"}}>
          <Box  style={{marginRight:"90px" , fontWeight:"bold"}}>Expedia</Box>
        <Box><LinkCreate title={"Do not Sell my personal Information"}/><LinkCreate title={"Support"}/><LinkCreate title={"Accessibility"}/><LinkCreate title={"Site Map"}/><LinkCreate title={"Terms Of Use"}/><LinkCreate title={"Privacy Policy"}/><LinkCreate title={"About Our Ads"}/><LinkCreate title={"Newsroom"}/><LinkCreate title={"Advertising"}/><LinkCreate title={"Investor Relations"}/><LinkCreate title={"Jobs"}/><LinkCreate title={"About Expedia"}/></Box>
    </Flex>

    <Flex style={{marginBottom:"15px"}}>
          <Box  style={{marginRight:"90px" , fontWeight:"bold"}}>Expedia Rewards</Box>
          <Box><LinkCreate title={"Expedia Rewards"}/><LinkCreate title={"Redeem Your Points"}/><LinkCreate title={"VIP access Hotels"}/></Box>
    </Flex>

    <Flex style={{marginBottom:"15px"}}>
          <Box  style={{marginRight:"90px" , fontWeight:"bold"}}>Expedia Links</Box>
          <Box><LinkCreate title={"Low Cost Flights"}/><LinkCreate title={"Rental Car Finder"}/><LinkCreate title={"Expedia Rewards"}/><LinkCreate title={"travel Blog"}/><LinkCreate title={"New Hotels"}/><LinkCreate title={"Accommodations"}/></Box>
    </Flex>

    <Flex style={{marginBottom:"15px"}}>
          <Box  style={{marginRight:"90px" , fontWeight:"bold"}}>Expedia SiteMaps</Box>
          <Box><LinkCreate title={"Hotels Sitemap"}/><LinkCreate title={"Flight Sitemaps"}/><LinkCreate title={"Rental cars Sitemaps"}/><LinkCreate title={"Curises Sitemaps"}/><LinkCreate title={"Things to do Sitemaps"}/></Box>
    </Flex>

    <Flex style={{marginBottom:"15px"}}>
          <Box  style={{marginRight:"90px" , fontWeight:"bold"}}>Partner Services</Box>
          <Box><LinkCreate title={"Expedia Partner central "}/><LinkCreate title={"Add a property"}/><LinkCreate title={"Expedia partner soluations API"}/><LinkCreate title={"Add an Activity"}/><LinkCreate title={"Become an Affilate"}/><LinkCreate title={"Travel agents affilate programs"}/><LinkCreate title={"Expedia mastercard"}/><LinkCreate title={"expedia franchise"}/><LinkCreate title={"Expedia Curises agent"}/><LinkCreate title={"Strategic Partnerships"}/><LinkCreate title={""}/><LinkCreate title={""}/></Box>
    </Flex>
    
    <Flex style={{marginBottom:"15px"}}> 
          <Box  style={{marginRight:"90px" , fontWeight:"bold"}}>Global Sites</Box>
           <Image width="500px" height="100px" src="https://thumbs.dreamstime.com/b/set-flags-glossy-buttons-9113949.jpg"/>
     </Flex>
   
   

    <Flex style={{marginBottom:"15px"}}>
          <Box  style={{marginRight:"90px" , fontWeight:"bold"}}>Expedia partners</Box>
          <Box><LinkCreate title={"Egnecia Business Travel"}/><LinkCreate title={"Expedia partner Solution"}/><LinkCreate title={"hotels.com"}/><LinkCreate title={""}/><LinkCreate title={"Hotwire"}/><LinkCreate title={"Citysearch"}/><LinkCreate title={"Online Shopping"}/><LinkCreate title={"Home Advisor"}/><LinkCreate title={"Expedia curises"}/><LinkCreate title={"carrentals.com"}/><LinkCreate title={"HomeAway"}/><LinkCreate title={"trivago"}/></Box>
    </Flex>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
<Box style={{marginLeft:"500px"}}>
    <Image src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg"/>
    
</Box>
    </Box>
  )
}

export default Bottom

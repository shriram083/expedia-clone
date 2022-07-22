import { Box , Flex } from '@chakra-ui/react'
import React from 'react'
import {MdFlight} from "react-icons/md"
import {FaHotel ,FaCarSide} from "react-icons/fa"
import {GrBundle} from "react-icons/gr"
import {GiCruiser} from "react-icons/gi"
import {RiTodoLine,RiGiftFill,RiAlertLine} from "react-icons/ri"
import {MdOutlineOtherHouses} from "react-icons/md"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
  } from '@chakra-ui/react'
import SubMenu from './SubMenu'
import RightSidebar from './RightSidebar'

const Slide = () => {
  return (
    <Box style={{margin:"auto", marginTop:"20px",width:"65%" , height:"600px",border:"2px solid gainsboro" }}>
        <Flex>
        <Box style={{width:"28%" , marginRight:"4%", height:"600px"}}>
            <Box style={{marginLeft:"20px",marginBottom:"20px" , fontWeight:"bold"}}>Browse help Topics</Box>
             <Box>
             <Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
            <Flex >
                <Box style={{marginRight:"10px"}}>
                <MdFlight/>
                </Box>
                <Box style={{fontWeight:"bold"}}>Flight</Box>
            </Flex>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <SubMenu title={"Check-in"}/>
    <SubMenu title={"Seat"}/>
    <SubMenu title={"Baggage"}/>
    <SubMenu title={"Change And Cancel"}/>
    <SubMenu title={"Booking"}/>
    <SubMenu title={"Payment & Receipt"}/>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
            <Flex > 
                <Box style={{marginRight:"10px"}}>
                <FaHotel/>
                </Box>
                <Box style={{fontWeight:"bold"}}>Hotels</Box>
            </Flex>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <SubMenu title={"Check-in & Check-out"}/>
    <SubMenu title={"Review Itinerary"}/>
    <SubMenu title={"Reviews and Ratings"}/>
    <SubMenu title={"Change And Cancel"}/>
    <SubMenu title={"Booking"}/>
    <SubMenu title={"Payment & Receipt"}/> 
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        <Flex > 
                <Box style={{marginRight:"10px"}}>
                <GrBundle/>
                </Box>
                <Box style={{fontWeight:"bold"}}>Bundle Deals</Box>
            </Flex>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <SubMenu title={"Check-in & Check-out"}/>
    <SubMenu title={"Review Itinerary"}/>
    <SubMenu title={"Bundle deals and savings"}/>
    <SubMenu title={"Change And Cancel"}/>
    <SubMenu title={"Booking"}/>
    <SubMenu title={"Payment & Receipt"}/> 
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
            <Flex > 
                <Box style={{marginRight:"10px"}}>
                <FaCarSide/>
                </Box>
                <Box style={{fontWeight:"bold"}}>Cars</Box>
            </Flex>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <SubMenu title={"Review Itinerary"}/>
    <SubMenu title={"Change And Cancel"}/>
    <SubMenu title={"Booking"}/>
    <SubMenu title={"Payment & Receipt"}/> 
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
            <Flex > 
                <Box style={{marginRight:"10px"}}>
                <GiCruiser/>
                </Box>
                <Box style={{fontWeight:"bold"}}>Cruise</Box>
            </Flex>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <SubMenu title={"Review Itinerary"}/>
    <SubMenu title={"Change And Cancel"}/>
    <SubMenu title={"Booking"}/>
    <SubMenu title={"Payment & Receipt"}/> 
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
            <Flex > 
                <Box style={{marginRight:"10px"}}>
                <RiTodoLine/>
                </Box>
                <Box style={{fontWeight:"bold"}}>Things To Do</Box>
            </Flex>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <SubMenu title={"Print Voucher"}/>
    <SubMenu title={"Change And Cancel"}/>
    <SubMenu title={"Booking"}/>
    <SubMenu title={"Expedia Local Expert"}/>
    <SubMenu title={"Payment & Receipt"}/> 
  </AccordionItem>
  {/* -------------------------------- */}
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
            <Flex > 
                <Box style={{marginRight:"10px"}}>
                <RiGiftFill/>
                </Box>
                <Box style={{fontWeight:"bold"}}>Expedia Rewards</Box>
            </Flex>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <SubMenu title={"About Expedia Rewards"}/>
    <SubMenu title={"Earn and Redeem"}/>
  </AccordionItem>
  {/* ------------------------------------------------------- */}
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
            <Flex > 
                <Box style={{marginRight:"10px"}}>
                <MdOutlineOtherHouses/>
                </Box>
                <Box style={{fontWeight:"bold"}}>Other</Box>
            </Flex>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <SubMenu title={"Privacy & Security"}/>
    <SubMenu title={"Travel Documents"}/>
    <SubMenu title={"Account Setting"}/>
    <SubMenu title={"Payment"}/> 
  </AccordionItem>
  {/* ------------------------------------------------------------- */}
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
            <Flex > 
                <Box style={{marginRight:"10px"}}>
                <GiCruiser/>
                </Box>
                <Box style={{fontWeight:"bold"}}>Your Expreience</Box>
            </Flex>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <SubMenu title={"Complaints"}/>
  </AccordionItem>

  {/* ---------------------------------------------------- */}
    <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
            <Flex > 
                <Box style={{marginRight:"10px"}}>
                <RiAlertLine/>
                </Box>
                <Box style={{fontWeight:"bold"}}>Travel Experience</Box>
            </Flex>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <SubMenu title={"Current Travel"}/>
   
  </AccordionItem>
  
</Accordion>
             </Box>
        </Box>
        <Box style={{width:"68%" ,height:"600px"}}>
          <RightSidebar/>
        </Box>
        </Flex>
    </Box>
  )
}

export default Slide

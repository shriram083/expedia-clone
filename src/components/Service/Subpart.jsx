import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'

const Subpart = ({title1, title2}) => {
  return (
    <Accordion>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left' style={{color:"blue" , fontWeight:"bold"}}>
            {title1}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={1}>
         {title2}
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
  ) 
}

export default Subpart

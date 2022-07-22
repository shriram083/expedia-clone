import React from 'react'
import { AccordionPanel} from '@chakra-ui/react'


const SubMenu = ({title}) => {
  return (
    <AccordionPanel pb={1} style={{paddingLeft:"50px",color:"blue"}}>
       {title}
    </AccordionPanel>
  )
}

export default SubMenu

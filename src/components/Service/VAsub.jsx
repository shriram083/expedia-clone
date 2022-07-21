import { Box, Image,Flex } from '@chakra-ui/react'
import React from 'react'

const VAsub = ({image, title}) => {
  return (
    <Box style={{background:"white" , padding:"5px" , marginRight:"30px" , width:"200px" , cursor:"pointer"}}>
        <Flex>
            <Box style={{marginRight:"10px"}}>
                <Image src= {image} height="40px" width="40px"/>
            </Box>
            <Box>{title}</Box>
        </Flex>

    </Box>
  )
}

export default VAsub

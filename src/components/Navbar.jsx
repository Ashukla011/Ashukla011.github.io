import React from 'react'
import {Flex,Box,Heading, Button} from "@chakra-ui/react"
const Navbar = () => {
  return (
    <div style={{backgroundColor:"#181818"}}>
     <Flex justifyContent={"space-between"} w="100%" h="150px">
     <Box>
        <Heading as='h2' size='xl'color="#FFD177">AVNISH KUMAR</Heading>
     </Box>

     <Box>
       <Button colorScheme='red' variant='ghost' fontSize="25px">Home</Button>
       <Button colorScheme='red' variant='ghost' fontSize="25px">About</Button>
       <Button colorScheme='red' variant='ghost' fontSize="25px">Skills</Button>
       <Button colorScheme='red' variant='ghost' fontSize="25px">Project</Button>
       <Button colorScheme='red' variant='ghost' fontSize="25px">Contact</Button>
       <Button colorScheme='red' variant='ghost' fontSize="25px">Resume</Button>
     </Box>
     </Flex>
    </div>

  )
}

export default Navbar
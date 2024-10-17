import React from 'react';
import { Box, Text, Flex, Link } from '@chakra-ui/react';    

export default function Footer() {    
  return (      
    <Box       
      as="footer"
      w="full"
      bg={"orange"}         
      py={6}
      px={{ base: 4, md: 6 }}       
      borderTop="1px solid"
      borderColor="gray.200"  
      display="flex"
      flexDirection={{ base: 'column', sm: 'row' }}   
      alignItems="center"
      gap={2}  
    >
      <Text fontSize="xs" color="Black">
        © 2024 Deli. All rights reserved.
      </Text>
      <Flex ml={{ sm: 'auto' }} color={"grey"} gap={{ base: 4, sm: 6 }}>
        <Link fontSize="xs" _hover={{ textDecoration: 'underline' }} href="#">
          Terms of Service
        </Link>
        <Link fontSize="xs" _hover={{ textDecoration: 'underline' }} href="#">     
          Privacy    
        </Link>
      </Flex>   
    </Box>
  );
}    

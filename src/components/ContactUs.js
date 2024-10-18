import { Button, Flex } from "@chakra-ui/react";
import { Box, Mail } from "lucide-react";
import Navbar from "./Navbar";

const ContactUs = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:contact@yourdomain.com";
  };

  return (
    
    <Flex justifyContent="center" alignItems="center" py={8}>
        
      <Button
        bg="orange"
        color="white"
        _hover={{ bg: "blue.600" }}
        px={8}
        fontSize={{ base: "sm", sm: "md" }}
        boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
        leftIcon={<Mail className="h-4 w-4" />}
        onClick={handleContactClick}
      >
        Contact Us
      </Button>


      
    </Flex>
  );
};

export default ContactUs;

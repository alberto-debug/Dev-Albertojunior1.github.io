import React from "react";
import ContactUs from "../components/ContactUs";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUsPage = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      {/* Navbar fixada no topo */}
      <Box>
        <Navbar />
      </Box>

      {/* Conteúdo principal centralizado */}
      <Box flex="1" textAlign="center" py={10}>
        <Heading as="h1" mb={5} marginTop={"80px"}>
          Contact Us
        </Heading>
        <Text fontSize="lg" mb={5}>
          Have any questions or feedback? Reach out to us by clicking the button below.
        </Text>

        {/* Componente ContactUs com o botão de e-mail */}
        <ContactUs />
      </Box>

      {/* Footer fixado no fundo */}
      <Box mt="auto" w="100%">
        <Footer />
      </Box>


      
    </Flex>
  );
};

export default ContactUsPage;

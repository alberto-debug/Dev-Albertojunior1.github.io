import React from "react";
import ContactUs from "../components/ContactUs";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeaturesSection from "../components/FeaturesSection";

const ContactUsPage = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      {/* Navbar fixada no topo */}
      <Box>
        <Navbar />
      </Box>

      {/* Conteúdo principal centralizado com fundo laranja, altura ajustada e estilo específico */}
      <Box
        position="relative"
        bg="orange.400"
        color="white"
        overflow="hidden"
        py={{ base: 12, md: 24, lg: 32, xl: 48 }} // Medidas ajustadas para padding
      >
        <Flex
          maxW="1200px"
          mx="auto"
          px={{ base: 4, md: 6 }}
          flexDirection={{ base: "column", sm: "row" }}
          alignItems="center"
          textAlign={{ base: "center", sm: "left" }} // Texto centralizado em telas pequenas
          spacing={4}
          justifyContent="center" // Alinhamento central
        >
          <Box flex="1" textAlign="center" mb={{ base: 8, sm: 0 }}> {/* Margem inferior para telas pequenas */}
            <Heading as="h1" mb={5} fontSize={{ base: "2xl", md: "4xl" }} marginTop={{ base: "40px", md: "0" }}>
              Contact Us
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} mb={5}>
              Have any questions or feedback? Reach out to us by clicking the button below.
            </Text>

            {/* Componente ContactUs com o botão de e-mail */}
            <ContactUs />
          </Box>
        </Flex>

        {/* SVG com ondas na parte inferior */}
        <Box position="absolute" bottom="-10px" left={0} right={0}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 43.3C1200 47 1320 53 1380 56.7L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="black"
            />
          </svg>
        </Box>
      </Box>

      {/* Seção de Features */}
      <FeaturesSection />

      {/* Footer fixado no fundo */}
      <Box mt="auto" w="100%">
        <Footer />
      </Box>
    </Flex>
  );
};

export default ContactUsPage;

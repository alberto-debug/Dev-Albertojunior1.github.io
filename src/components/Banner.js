import React from 'react';
import { Box, Button, Heading, Text, Flex, Image } from "@chakra-ui/react";
import { Smartphone } from 'react-feather'; // Ícone do Smartphone

export default function Banner() {
  return (
    <Box position="relative" bg="orange.400" color="white" overflow="hidden" py={{ base: 12, md: 24, lg: 32, xl: 48 }}>
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 6 }}
        flexDirection={{ base: "column", sm: "row" }}
        alignItems="center"
        textAlign={{ base: "center", sm: "left" }} // Texto centralizado em telas pequenas
        spacing={4}
      >
        {/* QR Code image */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="transparent" // Fundo transparente
          borderRadius="md"
          p={4}
          mr={{ base: 0, sm: "50px" }}
          width={{ base: "220px", sm: "250px", md: "350px", lg: "350px" }} // Tamanho responsivo do QR Code
          height="auto"
        >
          {/* Replace the src with the actual QR code link */}
          <Image
            src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://example.com"
            alt="QR Code"
            width="100%" // Deixa a imagem responsiva
            height="100%"
          />
        </Box>

        <Box spacing={2} mt={{ base: 6, sm: 0 }} textAlign={{ base: "center", sm: "left" }}>
          <Heading
            as="h1"
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            mb={4}
          >
            Scan, Order, and Pay with Ease
          </Heading>
          <Text fontSize={{ base: "md", md: "xl" }} color="gray.200" maxW="700px" mx="auto" mb={6}>
            Revolutionize your dining experience with our QR code menu and payment app.
          </Text>

          {/* Flex container for buttons - agora abaixo da descrição */}
          <Flex mt={4} gap={4} flexDirection={{ base: "column", sm: "row" }} justifyContent="center" alignItems="center">
            <Button bg="black" color="white" _hover={{ bg: "gray.700" }} px={8} fontSize={{ base: "sm", sm: "md" }}>
              <Smartphone className="mr-2 h-4 w-4" /> Download for iOS
            </Button>
            <Button bg="black" color="white" _hover={{ bg: "gray.700" }} px={8} fontSize={{ base: "sm", sm: "md" }}>
              <Smartphone className="mr-2 h-4 w-4" /> Download for Android
            </Button>    
          </Flex>
        </Box>
      </Flex>

      {/* SVG com ondas na parte inferior */}
      <Box position="absolute" bottom={-1} left={0} right={0}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 43.3C1200 47 1320 53 1380 56.7L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </Box>
    </Box>
  );
}

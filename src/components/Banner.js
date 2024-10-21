import React from 'react';
import { Box, Heading, Text, Flex, Image, Link } from "@chakra-ui/react";
import { GitHub, Linkedin } from 'react-feather'; // Ícones do GitHub e LinkedIn
import image from './images/image.png'; // Importa a imagem

export default function Banner() {
  return (
    <Box position="relative" bg="black" color="white" overflow="hidden" py={{ base: 6, md: 12, lg: 16, xl: 24 }}>
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 6 }}
        flexDirection={{ base: "column", md: "row" }} // Alinha em coluna no celular, em linha no desktop
        alignItems="center"
        textAlign={{ base: "center", md: "left" }}
        spacing={4}
      >
        {/* Texto à esquerda */}
        <Box spacing={2} textAlign={{ base: "center", md: "left" }} mb={{ base: 6, md: 0 }}>
          <Heading
            as="h1"
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            mb={4}
          >
            Hello,
          </Heading>
          <Text fontSize={{ base: "md", md: "xl" }} color="gray.200" maxW="700px" mx="auto" mb={8}>
            This is ALBERTO JUNIOR, I'm a Professional Software Developer.
          </Text>
          
          {/* Ícones de redes sociais */}
          <Flex gap={4} justifyContent={{ base: "center", md: "flex-start" }} wrap="wrap"> {/* Adiciona wrap para quebrar em telas menores */}
            <Link href="https://github.com/Dev-Albertojunior1" isExternal>
              <GitHub size={32} color="pink" /> {/* Cor do ícone do GitHub */}
            </Link>
            <Link href="https://linkedin.com/in/alberto-juniorr" isExternal>
              <Linkedin size={32} color="#0077b5" /> {/* Cor do ícone do LinkedIn */}
            </Link>
          </Flex>
        </Box>

        {/* Imagem à direita */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="transparent" // Fundo transparente
          borderRadius="full" // Imagem em formato circular
          p={4}
          width={{ base: "220px", sm: "300px", md: "400px", lg: "400px" }} // Tamanho responsivo da imagem
          height={{ base: "220px", sm: "300px", md: "400px", lg: "400px" }} // Altura igual à largura para formato circular
          mt={{ base: -10, sm: 0 }} // Levanta a imagem em telas pequenas
        >
          <Image
            src={image}
            alt="ALBERTO JUNIOR"
            borderRadius="full" // Para deixar a imagem circular
            width="100%" // Deixa a imagem responsiva
            height="100%" // A altura deve ser 100% da altura do box
            objectFit="cover" // Mantém a proporção da imagem
          />
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

import React, { useEffect, useState } from "react";
import { Box, Flex, Grid, Text, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Login from "../components/Login";

const texts = [
  "Login now",
  "Try today",
  "Don't waste time, login",
];

const LoginPage = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFade(true);
      }, 1000);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const displayNavbar = useBreakpointValue({ base: "none", md: "block" });
  const showBanner = useBreakpointValue({ base: true, md: false });
  const bannerHeight = useBreakpointValue({ base: "35vh", md: "auto" });
  
  return (
    <Flex direction="column" minHeight="100vh" bg="blue.900"> {/* Cor de fundo azul oceano */}
      <Box width="full" display={displayNavbar}>
        <Navbar />
      </Box>

      <Grid
        templateRows={{ base: "35% 1fr", md: "1fr" }}
        flex="1"
      >
        {showBanner && (
          <Box
            position="relative"
            bg="#FF7622"
            color="white"
            height={bannerHeight}
            overflow="hidden"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="0 0 60% 60%" 
          >
            <Text
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              textAlign="center"
              transition="opacity 1s ease-in-out"
              opacity={fade ? 1 : 0}
            >
              {texts[currentTextIndex]}
            </Text>
          </Box>
        )}

        {/* Flex para centralizar o componente de Login no desktop */}
        <Flex
          maxW="md"
          mx="auto"
          bg="blue.900" // Fundo azul oceano
          p={6}
          flexGrow={1}
          alignItems={{ base: "flex-start", md: "-10" }} // No celular, alinhado ao topo; no desktop, centralizado verticalmente
          justifyContent="center" // Alinhamento horizontal central
        >
          <Login />
        </Flex>
      </Grid>
    </Flex>
  );
};

export default LoginPage;

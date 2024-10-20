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

  // Usando useBreakpointValue para mostrar a navbar apenas em dispositivos desktop
  const displayNavbar = useBreakpointValue({ base: "none", md: "block" });

  // Controlar se o banner é exibido apenas em dispositivos móveis
  const showBanner = useBreakpointValue({ base: true, md: false });

  // Definir a altura do banner para 35% no celular
  const bannerHeight = useBreakpointValue({ base: "35vh", md: "auto" });

  // Definir a margem superior do login para celular e desktop
  const loginMarginTop = useBreakpointValue({ base: "-10", md: "auto" });

  return (
    <Flex direction="column" minHeight="100vh">
      {/* Navbar visível apenas no desktop */}
      <Box width="full" display={displayNavbar}>
        <Navbar />
      </Box>

      {/* Grid para organizar o conteúdo */}
      <Grid
        templateRows={{ base: "35% 1fr", md: "1fr" }} // No celular, banner 35% e login 65%; no desktop, só o login
        flex="1"
      >
        {/* Banner visível apenas em dispositivos móveis */}
        {showBanner && (
          <Box
            position="relative"
            bg="orange.400"
            color="white"
            height={bannerHeight}
            overflow="hidden"
            display="flex"
            alignItems="center"
            justifyContent="center"
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

        {/* Seção de login centralizada no desktop e ocupando o restante da tela no celular */}
        <Flex
          maxW="md"
          mx="auto"
          mt={loginMarginTop} // Ajuste da margem superior
          p={6}
          flexGrow={1}
          alignItems={{ base: "flex-start", md: "center" }} // No celular, alinhado no topo
          justifyContent="center"
        >
          <Login />
        </Flex>
      </Grid>
    </Flex>
  );
};

export default LoginPage;

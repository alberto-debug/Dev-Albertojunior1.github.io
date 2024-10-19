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
  const [fade, setFade] = useState(true); // Controle de opacidade

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false); // Desaparecer o texto
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFade(true); // Fazer o texto aparecer
      }, 1000); // Tempo para desaparecer antes de mudar
    }, 3000); // Mudar o texto a cada 3 segundos

    return () => clearInterval(intervalId); // Limpar o intervalo ao desmontar
  }, []);

  // Usando o useBreakpointValue para mostrar a Navbar apenas em dispositivos desktop
  const displayNavbar = useBreakpointValue({ base: "none", md: "block" });
     
  return (
    <Flex direction="column" minHeight="100vh">
      <Box width="full" display={displayNavbar}>
        <Navbar />
      </Box>

      {/* Grid para ocupar metade da tela com o banner e metade com o login */}
      <Grid 
        templateRows={{ base: "1fr 1fr", md: "1fr 1fr" }} // 2 linhas de igual altura em dispositivos móveis
        flex="1" 
      >
        {/* Banner grande */}
        <Box
          position="relative"
          bg="orange.400"
          color="white"
          overflow="hidden"
          display="flex" // Usar flexbox para centralizar o texto
          alignItems="center" // Alinha verticalmente no centro
          justifyContent="center" // Alinha horizontalmente no centro
        >
          {/* Texto animado dentro do banner */}
          <Text
            fontSize={{ base: "3xl", md: "4xl" }} // Tamanho do texto em dispositivos móveis
            fontWeight="bold"
            textAlign="center" // Centraliza o texto
            transition="opacity 1s ease-in-out"
            opacity={fade ? 1 : 0} // Controla a opacidade
          >
            {texts[currentTextIndex]}
          </Text>
        </Box>

        {/* Seção de login */}
        <Box maxW="md" mx="auto" p={6}>
          {/* Div onde você pode adicionar o formulário de login */}
          <div>
            <Login />
          </div>
        </Box>
      </Grid>
    </Flex>
  );
};

export default LoginPage;

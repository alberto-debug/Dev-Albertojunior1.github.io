import React, { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
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

  return (
    <Flex direction="column" minHeight="100vh">
      <Box width="full">
        <Navbar />
      </Box>

      {/* Banner com textos animados */}
      <Box
        bg="blue.500"
        color="white"
        py={4}
        textAlign="center"
        transition="opacity 1s ease-in-out"
        opacity={fade ? 1 : 0} // Controla a opacidade    
      >
        <Text fontSize="xl" fontWeight="bold">
          {texts[currentTextIndex]}
        </Text>
      </Box>

      <Box maxW="md" mx="auto" mt={8} p={6}>
        {/* Div onde você pode adicionar o formulário de login */}
        <div>
          <Login />
        </div>
      </Box>
    </Flex>
  );
};

export default LoginPage;

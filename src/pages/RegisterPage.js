import React from "react";
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "../components/Navbar"; // Ajuste o caminho conforme necessário
import Register from "../components/Register";

const RegisterPage = () => {
  const displayNavbar = useBreakpointValue({ base: "none", md: "block" });

  return (
    <Flex direction="column" minHeight="100vh" bg="blue.900"> {/* Cor de fundo azul oceano */}
      <Box width="full" display={displayNavbar}>
        <Navbar />
      </Box>
      <Flex
        maxW="md"
        mx="auto"
        p={6}
        flexGrow={1}
        alignItems="center" // Centraliza verticalmente
        justifyContent="center" // Centraliza horizontalmente
      >
        <Box
          width="full"
          bg="blue.800" // Fundo do formulário
          p={6}
          borderRadius="20px"
          boxShadow="lg"
        >
          <Register />
        </Box>
      </Flex>
    </Flex>
  );
};

export default RegisterPage;

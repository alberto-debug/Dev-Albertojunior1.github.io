import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar"; // Ajuste o caminho conforme necessário
import Register from "../components/Register";

const RegisterPage = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Box width="full">
        <Navbar />
      </Box>
      <Box maxW="md" mx="auto" mt="8" p="6" borderWidth="1px" borderRadius="lg" boxShadow="lg">
        {/* Div vazia, onde você pode adicionar o formulário de login */}
        <div>
          <Register/>
        </div>
      </Box>
    </Flex>
  );
};

export default RegisterPage;

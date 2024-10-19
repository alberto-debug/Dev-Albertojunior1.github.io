import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Box width="full">
        <Navbar />
      </Box>
      <Box maxW="md" mx="auto" mt="8" p="6" >
        {/* Div vazia, onde você pode adicionar o formulário de login */}
        
        <div>
        <Login/>
        </div>
      </Box>
    </Flex>
  );
};

export default LoginPage;

import React, { useState } from "react";
import { Box, Button, Input, InputGroup, InputRightElement, Text, Heading, useToast, IconButton, Link, Spinner } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../config/FirebaseConfig";
import { initializeApp } from "firebase/app";
import Navbar from "./Navbar";

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); 
  const toast = useToast();
  const navigate = useNavigate();
  const auth = getAuth(app);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleLogin = async () => {
    if (!email || !password) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setLoading(true); 

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Login realizado!",
        description: "Você está agora logado.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/home");
    } catch (error) {
      toast({
        title: "Erro ao fazer login",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box 
      maxW="md" 
      mx="auto" 
      mt="8" 
      p="6" 
      boxShadow="lg"
      borderRadius={"20px"}
      bgGradient="linear(to-br, blue.800, blue.600)"
      bg="blue.900 0.5" // Fundo azul oceano
      color="Black" // Texto branco para contraste
    >
      <Heading mb={6} textAlign="center">Login</Heading>
      <Input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        mb={3}
        border="1px solid white" // Borda branca
        bg="blue.800" // Fundo do input mais escuro
        color="white"
      />
      <InputGroup mb={3}>
        <Input
          placeholder="Senha"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          border="1px solid white"
          bg="blue.800"
          color="white"
        />
        <InputRightElement width="4.5rem">
          <IconButton
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
            onClick={toggleShowPassword}
            variant="unstyled"
            color="white" // Ícone branco
          />
        </InputRightElement>
      </InputGroup>
      <Button
        bg="#FF7622" // Botão teal (azul esverdeado)
        color="white"
        borderRadius={"20px"}
        width="100px"
        _hover={{ bg: "teal.600" }}
        onClick={handleLogin}
        isLoading={loading}
      >
        {loading ? <Spinner size="sm" /> : "Login"}
      </Button>
      <Text mt={4} textAlign="center">
        Não tem uma conta?{" "}
        <Link as={RouterLink} to="/register" color="teal.200">
          Clique aqui para se registrar
        </Link>
      </Text>
    </Box>
  );
};

export default LoginPage;

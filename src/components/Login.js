import React, { useState } from "react";
import { Box, Button, Input, InputGroup, InputRightElement, Text, Heading, useToast, IconButton, Link, Spinner } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../config/FirebaseConfig"; // Ajuste o caminho conforme necessário
import { initializeApp } from "firebase/app";
import Navbar from "./Navbar";

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // Estado de carregamento
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

    setLoading(true); // Inicia o carregamento

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Login realizado!",
        description: "Você está agora logado.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/home"); // Redireciona para a página principal após o login
    } catch (error) {
      toast({
        title: "Erro ao fazer login",
        description: error.message, // Mensagem de erro do Firebase
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  return (
    <Box maxW="md" mx="auto" mt="8" p="6" borderWidth="1px" borderRadius="lg" boxShadow="lg">
        
      <Heading mb={6} textAlign="center">Login</Heading>
      <Input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        mb={3}
        border="1px solid #000"
      />
      <InputGroup mb={3}>
        <Input
          placeholder="Senha"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          border="1px solid #000"
        />
        <InputRightElement width="4.5rem">
          <IconButton
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
            onClick={toggleShowPassword}
            variant="unstyled"
          />
        </InputRightElement>
      </InputGroup>
      <Button
        bg="blue.500"
        color="white"
        width="full"
        _hover={{ bg: "blue.600" }}
        onClick={handleLogin}
        isLoading={loading} // Exibe o spinner de carregamento
      >
        {loading ? <Spinner size="sm" /> : "Login"} {/* Exibe o spinner ou texto */}
      </Button>
      <Text mt={4} textAlign="center">
        Não tem uma conta?{" "}
        <Link as={RouterLink} to="/register" color="blue.500">
          Clique aqui para se registrar
        </Link>
      </Text>
    </Box>
  );
};

export default LoginPage;

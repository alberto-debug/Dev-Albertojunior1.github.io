import React, { useState } from "react";
import { Box, Button, Input, InputGroup, InputRightElement, Text, Heading, useToast, IconButton, Link, HStack } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../config/FirebaseConfig";
import { SiGoogle, SiApple } from "react-icons/si";

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider(); // Cria provedor do Google

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast({
        title: "Registro realizado!",
        description: "Você pode agora fazer login.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/login"); // Redireciona para a página de login após o registro
    } catch (error) {
      toast({
        title: "Erro ao registrar",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      await signInWithRedirect(auth, provider); // Muda para signInWithRedirect
    } catch (error) {
      const errorMessage = error.message;
      toast({
        title: "Erro ao fazer login com Google",
        description: errorMessage,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box 
      maxW="md" 
      mx="auto" 
      mt="8" 
      p="6" 
      boxShadow="lg"
      borderRadius="20px"
      bgGradient="linear(to-br, blue.800, blue.600)" // Estilo igual ao LoginPage
      bg="blue.900" // Fundo azul oceano
      color="white" // Texto branco para contraste
    >
      <Heading mb={6} textAlign="center">Registrar</Heading>
      <Input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        mb={3}
        border="1px solid grey" // Borda da mesma cor
        bg="blue.800" // Fundo do input mais escuro
        color="white"
      />
      <InputGroup mb={3}>
        <Input
          placeholder="Senha"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          border="1px solid grey"
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
        bg="#FF7622" // Botão laranja
        color="white"
        borderRadius="20px"
        width="100px"
        _hover={{ bg: "orange.600" }} // Alterar a cor no hover
        onClick={handleRegister}
      >
        Registrar
      </Button>

      {/* Ícones de login com Google e Apple */}
      <HStack spacing={4} mt={4} justify="center">
        <IconButton
          aria-label="Registrar com Google"
          icon={<SiGoogle color="#DB4437" />} // Ícone do Google
          onClick={handleGoogleSignIn} // Implementa a função de login com Google
          size="lg"
        />
        <IconButton
          aria-label="Registrar com Apple"
          icon={<SiApple color="#000000" />} // Ícone da Apple
          onClick={() => {/* Aqui você pode implementar a função de login com Apple */}}
          size="lg"
        />
      </HStack>

      <Text mt={4} textAlign="center">
        Já tem uma conta?{" "}
        <Link as={RouterLink} to="/login" color="teal.200">
          Clique aqui para fazer login
        </Link>
      </Text>
    </Box>
  );

};

export default RegisterPage;

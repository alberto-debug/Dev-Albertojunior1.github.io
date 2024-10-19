import React, { useState } from "react";
import { Box, Button, Input, InputGroup, InputRightElement, Text, Heading, useToast, IconButton, Link } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import firebaseConfig from "../config/FirebaseConfig"; // Ajuste o caminho conforme necessário
import { initializeApp } from "firebase/app";
import firebaseConfig from "../config/FirebaseConfig"

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const auth = getAuth(app);

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
        description: error.message, // Mensagem de erro do Firebase
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="md" mx="auto" mt="8" p="6" borderWidth="1px" borderRadius="lg" boxShadow="lg">
      <Heading mb={6} textAlign="center">Registrar</Heading>
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
        bg="green.500"
        color="white"
        width="full"
        _hover={{ bg: "green.600" }}
        onClick={handleRegister}
      >
        Registrar
      </Button>
      <Text mt={4} textAlign="center">
        Já tem uma conta?{" "}
        <Link as={RouterLink} to="/login" color="blue.500">
          Clique aqui para fazer login
        </Link>
      </Text>
    </Box>
  );
};

export default RegisterPage;

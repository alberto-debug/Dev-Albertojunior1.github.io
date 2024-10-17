import React from 'react'
import { Box, Button, Heading, Image, Input, Flex, Text } from "@chakra-ui/react"

export default function Banner() {
  return (
    <Box position="relative" height="700px" bg="orange.400" color="white" overflow="hidden">
      <Flex
        maxW="1200px"
        mx="auto"
        px={4}
        py={12}
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
      >
        {/* Imagem */}
        <Box w={{ base: "100%", md: "50%" }} mb={{ base: 8, md: 0 }}>
          <Image
            src="/placeholder.svg?height=300&width=300"
            alt="Delicious burger"
            maxW="full"
            h="auto"
          />
        </Box>

        {/* Conteúdo de texto */}
        <Box w={{ base: "100%", md: "50%" }} pl={{ md: 8 }}>
          <Heading as="h1" size="2xl" fontWeight="bold" mb={4}>
            Test our delicious food
          </Heading>
          <Text fontSize="xl" mb={6}>
            Fast delivery, fresh ingredients, and more!
          </Text>

          {/* Campo de endereço e botão */}
          <Flex>
            <Input
              placeholder="Enter your address"
              flex="1"
              mr={2}
              color="black"
              bg="white"
              _placeholder={{ color: "gray.500" }}
            />
            <Button bg="white" color="orange.400" _hover={{ bg: "orange.100" }}>
              Use current location
            </Button>
          </Flex>
        </Box>
      </Flex>

      {/* SVG com ondas na parte inferior */}
      <Box position="absolute" bottom={0} left={0} right={0}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 43.3C1200 47 1320 53 1380 56.7L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </Box>
    </Box>
  )
}


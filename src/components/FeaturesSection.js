import { QrCode, Menu, CreditCard, Smartphone } from "lucide-react";
import { Button, Box, Container, Heading, Text, Grid, GridItem, VStack, Flex } from "@chakra-ui/react";
import Footer from "./Footer";

const FeaturesSection = () => {
  return (
    <Box w="full">
      {/* Features Section */}
      <Box id="features" py={{ base: 12, md: 24, lg: 32 }} bg="gray.100" _dark={{ bg: "gray.800" }}>
        <Container maxW="container.lg" px={{ base: 4, md: 6 }}>
          <Heading as="h2" textAlign="center" fontSize={{ base: "3xl", sm: "5xl" }} mb={12}>
            Features
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            <GridItem>
              <Box
                bg="white"
                _dark={{ bg: "gray.700" }}
                boxShadow="md"
                borderRadius="md"
                p={6}
                textAlign="center"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-10px)",
                  boxShadow: "0px -6px 15px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Flex justifyContent="center" alignItems="center" mb={4}>
                  <QrCode size={48} />
                </Flex>
                <Heading as="h3" fontSize="xl" mb={2}>QR Code Scanning</Heading>
                <Text>Instantly access restaurant menus by scanning a QR code at your table.</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box
                bg="white"
                _dark={{ bg: "gray.700" }}
                boxShadow="md"
                borderRadius="md"
                p={6}
                textAlign="center"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-10px)",
                  boxShadow: "0px -6px 15px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Flex justifyContent="center" alignItems="center" mb={4}>
                  <Menu size={48} />
                </Flex>
                <Heading as="h3" fontSize="xl" mb={2}>Digital Menu</Heading>
                <Text>Browse through an interactive digital menu with detailed descriptions and images.</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box
                bg="white"
                _dark={{ bg: "gray.700" }}
                boxShadow="md"
                borderRadius="md"
                p={6}
                textAlign="center"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-10px)",
                  boxShadow: "0px -6px 15px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Flex justifyContent="center" alignItems="center" mb={4}>
                  <CreditCard size={48} />
                </Flex>
                <Heading as="h3" fontSize="xl" mb={2}>Easy Payment</Heading>
                <Text>Pay for your meal directly through the app with various payment options.</Text>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Box id="how-it-works" py={{ base: 12, md: 24, lg: 32 }}>
        <Container maxW="container.lg" px={{ base: 4, md: 6 }}>
          <Heading as="h2" textAlign="center" fontSize={{ base: "3xl", sm: "5xl" }} mb={12}>
            How It Works
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            <GridItem>
              <Box
                bg="white"
                _dark={{ bg: "gray.700" }}
                boxShadow="md"
                borderRadius="md"
                p={6}
                textAlign="center"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-10px)",
                  boxShadow: "0px -6px 15px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Flex justifyContent="center" alignItems="center" mb={4}>
                  <QrCode size={48} />
                </Flex>
                <Heading as="h3" fontSize="xl" mb={2}>Scan QR Code</Heading>
                <Text>Use our app to scan the QR code at your table.</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box
                bg="white"
                _dark={{ bg: "gray.700" }}
                boxShadow="md"
                borderRadius="md"
                p={6}
                textAlign="center"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-10px)",
                  boxShadow: "0px -6px 15px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Flex justifyContent="center" alignItems="center" mb={4}>
                  <Menu size={48} />
                </Flex>
                <Heading as="h3" fontSize="xl" mb={2}>Browse & Order</Heading>
                <Text>Explore the digital menu and select your items.</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box
                bg="white"
                _dark={{ bg: "gray.700" }}
                boxShadow="md"
                borderRadius="md"
                p={6}
                textAlign="center"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-10px)",
                  boxShadow: "0px -6px 15px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Flex justifyContent="center" alignItems="center" mb={4}>
                  <CreditCard size={48} />
                </Flex>
                <Heading as="h3" fontSize="xl" mb={2}>Pay & Enjoy</Heading>
                <Text>Complete your payment through the app and enjoy your meal.</Text>
              </Box>
            </GridItem>
          </Grid>
        </Container>

      </Box>

      {/* Download Section */}
      <Box py={{ base: 12, md: 24, lg: 32 }}>
  <Container maxW="container.lg" px={{ base: 4, md: 6 }}>
    <VStack spacing={4} textAlign="center">
      <Box>
        <Heading as="h2" fontSize={{ base: "3xl", sm: "5xl" }} mb={2}>
          Ready to Transform Your Dining Experience?
        </Heading>
        <Text maxW="920px" color="gray.500" fontSize={{ base: "md", md: "xl" }} _dark={{ color: "gray.400" }}>
          Download our app now and enjoy a seamless ordering and payment process at your favorite restaurants.
        </Text>
      </Box>
      <Box display="flex" justifyContent="center" gap={4}>
        <Button
          bg="black"
          color="white"
          _hover={{ bg: "gray.700" }}
          px={{ base: 2, md: 4 }}  // Ajuste responsivo para padding
          fontSize={{ base: "xs", md: "md" }}  // Ajuste responsivo para fontSize
        >
          <Smartphone className="mr-2 h-4 w-4" /> Download for iOS
        </Button>
        <Button
          bg="black"
          color="white"
          _hover={{ bg: "gray.700" }}
          px={{ base: 2, md: 4 }}  // Ajuste responsivo para padding
          fontSize={{ base: "xs", md: "md" }}  // Ajuste responsivo para fontSize
        >
          <Smartphone className="mr-2 h-4 w-4" /> Download for Android
        </Button>
      </Box>
    </VStack>

  </Container>
</Box>

    </Box>
  );
};

export default FeaturesSection;

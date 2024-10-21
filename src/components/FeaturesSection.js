import {
  Button,
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Flex,
  Link,
} from "@chakra-ui/react";
import {
  FaJava,
  FaReact,
  FaGithub,
  FaDatabase,
  FaLinux,
  FaPhp,
} from "react-icons/fa";
import {
  SiGo,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiLinkedin,
  SiGmail
} from "react-icons/si";

const handleContactClick = () => {
  window.location.href = "mailto:albertojunior848423803@gmail.com";
};

const FeaturesSection = () => {
  return (
    <Box w="full">
      {/* Projects Section */}
      <Box
        id="features"
        py={{ base: 12, md: 24, lg: 32 }}
        bg="gray.100"
        _dark={{ bg: "gray.800" }}
      >
        <Container maxW="container.lg" px={{ base: 4, md: 6 }}>
          <Heading as="h2" textAlign="center" fontSize={{ base: "3xl", sm: "5xl" }} mb={12}>
            Projects
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            {[
              {
                title: "Finance Tracker API",
                description: "Built with Java Spring Boot, this API enables users to manage their personal finances, track expenses, and generate reports for better financial planning.",
                link: "https://github.com/Dev-Albertojunior1",
                bgColor: "blue.100",
                hoverColor: "blue.200"
              },
              {
                title: "HTTP Server",
                description: "Developed in Go, this HTTP server efficiently handles client requests, enabling seamless communication between web clients and the backend for various applications.",
                link: "https://github.com/Dev-Albertojunior1",
                bgColor: "green.100",
                hoverColor: "green.200"
              },
              {
                title: "Weather Forecast",
                description: "Built with React and Node.js, this application provides real-time weather updates, providing users with accurate forecasts and weather conditions for any location.",
                link: "https://github.com/Dev-Albertojunior1",
                bgColor: "purple.100",
                hoverColor: "purple.200"
              },
              {
                title: "Student Management System",
                description: "A full-stack application using Java Spring Boot, React, and MySQL to manage student data, including registration, grades, and class scheduling with a user-friendly interface and secure backend.",
                link: "https://github.com/Dev-Albertojunior1",
                bgColor: "orange.100",
                hoverColor: "orange.200"
              },
              {
                title: "Hospital Management",
                description: "A comprehensive web application for hospital management, built using Java Spring Boot and React. It facilitates patient records, appointment scheduling, doctor information, and inventory management of medicines.",
                link: "https://github.com/Dev-Albertojunior1",
                bgColor: "teal.100",
                hoverColor: "teal.200"
              },
              {
                title: "E-Commerce Platform",
                description: "An intuitive e-commerce platform developed with Java Spring Boot and React, featuring a user-friendly interface, secure payment processing, and integrated shopping cart.",
                link: "https://github.com/Dev-Albertojunior1",
                bgColor: "pink.100",
                hoverColor: "pink.200"
              },
            ].map((project, index) => (
              <GridItem key={index}>
                <Box
                  bg={project.bgColor}
                  _dark={{ bg: "gray.700" }}
                  boxShadow="lg"
                  borderRadius="md"
                  p={6}
                  textAlign="center"
                  transition="all 0.3s ease"
                  border="2px solid #1e90ff"
                  _hover={{
                    transform: "translateY(-10px)",
                    boxShadow: "0px -6px 20px rgba(0, 0, 0, 0.3)",
                    bg: project.hoverColor,
                  }}
                >
                  <Heading as="h3" fontSize="xl" mb={2}>
                    {project.title}
                  </Heading>
                  <Text mb={4}>{project.description}</Text>
                  <Link href={project.link} isExternal>
                    <Button
                      leftIcon={<FaGithub />} // Adding GitHub icon
                      colorScheme="red"
                      variant="solid"
                      mt={4}
                      size="sm"
                      _hover={{ bg: "teal.600" }}
                    >
                      Repository
                    </Button>
                  </Link>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box
        id="skills"
        py={{ base: 12, md: 24, lg: 32 }}
        bg="gray.100"
        _dark={{ bg: "gray.800" }}
      >
        <Container maxW="container.lg" px={{ base: 4, md: 6 }}>
          <Heading as="h2" textAlign="center" fontSize={{ base: "3xl", sm: "5xl" }} mb={12}>
            My Skills
          </Heading>
          <Grid
            templateColumns={{
              base: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(6, 1fr)",
            }}
            gap={8}
            justifyItems="center"
          >
            <GridItem textAlign="center" color="#007396">
              <FaJava size={50} />
            </GridItem>
            <GridItem textAlign="center" color="#61DBFB">
              <FaReact size={50} />
            </GridItem>
            <GridItem textAlign="center" color="#333">
              <FaGithub size={50} />
            </GridItem>
            <GridItem textAlign="center" color="#F80000">
              <FaDatabase size={50} />
            </GridItem>
            <GridItem textAlign="center" color="#FCC624">
              <FaLinux size={50} />
            </GridItem>
            <GridItem textAlign="center" color="#4F5B93">
              <FaPhp size={50} />
            </GridItem>
            <GridItem textAlign="center" color="#00ADD8">
              <SiGo size={50} />
            </GridItem>
            <GridItem textAlign="center" color="#FFCA28">
              <SiFirebase size={50} />
            </GridItem>
            <GridItem textAlign="center" color="#4DB33D">
              <SiMongodb size={50} />
            </GridItem>
            <GridItem textAlign="center" color="#336791">
              <SiPostgresql size={50} />
            </GridItem>
            <GridItem textAlign="center" color="#007ACC">
              <SiTypescript size={50} />
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* About Me Section */}
      <Box id="how-it-works" py={{ base: 12, md: 24, lg: 32 }}>
        <Container maxW="container.lg" px={{ base: 4, md: 6 }}>
          <Heading as="h2" textAlign="center" fontSize={{ base: "3xl", sm: "5xl" }} mb={12}>
            About Me
          </Heading>
          <Text textAlign="center" fontSize="lg">
            I am a passionate backend software developer with expertise in Java Spring Boot, TypeScript, and JavaScript. With a strong focus on building scalable and efficient systems, I have hands-on experience in creating robust APIs, managing databases, and developing microservices architectures. My goal is to continuously enhance system performance and deliver reliable solutions that meet client needs, while staying updated with the latest technology trends.
          </Text>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box py={8} textAlign="center">
        <Heading as="h2" textAlign="center" fontSize={{ base: "3xl", sm: "5xl" }} mb={12}>
          Contact Me
        </Heading>
        <Flex justifyContent="center" gap={4}>
          {/* GitHub Icon */}
          <Link href="https://github.com/Dev-Albertojunior1" isExternal>
            <Box
              p={2}
              bg="black"
              borderRadius="full"
              boxShadow="lg"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{ transform: "scale(1.1)", transition: "0.3s" }}
            >
              <FaGithub size={24} color="#fff" />
            </Box>
          </Link>

          {/* LinkedIn Icon */}
          <Link href="https://www.linkedin.com/in/alberto-junior-77432b227/" isExternal>
            <Box
              p={2}
              bg="black"
              borderRadius="full"
              boxShadow="lg"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{ transform: "scale(1.1)", transition: "0.3s" }}
            >
              <SiLinkedin size={24} color="#fff" />
            </Box>
          </Link>

          {/* Email Button */}
          <Button onClick={handleContactClick} colorScheme="teal" size="lg">
            Contact Me
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default FeaturesSection;

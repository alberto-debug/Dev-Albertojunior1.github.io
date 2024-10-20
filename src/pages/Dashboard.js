import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faBasketShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Text,
  Flex,
  Input,
  IconButton,
  Image,
  Badge,
  Stack,
  Heading,
  Grid,
  GridItem,
  HStack,
} from "@chakra-ui/react";
import restaurant1 from "../images/restaurant1.jpg";
import breakfast from "../images/breakfast.jpg";
import lunch from "../images/lunch.jpg";
import dinner from "../images/dinner.jpg";
import snacks from "../images/snacks.jpg";

export default function Dashboard() {
  const hours = new Date().getHours();
  const greeting =
    hours < 12
      ? "Good Morning!"
      : hours < 18
      ? "Good Afternoon!"
      : "Good Evening!";

  const [selectedDiv, setSelectedDiv] = React.useState("All");

  const containerRef = React.useRef(null);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box w="100vw" align="center" p={4}>
      {/* Top Section */}
      <Flex
        justify="space-between"
        align="center"
        minW="327px"
        maxW="1100px"
        mb={4}
      >
        <Flex>
          <Link to="/camera">
            <IconButton
              icon={<FontAwesomeIcon icon={faExpand} />}
              aria-label="Expand"
              borderRadius="full"
              bg="#ecf0f4"
              fontSize="xl"
            />
          </Link>

          <Box textAlign="left" ml={4} mt="-1px">
            <Text color="#FF7622" fontWeight="bold" fontSize="medium">
              SCAN QR
            </Text>
            <Text fontSize="small">to place order</Text>
          </Box>
        </Flex>
        <Link to={"/order"}>
          <Box position="relative">
            <IconButton
              icon={<FontAwesomeIcon icon={faBasketShopping} />}
              aria-label="Cart"
              borderRadius="full"
              bg="black"
              color="white"
              fontSize="lg"
            />
            <Badge
              position="absolute"
              top="-10px"
              right="-10px"
              borderRadius="full"
              px={2}
              py={1}
              fontSize="0.7rem"
              colorScheme="orange"
            >
              2
            </Badge>
          </Box>
        </Link>
      </Flex>

      {/* Greetings */}
      <Text mb={4} fontSize="md" textAlign="left" maxW="700px">
        Hey,{" "}
        <Text as="span" fontWeight="bold">
          {greeting}
        </Text>
      </Text>

      {/* Search Section */}
      <Flex
        align="center"
        bg="#f6f6f6"
        w="100%"
        minW="327px"
        maxW="700px"
        h="62px"
        borderRadius="10px"
        px={4}
        boxShadow="md"
        mb={4}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <Input
          placeholder="Search dishes, restaurants"
          variant="unstyled"
          ml={2}
          _placeholder={{ color: "gray.500" }}
        />
      </Flex>

      {/* Categories */}
      <Flex
        justify="space-between"
        align="center"
        minW="327px"
        maxW="1100px"
        mb={4}
      >
        <Text fontSize="lg" fontWeight="bold">
          All Categories
        </Text>
        <Text fontSize="sm" color="blue.500" onClick={scrollToBottom}>
          See All
        </Text>
      </Flex>

      {/* Category Cards */}
      <div className="container--div" ref={containerRef}>
        <div
          className="container--content"
          onClick={() => setSelectedDiv("All")}
          style={{
            backgroundColor: selectedDiv === "All" ? "#FF7622" : "#F6F6F6",
          }}
        >
          <div>
            {" "}
            <img src={snacks} />{" "}
          </div>
          <p>All</p>
        </div>
        <div
          className="container--content"
          onClick={() => setSelectedDiv("Breakfast")}
          style={{
            backgroundColor:
              selectedDiv === "Breakfast" ? "#FF7622" : "#F6F6F6",
          }}
        >
          <div>
            <img src={breakfast} />{" "}
          </div>
          <p>Breakfast</p>
        </div>
        <div
          className="container--content"
          onClick={() => setSelectedDiv("Lunch")}
          style={{
            backgroundColor: selectedDiv === "Lunch" ? "#FF7622" : "#F6F6F6",
          }}
        >
          <div>
            <img src={lunch} />{" "}
          </div>
          <p>Lunch</p>
        </div>
        <div
          className="container--content"
          onClick={() => setSelectedDiv("Dinner")}
          style={{
            backgroundColor: selectedDiv === "Dinner" ? "#FF7622" : "#F6F6F6",
          }}
        >
          <div>
            <img src={dinner} />{" "}
          </div>
          <p>Dinner</p>
        </div>
      </div>

      {/* Open Restaurants */}
      <Flex
        justify="space-between"
        align="center"
        minW="327px"
        maxW="1100px"
        mb={4}
      >
        <Text fontSize="lg" fontWeight="bold">
          Open Restaurants
        </Text>
        <Text fontSize="sm" color="blue.500">
          See All
        </Text>
      </Flex>

      {/* Restaurant Cards */}
      <Flex justify="center" direction="row" wrap="wrap" gap={4} maxW="1100px">
        <RestaurantCard
          image={restaurant1}
          name="Str8 Bistro"
          rating="4"
          numDishes="1"
        />
        <RestaurantCard
          image={lunch}
          name="Dine Restaurant"
          rating="3"
          numDishes="0"
        />
        <RestaurantCard
          image={breakfast}
          name="Foodie Hotel"
          rating="5"
          numDishes="2"
        />
        <RestaurantCard
          image={dinner}
          name="Shine Cuisines"
          rating="1"
          numDishes="4"
        />
        <RestaurantCard
          image={restaurant1}
          name="Haven Suite"
          rating="2"
          numDishes="3"
        />
        <RestaurantCard
          image={restaurant1}
          name="Lake View Hotel"
          rating="5"
          numDishes="2"
        />
      </Flex>
    </Box>
  );
}

const CategoryCard = ({ image, title }) => (
  <Box bg="#ffd27c" borderRadius="39px" p={2} d="flex" alignItems="center">
    <Box bg="#f6f6f6" borderRadius="full" h="44px" w="44px" mr={2}>
      <Image src={image} borderRadius="full" boxSize="full" />
    </Box>
    <Text>{title}</Text>
  </Box>
);

const RestaurantCard = ({ image, name, rating, numDishes }) => (
  <Box w="350px">
    <Image src={image} borderRadius="10px" w="100%" h="233px" />
    <Flex direction="row" align="center" justify="space-between">
      <Heading as="h2" size="sm" mt={2} textAlign="left">
        {name}
      </Heading>
      <Text fontSize="sm" color="gray.500" mt={2}>
        {rating} ⭐ | {numDishes} Dishes
      </Text>
    </Flex>
  </Box>
);

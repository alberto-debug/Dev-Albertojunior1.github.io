"use client"

import React, { useState } from 'react';
import { Box, Flex, Link, IconButton, Stack } from '@chakra-ui/react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box bg="white" boxShadow="md" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Link href="/" fontSize="xl" fontWeight="bold" color="gray.800">
          Logo
        </Link>
        <IconButton
          size="md"
          icon={isOpen ? <FiX /> : <FiMenu />}
          aria-label="Toggle menu"
          display={{ md: 'none' }}
          onClick={toggleMenu}
        />
        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
          <Stack direction="row" spacing={4}>
            <Link href="/" color="gray.800" _hover={{ color: 'blue.500' }}>
              Home
            </Link>
            <Link href="/about" color="gray.800" _hover={{ color: 'blue.500' }}>
              About
            </Link>
            <Link href="/services" color="gray.800" _hover={{ color: 'blue.500' }}>
              Services
            </Link>
            <Link href="/contact" color="gray.800" _hover={{ color: 'blue.500' }}>
              Contact
            </Link>
          </Stack>
        </Flex>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            <Link href="/" color="gray.800" _hover={{ color: 'blue.500' }}>
              Home
            </Link>
            <Link href="/about" color="gray.800" _hover={{ color: 'blue.500' }}>
              About
            </Link>
            <Link href="/services" color="gray.800" _hover={{ color: 'blue.500' }}>
              Services
            </Link>
            <Link href="/contact" color="gray.800" _hover={{ color: 'blue.500' }}>
              Contact
            </Link>
          </Stack>
        </Box>
      )}
    </Box>
  );
}


import { Container, Text, VStack, Box, Button, Image, IconButton, HStack } from "@chakra-ui/react";
import { FaBook, FaPuzzlePiece, FaPaintBrush } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Text fontSize="4xl" fontWeight="bold" color="teal.500">
          Welcome to FunBooks!
        </Text>
        <Text fontSize="xl" textAlign="center">
          A platform for children’s books with fun and engaging activities.
        </Text>

        <Image src="https://images.unsplash.com/photo-1509114859430-5f2c74177f4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHJlYWRpbmclMjBib29rc3xlbnwwfHx8fDE3MTYyMjY1NjZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Children reading books" borderRadius="md" boxShadow="lg" />

        <HStack spacing={4}>
          <Button leftIcon={<FaBook />} colorScheme="teal" variant="solid" size="lg">
            Read Books
          </Button>
          <Button leftIcon={<FaPuzzlePiece />} colorScheme="orange" variant="solid" size="lg">
            Play Puzzles
          </Button>
          <Button leftIcon={<FaPaintBrush />} colorScheme="pink" variant="solid" size="lg">
            Draw & Color
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;

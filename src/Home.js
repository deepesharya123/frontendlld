import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box mt={4}>
      <Flex gap={2} justifyContent="center">
        <Button
          colorScheme="blue"
          onClick={() => navigate("/infiniteScroller")}
        >
          Infinite Scroller
        </Button>
        <Button colorScheme="blue">Coming Soon</Button>
        <Button colorScheme="blue">Coming Soon</Button>
      </Flex>
    </Box>
  );
};

export default Home;

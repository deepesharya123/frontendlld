import { Box, Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const projectDetails = [
    { title: "Infinite Scroller", navigationPath: "/infiniteScroller" },
    { title: "Edit Image", navigationPath: "/editImage" },
    { title: "Cominng Soon", navigationPath: "/infiniteScroller" },
  ];
  return (
    <Box mt={4}>
      <Flex justifyContent="center" gap={2}>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} justifyContent="center">
          {projectDetails.map((project) => (
            <GridItem w="100%" h="10" bg="blue.500">
              <Button
                colorScheme="blue"
                onClick={() => navigate(project.navigationPath)}
              >
                {project.title}
              </Button>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default Home;

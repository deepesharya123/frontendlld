import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Joke = (props) => {
  const { joke, number } = props;
  return (
    <GridItem className="joke">
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="filled"
        boxShadow="md"
        p={{ base: 4, sm: 6 }}
      >
        <Stack>
          <CardBody>
            <Text>#{number}</Text>
            <Badge size="md" colorScheme="teal" my={2} fontWeight="bold">
              {joke.category}
            </Badge>

            {joke.type === "twopart" && (
              <Box my={4}>
                <Text>Setup - {joke.setup}</Text>
                <Text>Delivery - {joke.delivery}</Text>
              </Box>
            )}

            {joke.type === "single" && (
              <Box>
                <Text>Joke - {joke.joke}</Text>
              </Box>
            )}
          </CardBody>
        </Stack>
      </Card>
    </GridItem>
  );
};

export default Joke;

import {
  Badge,
  Box,
  Card,
  CardBody,
  Flex,
  GridItem,
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
                <Flex gap={2}>
                  <Text
                    fontWeight="bold"
                    display="contents"
                    whiteSpace="nowrap"
                  >
                    Setup -
                  </Text>
                  <Text>{joke.setup}</Text>
                </Flex>

                <Flex gap={2}>
                  <Text
                    fontWeight="bold"
                    display="contents"
                    whiteSpace="nowrap"
                  >
                    Delivery -
                  </Text>
                  <Text> {joke.delivery}</Text>
                </Flex>
              </Box>
            )}

            {joke.type === "single" && (
              <Flex gap={2}>
                <Text fontWeight="bold" display="contents" whiteSpace="nowrap">
                  Joke -
                </Text>
                <Text> {joke.joke}</Text>
              </Flex>
            )}
          </CardBody>
        </Stack>
      </Card>
    </GridItem>
  );
};

export default Joke;

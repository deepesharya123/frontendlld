import { Box, Button, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import Jokes from "./Jokes";

const InfiniteScroller = () => {
  const [query, setQuery] = useState("");
  const [jokesList, setJokesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchJokes = async () => {
    setIsLoading(true);
    try {
      const fetchedJokes = await fetch(
        `https://v2.jokeapi.dev/joke/Any?amount=7&contains=${query}`,
        {
          method: "GET",
        }
      );
      const data = await fetchedJokes.json();

      setJokesList((prevJokesList) => {
        const newJokesList = [...prevJokesList];
        data?.jokes && newJokesList.push(...data?.jokes);
        return newJokesList;
      });
    } catch (e) {
      console.log("Error while fetching the jokes", e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box mt={2}>
      <Flex gap={2} justifyContent="center">
        <Input
          width="40%"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Search your joke"
        />
        <Button colorScheme="blue" onClick={fetchJokes}>
          Submit
        </Button>
      </Flex>
      <Jokes
        query={query}
        jokesList={jokesList}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        fetchJokes={fetchJokes}
      />
    </Box>
  );
};

export default InfiniteScroller;

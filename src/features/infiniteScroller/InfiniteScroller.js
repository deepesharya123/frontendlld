import { Box, Button, useToast, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import Jokes from "./Jokes";
import { Toast } from "../../utils/Toast";

const InfiniteScroller = () => {
  const [query, setQuery] = useState("");
  const [jokesList, setJokesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingAtEnd, setIsLoadingAtEnd] = useState(false);
  const toast = useToast();

  const fetchJokes = async () => {
    try {
      const fetchedJokes = await fetch(
        `https://v2.jokeapi.dev/joke/Any?amount=7&contains=${query}`,
        {
          method: "GET",
        }
      );
      const data = await fetchedJokes.json();
      if (data.error) throw new Error(data.message);
      setJokesList((prevJokesList) => {
        const newJokesList = [...prevJokesList];
        data?.jokes && newJokesList.push(...data?.jokes);
        return newJokesList;
      });
    } catch (e) {
      Toast({
        toast: toast,
        title: "Error",
        description: e.message,
        status: "error",
      });
      console.log("Error while fetching the jokes", e);
    } finally {
      setIsLoading(false);
      setIsLoadingAtEnd(false);
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
        <Button
          colorScheme="blue"
          onClick={() => {
            setIsLoading(true);
            fetchJokes();
          }}
        >
          Submit
        </Button>
      </Flex>
      <Jokes
        query={query}
        jokesList={jokesList}
        isLoading={isLoading}
        isLoadingAtEnd={isLoadingAtEnd}
        setIsLoading={setIsLoading}
        fetchJokes={fetchJokes}
        setIsLoadingAtEnd={setIsLoadingAtEnd}
      />
    </Box>
  );
};

export default InfiniteScroller;

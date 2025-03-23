import { Box, Center, Grid, Spinner } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Joke from "./Joke";

const Jokes = (props) => {
  const { jokesList, isLoading, query, fetchJokes } = props;

  useEffect(() => {
    const observable = new IntersectionObserver(
      (param) => {
        if (param[0].isIntersecting) {
          fetchJokes();
          observable.unobserve(lastElement);
        }
      },
      { threshold: 1 }
    );

    const lastElement = document.querySelector(".joke:last-child");
    if (!lastElement) return;
    observable.observe(lastElement);
  }, [jokesList]);
  return (
    <Box justifySelf="center" mt={4} width="60%">
      {isLoading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <Grid templateColumns="repeat(1, 1fr)" gap={6}>
          {jokesList?.map((joke, index) => (
            <Joke joke={joke} key={joke.id} number={index + 1} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Jokes;

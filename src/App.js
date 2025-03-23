import { Box, Button } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import InfiniteScroller from "./features/infiniteScroller/InfiniteScroller";
import NoPage from "./NoPage";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/infiniteScroller" element={<InfiniteScroller />} />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;

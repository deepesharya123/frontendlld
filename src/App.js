import { ChakraProvider } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import InfiniteScroller from "./features/infiniteScroller/InfiniteScroller";
import Home from "./Home";
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

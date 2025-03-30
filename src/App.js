import { ChakraProvider } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import InfiniteScroller from "./features/infiniteScroller/InfiniteScroller";
import Home from "./Home";
import NoPage from "./NoPage";
import EditImage from "./features/EditImage/EditImage";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/infiniteScroller" element={<InfiniteScroller />} />
          <Route path="/editImage" element={<EditImage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;

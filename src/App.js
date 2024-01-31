import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router ,Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <ChakraProvider>
        <Router> 
          <Routes>
            <Route path="/" element={<div><Home/></div>} />
            <Route path="/shop" element={<div><Shop/></div>} />
            <Route path="/product/:slug" element={<div><Product/></div>} />
            <Route path="/cart" element={<div><Cart/></div>} />
            <Route path="/checkout" element={<div><Checkout/></div>} />
          </Routes>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;

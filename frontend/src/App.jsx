import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Verify from "./pages/Verify";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    // <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[6vw]">
    <div className="">
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route
          path="/collection/men"
          element={<Collection defaultCategory="Men" />}
        />
        <Route
          path="/collection/men-topwear"
          element={<Collection defaultCategory="Men" subCategory="Topwear" />}
        />
        <Route
          path="/collection/men-bottomwear"
          element={
            <Collection defaultCategory="Men" subCategory="Bottomwear" />
          }
        />
        <Route
          path="/collection/men-winterwear"
          element={
            <Collection defaultCategory="Men" subCategory="Winterwear" />
          }
        />
        <Route
          path="/collection/women"
          element={<Collection defaultCategory="Woman" />}
        />
        <Route
          path="/collection/women-topwear"
          element={<Collection defaultCategory="Woman" subCategory="Topwear" />}
        />
        <Route
          path="/collection/women-bottomwear"
          element={
            <Collection defaultCategory="Woman" subCategory="Bottomwear" />
          }
        />
        <Route
          path="/collection/women-winterwear"
          element={
            <Collection defaultCategory="Woman" subCategory="Winterwear" />
          }
        />
        <Route
          path="/collection/kids"
          element={<Collection defaultCategory="Kids" />}
        />
        <Route
          path="/collection/kids-topwear"
          element={<Collection defaultCategory="Kids" subCategory="Topwear" />}
        />
        <Route
          path="/collection/kids-bottomwear"
          element={
            <Collection defaultCategory="Kids" subCategory="Bottomwear" />
          }
        />
        <Route
          path="/collection/kids-winterwear"
          element={
            <Collection defaultCategory="Kids" subCategory="Winterwear" />
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

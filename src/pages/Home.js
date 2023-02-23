import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import SignupForm from "../components/SignupForm";
import Slider from "../components/Slider";
import Cart from "./Cart";
import Login from "./Login";
import Product from "./Product";
import ProductList from "./ProductList";
import Register from "./Register";


const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products/>
      <Newsletter/>
      <Footer/>

      {/* <Register />
      <Login />
      <Cart />
      <Product/>
      <ProductList />
      <SignupForm /> */}


    </div>
  );
};

export default Home;
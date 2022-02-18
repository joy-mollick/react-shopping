import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import App from "./App";
// import Expenses from "./routes/expenses";
// import Invoices from "./routes/invoices";
import Signin from "./routes/signin";
import Signup from "./routes/signup";
import Products from "./routes/products";
import Favourites from "./routes/favourites";
import Carts from "./routes/carts";
import Orders from "./routes/orders";
import Profile from "./routes/profile";

const rootElement = document.getElementById("root");

render(
  
  <BrowserRouter>

    <Routes>

      <Route path="/" element={<Signin />} />
      <Route path="products" element={<Products />} />
      <Route path="signin" element={<Signin />} />
      <Route path="signup" element={<Signup />} />
      <Route path="favourites" element={<Favourites />} />
      <Route path="carts" element={<Carts />} />
      <Route path="orders" element={<Orders />} />
      <Route path="profile" element={<Profile />} />

    </Routes>

  </BrowserRouter>,
  rootElement
);
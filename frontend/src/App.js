import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ProductScreen } from "./screens/ProductScreen.js";
import CartScreen from "./screens/CartScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import ShippingScreen from "./screens/ShippingScreen.js";
import PaymentScreen from "./screens/PaymentScreen.js";
import PlaceOrderScreen from "./screens/PlaceOrderScreen.js";
import OrderScreen from "./screens/OrderScreen.js";
import UserListScreen from "./screens/UserListScreen.js";
import AdminUserEditScreen from "./screens/AdminUserEditScreen.js";
import AdminProductListScreen from "./screens/AdminProductListScreen.js";
import AdminProductEditScreen from "./screens/AdminProductEditScreen.js";
import AdminOrderListScreen from "./screens/AdminOrderListScreen.js";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/admin/user/:id/edit" component={AdminUserEditScreen} />
          <Route path="/admin/productlist" component={AdminProductListScreen} />
          <Route path="/admin/orderlist" component={AdminOrderListScreen} />
          <Route
            path="/admin/product/:id/edit"
            component={AdminProductEditScreen}
          />
          <Route path="/search/:keyword" component={HomeScreen} />
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

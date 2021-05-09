import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ProductScreen } from "./screens/ProductScreen.js";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

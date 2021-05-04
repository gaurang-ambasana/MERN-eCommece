import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>Welcome to ProShop!</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;

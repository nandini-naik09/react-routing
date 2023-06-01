import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Menu from "./Component/Menu";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

function App() {
  return (
    <div >
        <br/>
      <Menu />
       <br/>
      <Header />
      <div className="container">
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/home" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/contact" Component={Contact} />
        <Route />
      </Routes>
      </div>
      <br/>
      <Footer />
    </div>
  );
}

export default App;

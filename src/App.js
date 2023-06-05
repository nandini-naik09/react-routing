import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Menu from "./Component/Menu";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import NotFound from "./Component/NotFound";
import Users from "./Component/Users";
import UserDetails from "./Component/UserDetails";
import AddNewUser from "./Component/AddNewUser";
import EditUser from "./Component/EditUser";


function App() {
  return (
    <div>
      <br />
      <Menu />
      <br />
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/home" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/Users"  Component={Users} />
          <Route path="/add-user" Component={AddNewUser}/>
          <Route path="/edit-user/:id" Component={EditUser}/>
          <Route path="/user-details/:id" Component={UserDetails}/>
          <Route path="*" Component={NotFound} />
          <Route />
        </Routes>
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default App;

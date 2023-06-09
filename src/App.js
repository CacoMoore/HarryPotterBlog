

import { BrowserRouter, Routes, Route } from "react-router-dom";
import injectContext from "./store/context";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./views/home";
import Favorites from "./views/favorites";
import Gryffindor from "./views/gryffindor";
import Ravenclaw from "./views/ravenclaw";
import Hufflepuff from "./views/hufflepuff";
import Slytherin from "./views/slytherin";
import Detail from "./views/detail";
import Login from "./views/login";
import Register from "./views/register";

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/gryffindor" element={<Gryffindor />} />
          <Route path="/ravenclaw" element={<Ravenclaw />} />
          <Route path="/hufflepuff" element={<Hufflepuff />} />
          <Route path="/slytherin" element={<Slytherin />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          

        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  );
};

export default injectContext(App);
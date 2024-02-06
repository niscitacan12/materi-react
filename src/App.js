import React from "react";
import Navbar from "./component/navbar";
import Detail from "./pages/Detail";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Produk from "./pages/Produk";
import Home from "./pages/Home";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import TesJson from "./pages/json";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <TesJson /> */}
      <Container className="mt-4">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/data_barang" component={Detail} exact />
            <Route path="/pesan" component={Contact} exact />
            <Route path="/profile/user" component={Profile} exact />
            <Route path="/produk" component={Produk} exact />
          </Switch>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
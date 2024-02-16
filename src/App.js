import React from "react";
import Navbar from "./component/navbar";
import Detail from "./crud/Detail";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Produk from "./pages/Produk";
import Home from "./pages/Home";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetailProduct from "./pages/DetailProduct";
import Edit from './crud/Edit';
import TambahData from "./crud/Tambah";
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
            <Route path="/tambah_data" component={TambahData} exact />
            <Route path="/edit" component={Edit} exact />
            <Route path="/detail_product/:id_produks" component={DetailProduct} exact />
            <Route path="/edit/:id_produks" component={Edit} exact />
          </Switch>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
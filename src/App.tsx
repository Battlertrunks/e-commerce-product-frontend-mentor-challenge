import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ImageContainer from "./components/ImageContainer";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <main className="App">
      <Header />
      <ImageContainer />
      <ProductDetails />
    </main>
  );
}

export default App;

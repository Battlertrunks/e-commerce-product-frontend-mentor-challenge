import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ImageContainer from "./components/ImageContainer";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ImageContainer />
        <ProductDetails />
      </main>
    </div>
  );
}

export default App;

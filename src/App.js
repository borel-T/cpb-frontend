import "./App.css";
import React from "react";
import Products from "./pages/products";
import Header from "./components/header";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Products />
      </main>
    </div>
  );
}

export default App;

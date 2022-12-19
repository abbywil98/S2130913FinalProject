import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Recipe from "./components/Recipe";
import ShoppingList from "./components/ShoppingList";
import NoPage from "./components/NoPage";
import Footer from"./components/Footer";
import NutrionalInfo from "./components/NutritionalInfo";




function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Recipe />} />
          <Route path="/nutritionalinfo" element={<NutrionalInfo />} />
          <Route path="/shoppinglist" element={<ShoppingList />} />

        <Route path="*" element={<NoPage />} />
        </Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
 
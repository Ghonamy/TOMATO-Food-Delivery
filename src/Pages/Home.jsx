import React, { useState } from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import FoodDisplay from "../Components/FoodDisplay";
import AppDownload from "../Components/AppDownload";

const Home = () => {
  const [Category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <Menu Category={Category} setCategory={setCategory} />
      <FoodDisplay Category={Category} />
      <AppDownload />
    </div>
  );
};

export default Home;

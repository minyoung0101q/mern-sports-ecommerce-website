import React from "react";
import Header from "../components/Header";
import Main from "../components/Home/Main";
import MainProducts from '../components/products/MainProducts';
import Sidebar from "./../components/sidebar";

const HomeScreen = ({match}) => {
  const keyword = match.params.keyword
  return (
    <>
    
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <Main />
      </main>
    </>
  );
};

export default HomeScreen;

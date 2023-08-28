import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex w-full gap-[2px]">
      <Footer></Footer>
      <Header></Header>
    </div>
  );
}

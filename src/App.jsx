import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import data from "./data.js";

function App() {
  const cards = data.map((item) => {
    return <Content item={item} />;
  });
  return (
    <div>
      <div className="px-24">
        <Navbar />
      </div>

      <div>
        <img
          className=" w-full h-[682px] object-cover object-center"
          src="https://i.etsystatic.com/19125345/r/il/ccf5e9/2119948574/il_fullxfull.2119948574_afhs.jpg"
        />
        <span class="absolute top-1/4 left-1/3 transform -translate-x-1/2 bg-white py-12 px-4  text-9xl font-bold">
    My Travel Journal
  </span>
      </div>

      <div className="grid grid-cols-5 px-24">{cards}</div>
    </div>
  );
}

export default App;

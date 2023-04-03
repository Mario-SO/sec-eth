import { useState } from "react";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import Thread from "./components/Thread";
import data from "../data/data.json";

import { v4 as uuidv4 } from 'uuid';
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>("Threads");
  const filteredData = data.filter((item) => item.category === selectedCategory || !selectedCategory);

  return (
    <div className="font-jetbrains">
      <Hero />
      <Navbar setCategory={setSelectedCategory} />
      <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        {filteredData.map((item) => {
          if (item.category === "Websites") {
            return (
              <div key={uuidv4()}>
                <Card
                  title={item.title}
                  link={item.link}
                  description={item.description}
                  tag={item.tag}
                />
              </div>
            );
          } else if (item.category === "Videos") {
            return (
              <div key={uuidv4()}>
                <Video embedCode={item.code} />
              </div>
            );
          } else if (item.category === "Threads") {
            return (
              <div key={uuidv4()}>
                <Thread embedCode={item.code} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Home;
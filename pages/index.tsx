import { useState } from "react";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import Thread from "./components/Thread";
import data from "../data/data.json";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>("Threads");
  const filteredData = data.filter((item) => item.category === selectedCategory || !selectedCategory);

  return (
    <div className="font-jetbrains">
      <Hero />
      <Navbar setCategory={setSelectedCategory} />
      <div className="flex flex-wrap gap-3 justify-center my-10 container">
        {filteredData.map((item, index) => {
          if (item.category === "Websites") {
            return (
              <Card
                key={index}
                title={item.title}
                link={item.link}
                description={item.description}
                tag={item.tag}
              />
            );
          } else if (item.category === "Videos") {
            return <Video key={index} embedCode={item.code} />;
          } else if (item.category === "Threads") {
            return <Thread key={index} embedCode={item.code} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

import { useState } from "react";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import Thread from "./components/Thread";
import data from "../data/data.json";

import { v4 as uuidv4 } from 'uuid';
import Head from "next/head";
import { Interface } from "readline";

interface IWebSite {
  title: string;
  link: string;
  description: string;
  tag: string;
  category: string;
};

interface IVideo {
  title: string;
  code: string;
};

interface IThread {
  title: string;
  code: string;
};

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>("Threads");
  const filteredData = data.filter((item) => item.category === selectedCategory || !selectedCategory);

  return (
    <div className="font-jetbrains mb-10">
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛡️</text></svg>"
        />
        <title>sec-eth.xyz</title>
      </Head>
      <Hero />
      <Navbar setCategory={setSelectedCategory} />
      <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        {renderCards(filteredData)}
      </div>
    </div>
  );
};

const renderCards = (filteredData: Array<any>) => {
  return filteredData.map((item) => {
    if (item.category === "Websites") {
      return renderWebsite(item);
    } else if (item.category === "Videos") {
      return renderVideo(item);
    } else if (item.category === "Threads") {
      return renderThread(item);
    } else {
      return null;
    }
  });
};

const renderWebsite = (item: IWebSite) => {
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
};

const renderVideo = (item: IVideo) => {
  return (
    <div key={uuidv4()}>
      <Video embedCode={item.code} />
    </div>
  );
};

const renderThread = (item: IThread) => {
  return (
    <div key={uuidv4()}>
      <Thread embedCode={item.code} />
    </div>
  );
};

export default Home;
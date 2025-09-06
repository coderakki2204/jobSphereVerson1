import Navbar from "../componets/Navbar";

import Hero from "../componets/Hero";
import Dashboard from "./Dashboard";
import SearchBar from "../componets/SearchBar";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SearchBar />
      <Dashboard />
    </div>
  );
};

export default Home;

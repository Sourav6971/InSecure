import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Pricing from "../../components/Pricing/Pricing";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Pricing />
    </div>
  );
};

export default Home;

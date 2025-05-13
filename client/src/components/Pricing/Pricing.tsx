import { useEffect } from "react";
import "./Pricing.css";
import AOS from "aos";
const Pricing = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);
  return (
    <div className="pricing">
      <div className="tiers">
        <div data-aos="fade-up">Free tier</div>
        <div data-aos="fade-up">Individual </div>
        <div data-aos="fade-up">Enterprise</div>
      </div>
    </div>
  );
};

export default Pricing;

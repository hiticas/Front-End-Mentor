import React, { useState } from "react";
import PricingCard from "./components/PricingCard";
import PricingToggle from "./components/PricingToggle";
import bg1 from "./assets/images/bg-top.svg";
import bg2 from "./assets/images/bg-bottom.svg";

const App: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  const pricingPlans = [
    {
      plan: "Basic",
      price: isMonthly ? 19.99 : 199.99,
      features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
    },
    {
      plan: "Professional",
      price: isMonthly ? 24.99 : 249.99,
      features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
    },
    {
      plan: "Master",
      price: isMonthly ? 39.99 : 399.99,
      features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
    },
  ];

  return (
    <div className="main">
      <h2 className="title">Our Pricing</h2>
      <PricingToggle onToggle={handleToggle} isMonthly={isMonthly} />
      <div className="cards">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            plan={plan.plan}
            price={plan.price}
            features={plan.features}
            heighlight={index === 1 ? true : false}
          />
        ))}
      </div>
      <img src={bg1} className="bg1" />
      <img src={bg2} className="bg2" />
    </div>
  );
};

export default App;

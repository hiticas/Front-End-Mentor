import React from "react";

interface PricingCardProps {
  plan: string;
  price: number;
  features: string[];
  heighlight?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  heighlight,
}) => {
  return (
    <div className={`card  ${heighlight ? "card-purple" : "card-white"}`}>
      <h2 className="text-xl font-semibold">{plan}</h2>
      <div className="text-[70px] font-extrabold my-4">${price}</div>
      <ul className="list-none p-0 border-t-[1px]">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`feature ${heighlight ? "text-white" : "text-gray-500"}`}
          >
            {feature}
          </li>
        ))}
      </ul>
      <button className={`btn ${heighlight ? "btn-purple" : "btn-white"}`}>
        LEARN MORE
      </button>
    </div>
  );
};

export default PricingCard;

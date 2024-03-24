import React from "react";

interface MyFormData {
  plan: string;
  subscription: string;
  onlineServices: boolean;
  largeStorage: boolean;
  customizableProfile: boolean;
}

interface CompleteProps {
  formData: MyFormData;
  onStepClick: (step: number) => void;
}

const Complete: React.FC<CompleteProps> = ({ formData, onStepClick }) => {
  const getPlanValue = (plan: string, subscription: string): number => {
    let baseValue = 0;
    switch (plan) {
      case "arcade":
        baseValue = 9;
        break;
      case "advance":
        baseValue = 12;
        break;
      case "pro":
        baseValue = 15;
        break;
    }
    return subscription === "yearly" ? baseValue * 10 : baseValue;
  };

  const planValue = getPlanValue(formData.plan, formData.subscription);

  const getAdditionalCostValue = (
    service: string,
    subscription: string
  ): number => {
    switch (service) {
      case "onlineServices":
        return subscription === "monthly" ? 1 : 10;
      case "largeStorage":
      case "customizableProfile":
        return subscription === "monthly" ? 2 : 20;
      default:
        return 0;
    }
  };

  const getTotalCost = (
    onlineServices: boolean,
    largeStorage: boolean,
    customizableProfile: boolean
  ): number => {
    let totalCost = getPlanValue(formData.plan, formData.subscription);

    if (onlineServices) {
      totalCost += getAdditionalCostValue(
        "onlineServices",
        formData.subscription
      );
    }
    if (largeStorage) {
      totalCost += getAdditionalCostValue(
        "largeStorage",
        formData.subscription
      );
    }
    if (customizableProfile) {
      totalCost += getAdditionalCostValue(
        "customizableProfile",
        formData.subscription
      );
    }

    return totalCost;
  };

  const totalCost = getTotalCost(
    formData.onlineServices,
    formData.largeStorage,
    formData.customizableProfile
  );

  return (
    <div>
      <h1 className="font-bolder">Complete</h1>
      <div className="w-full flex justify-around">
        <div className="">
          <div className="flex">
            <h3>{formData.plan}</h3>
            <h3>({formData.subscription})</h3>
          </div>
          <button className="border-2" onClick={() => onStepClick(2)}>
            Change
          </button>
        </div>
        <div className="plan-details">
          {planValue}/{formData.subscription === "monthly" ? "mo" : "yr"}
        </div>
      </div>
      <div className="">
        {formData.onlineServices && (
          <div>
            <h3>Online Services</h3>
            <h3>
              +{getAdditionalCostValue("onlineServices", formData.subscription)}
              /{formData.subscription === "monthly" ? "mo" : "yr"}
            </h3>
          </div>
        )}
        {formData.largeStorage && (
          <div>
            <h3>Large Storage</h3>
            <h3>
              +{getAdditionalCostValue("largeStorage", formData.subscription)}/
              {formData.subscription === "monthly" ? "mo" : "yr"}
            </h3>
          </div>
        )}
        {formData.customizableProfile && (
          <div>
            <h3>Customizable Profile</h3>
            <h3>
              +
              {getAdditionalCostValue(
                "customizableProfile",
                formData.subscription
              )}
              /{formData.subscription === "monthly" ? "mo" : "yr"}
            </h3>
          </div>
        )}
      </div>
      <div>
        <h1 className="font-bold">Total: {totalCost}</h1>
      </div>
    </div>
  );
};

export default Complete;

interface MyFormData {
  plan: string;
  subscription: string;
}

interface Step2Props {
  formData: MyFormData;
  onFormChange: (fieldName: string, value: string) => void;
}

const Step2: React.FC<Step2Props> = ({ formData, onFormChange }) => {
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFormChange("plan", e.target.value);
  };

  const handleCheckboxChange = () => {
    const newSubscription =
      formData.subscription === "monthly" ? "yearly" : "monthly";
    onFormChange("subscription", newSubscription);
  };

  return (
    <div>
      <h2 className="font-bolder">Step 2: Contact Information</h2>
      <div className="select-plan">
        <div>
          <label>
            <input
              type="radio"
              value="arcade"
              checked={formData.plan === "arcade"}
              onChange={handleRadioChange}
            />
            Arcade
          </label>
          <h3>{formData.subscription === "monthly" ? "+9/mo" : "+90/yr"}</h3>
          <h3>
            {formData.subscription === "monthly" ? "" : "two months free"}
          </h3>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="advance"
              checked={formData.plan === "advance"}
              onChange={handleRadioChange}
            />
            Advance
          </label>
          <h3>{formData.subscription === "monthly" ? "+12/mo" : "+120/yr"}</h3>
          <h3>
            {formData.subscription === "monthly" ? "" : "two months free"}
          </h3>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="pro"
              checked={formData.plan === "pro"}
              onChange={handleRadioChange}
            />
            Pro
          </label>
          <h3>{formData.subscription === "monthly" ? "+15/mo" : "+150/yr"}</h3>
          <h3>
            {formData.subscription === "monthly" ? "" : "two months free"}
          </h3>
        </div>
      </div>
      <div className="select-subscription">
        <label>
          <p className={formData.subscription === "monthly" ? "font-bold" : ""}>
            Monthly
          </p>
          <input
            type="checkbox"
            checked={formData.subscription === "monthly"}
            onChange={handleCheckboxChange}
          />
          <p className={formData.subscription === "yearly" ? "font-bold" : ""}>
            Yearly
          </p>
          {/* {formData.subscription === "monthly" ? "Monthly" : "Yearly"} */}
        </label>
      </div>
    </div>
  );
};

export default Step2;

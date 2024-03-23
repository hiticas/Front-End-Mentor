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
        <label>
          <input
            type="radio"
            value="arcade"
            checked={formData.plan === "arcade"}
            onChange={handleRadioChange}
          />
          Arcade
        </label>
        <label>
          <input
            type="radio"
            value="advance"
            checked={formData.plan === "advance"}
            onChange={handleRadioChange}
          />
          Advance
        </label>
        <label>
          <input
            type="radio"
            value="pro"
            checked={formData.plan === "pro"}
            onChange={handleRadioChange}
          />
          Pro
        </label>
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

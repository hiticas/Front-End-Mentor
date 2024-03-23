interface MyFormData {
  name: string;
  email: string;
  phone: string;
  country: string;
}

interface Step2Props {
  formData: MyFormData;
  onFormChange: (fieldName: string, value: string) => void;
}

const Step2: React.FC<Step2Props> = ({ formData, onFormChange }) => {
  return (
    <div>
      <h2 className="font-bolder">Step 2: Contact Information</h2>
      <input
        type="text"
        value={formData.email}
        onChange={(e) => onFormChange("email", e.target.value)}
        placeholder="Enter your email"
      />
    </div>
  );
};

export default Step2;

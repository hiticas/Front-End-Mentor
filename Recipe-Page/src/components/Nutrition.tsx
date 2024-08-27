interface NutritionInfo {
  label: string;
  value: string;
}

const Nutrition = ({ nutrition }: { nutrition: NutritionInfo[] }) => {
  return (
    <div>
      <h1 className="text-3xl">Nutrition</h1>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      {nutrition.map((item, index) => (
        <div key={index} className="flex">
          <p>{item.label}</p>
          <p>{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Nutrition;

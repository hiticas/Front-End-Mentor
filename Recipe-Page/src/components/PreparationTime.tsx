interface PreparationTimeProps {
  totalMinutes: number;
  preparationMinutes: number;
  cookingMinutes: number;
}

const PreparationTime = ({
  totalMinutes,
  preparationMinutes,
  cookingMinutes,
}: PreparationTimeProps) => {
  return (
    <div className="preparation_time">
      <h1 className="text-3xl">Preparation time</h1>
      <ul>
        <li>Total: Approximately {totalMinutes} minutes</li>
        <li>Preparation: {preparationMinutes} minutes</li>
        <li>Cooking: {cookingMinutes} minutes</li>
      </ul>
    </div>
  );
};

export default PreparationTime;

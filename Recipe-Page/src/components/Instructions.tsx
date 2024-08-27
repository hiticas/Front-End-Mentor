interface InstructionsProps {
  instructions: string[];
}
const Instructions = ({ instructions }: InstructionsProps) => {
  return (
    <div>
      <h1 className="text-3xl">Instructions</h1>
      <ol className="list-decimal">
        {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default Instructions;

interface IngredientsProps {
  ingredients: string[];
}

const Ingredients = ({ ingredients }: IngredientsProps) => {
  return (
    <div>
      <h1 className="text-3xl">Ingredients</h1>
      <ul className="list-disc">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;

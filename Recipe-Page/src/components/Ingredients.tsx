interface IngredientsProps {
  ingredients: string[];
}

const Ingredients = ({ ingredients }: IngredientsProps) => {
  return (
    <div data-aos="fade-up" data-aos-delay="500">
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

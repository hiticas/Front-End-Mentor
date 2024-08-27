import Hero from "./Hero";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Nutrition from "./Nutrition";
import PreparationTime from "./PreparationTime";

import hero_img from "../assets/images/image-omelette.jpeg";

interface RecipePageProps {
  data: {
    hero: {
      title: string;
      description: string;
    };
    preparationTime: {
      totalMinutes: number;
      preparationMinutes: number;
      cookingMinutes: number;
    };
    ingredients: string[];
    instructions: string[];
    nutrition: {
      label: string;
      value: string;
    }[];
  };
}
const RecipePage = ({ data }: RecipePageProps) => {
  return (
    <div className="recipe_page">
      <Hero {...data.hero} image={hero_img} />
      <PreparationTime {...data.preparationTime} />
      <Ingredients ingredients={data.ingredients} />
      <Instructions instructions={data.instructions} />
      <Nutrition nutrition={data.nutrition} />
    </div>
  );
};

export default RecipePage;

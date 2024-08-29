"use client";

import { useEffect } from "react";
import RecipePage from "./components/RecipePage";
import { RECIPE_DATA } from "./constants";

import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1800, offset: 200 });
  }, []);
  return <RecipePage data={RECIPE_DATA} />;
}

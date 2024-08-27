interface HeroProps {
  title: string;
  description: string;
  image: string;
}

const Hero = ({ title, description, image }: HeroProps) => {
  return (
    <div className="hero">
      <img src={image} alt="image" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Hero;

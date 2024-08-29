interface HeroProps {
  title: string;
  description: string;
  image: string;
}

const Hero = ({ title, description, image }: HeroProps) => {
  return (
    <div className="hero" data-aos="fade-up" data-aos-delay="500">
      <img src={image} alt="image" />
      <h1 data-aos="fade-down">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Hero;

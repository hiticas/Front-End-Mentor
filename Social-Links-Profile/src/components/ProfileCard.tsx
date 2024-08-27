interface ProfileCardProps {
  name: string;
  location: string;
  description: string;
  avatar: string;
}

interface ButtonProps {
  label: string;
  href?: string | undefined;
}
const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  location,
  description,
  avatar,
}) => {
  return (
    <div className="bg-gray800 text-white p-6 rounded-xl flex flex-col items-center justify-center md:p-10">
      <img src={avatar} alt={name} className="w-24 h-24 rounded-full mb-4" />
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-green font-bold mt-2">{location}</p>
      <p className="text-center mt-6 mb-2 text-gray-300">"{description}"</p>
      <Button label="GitHub" href="https://github.com" />
      <Button label="Frontend Mentor" href="https://www.frontendmentor.io" />
      <Button label="LinkedIn" href="https://www.linkedin.com" />
      <Button label="Twitter" href="https://twitter.com" />
      <Button label="Instagram" href="https://www.instagram.com" />
    </div>
  );
};

const Button: React.FC<ButtonProps> = ({ label, href }) => (
  <button
    className="w-full bg-gray700 hover:bg-green hover:text-gray800 py-2 px-4 mt-4 rounded-lg flex items-center justify-center"
    onClick={() => window.open(href ?? "", "_blank")}
  >
    <span className="font-bold text-sm py-1">{label}</span>
  </button>
);

export default ProfileCard;

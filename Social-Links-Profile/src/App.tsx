import ProfileCard from "./components/ProfileCard";
import avatar from "./assets/images/avatar-jessica.jpeg";

export default function App() {
  return (
    <div className="app">
      <ProfileCard
        name="Jessica Randall"
        location="London, United Kingdom"
        description="Front-end developer and avid reader"
        avatar={avatar}
      />
    </div>
  );
}

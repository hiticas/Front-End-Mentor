import "./App.css";
import qr_image from "./assets/image-qr-code.png";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[305px] mx-auto bg-white p-4 rounded-xl shadow-2xl">
        <img src={qr_image} alt="qr" className="rounded-xl mb-4" />
        <p className="text-[21px] font-bold text-black text-center mb-4">
          Improve your front-end skills by building projects
        </p>
        <p className="text-md text-slate-500 text-center mb-4">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;

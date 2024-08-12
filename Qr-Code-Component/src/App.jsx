import "./App.css";
import QrCode from "./components/QrCode";
import qr_image from "./assets/image-qr-code.png";

function App() {
  return (
    <div className="app">
      <QrCode image={qr_image} />
    </div>
  );
}

export default App;

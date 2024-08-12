const QrCode = ({ image }) => {
  return (
    <div className="qr_wrapper">
      <img src={image} alt="qr" className="qr_image" />
      <p className="qr_title">
        Improve your front-end <br /> skills by building projects
      </p>
      <p className="qr_description">
        Scan the QR code to visit Frontend <br /> Mentor and take your coding
        skills to <br />
        the next level
      </p>
    </div>
  );
};

export default QrCode;

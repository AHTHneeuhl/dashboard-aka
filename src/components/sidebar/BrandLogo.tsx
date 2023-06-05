import brandLogo from "assets/icons/zag-logo.png";

const BrandLogo: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={brandLogo} alt="Zag Logo" className="w-16" />
    </div>
  );
};

export default BrandLogo;

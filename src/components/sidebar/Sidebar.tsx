import Menu from "./Menu";
import BrandLogo from "./BrandLogo";

const Sidebar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-56 h-screen p-6 bg-white shadow-md flex flex-col gap-5">
      <BrandLogo />
      <Menu />
    </div>
  );
};

export default Sidebar;

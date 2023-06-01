import Menu from "./Menu";
import Profile from "./Profile";

const Sidebar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-48 h-screen p-4 bg-white shadow-md flex flex-col gap-5">
      <Menu />
      <Profile />
    </div>
  );
};

export default Sidebar;

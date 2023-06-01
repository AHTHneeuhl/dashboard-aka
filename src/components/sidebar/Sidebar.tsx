import Menu from "./Menu";

const Sidebar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-40 h-screen p-4 bg-neutral-100 shadow-sm flex flex-col gap-5">
      <Menu />
    </div>
  );
};

export default Sidebar;

import sidebarMenu from "config/sidebarMenu";
import MenuItem from "./MenuItem";

const Menu: React.FC = () => {
  return (
    <div className="mt-4 flex flex-col gap-1 items-start justify-center">
      {sidebarMenu.map(({ path, title, icon }) => (
        <MenuItem key={title} path={path} icon={icon} title={title} />
      ))}
    </div>
  );
};

export default Menu;

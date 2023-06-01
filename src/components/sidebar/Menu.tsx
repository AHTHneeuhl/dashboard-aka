import sidebarMenu from "config/sidebarMenu";
import MenuItem from "./MenuItem";

const Menu: React.FC = () => {
  return (
    <div className="flex flex-col gap-1 items-start justify-center">
      {sidebarMenu.map(({ path, title }) => (
        <MenuItem key={title} path={path} title={title} />
      ))}
    </div>
  );
};

export default Menu;

import { NavLink, useLocation } from "react-router-dom";

interface DefaultProps {
  path: string;
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const MenuItem: React.FC<DefaultProps> = ({ path, title, icon: Icon }) => {
  const { pathname } = useLocation();
  return (
    <NavLink
      to={path}
      className={`${
        pathname === path
          ? "bg-blue-100 text-blue-700 rounded-md py-3 px-4"
          : "bg-transparent"
      }  w-full transition cursor-pointer text-neutral-600 py-3 px-4`}
    >
      <div className="flex flex-row items-center gap-2 w-full transition">
        <Icon /> {title}
      </div>
    </NavLink>
  );
};

export default MenuItem;

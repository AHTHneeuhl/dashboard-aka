import { NavLink } from "react-router-dom";

interface DefaultProps {
  path: string;
  title: string;
}

const MenuItem: React.FC<DefaultProps> = ({ path, title }) => {
  return (
    <div className="hover:bg-teal-700 hover:text-white rounded-md py-1 px-3 w-full transition cursor-pointer">
      <NavLink to={path}>{title}</NavLink>
    </div>
  );
};

export default MenuItem;

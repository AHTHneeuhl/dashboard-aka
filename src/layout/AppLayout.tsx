import { Sidebar } from "components/sidebar";

interface DefaultProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<DefaultProps> = ({ children }) => {
  return (
    <div className="relative w-full">
      <Sidebar />
      <div className="ml-56 px-12">{children}</div>
    </div>
  );
};

export default AppLayout;

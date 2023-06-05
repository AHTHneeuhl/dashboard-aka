import { Confirmed, Issued, TopHeader } from "components/workspaces";

const Workspaces: React.FC = () => {
  return (
    <main>
      <TopHeader />
      <div className="flex flex-col gap-4">
        <Confirmed />
        <Issued />
      </div>
    </main>
  );
};

export default Workspaces;

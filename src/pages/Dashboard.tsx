import { Featured, NewArrivals, Search } from "components/dashboard";

const Dashboard: React.FC = () => {
  return (
    <main className="my-10">
      <Search />
      <Featured />
      <NewArrivals />
    </main>
  );
};

export default Dashboard;

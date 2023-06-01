import { Featured, NewArrivals, Search } from "components/dashboard";

const Dashboard: React.FC = () => {
  return (
    <main>
      <Search />
      <Featured />
      <NewArrivals />
    </main>
  );
};

export default Dashboard;

import { FilterByStatus, OrderList, SortByAmount } from "components/dashboard";

const Dashboard: React.FC = () => {
  return (
    <main className="my-10">
      <div className="flex flex-row items-center gap-5">
        <FilterByStatus />
        <SortByAmount />
      </div>
      <OrderList />
    </main>
  );
};

export default Dashboard;

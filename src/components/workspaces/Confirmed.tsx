import { Heading } from "components/common";
import OrderList from "./ConfirmedList";

const Confirmed: React.FC = () => {
  const total = 39;

  return (
    <div className="bg-white rounded-3xl border border-neutral-200 p-4">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <Heading size="sm">Confirmed</Heading>
          <Heading size="sm" variant="secondary" className="text-neutral-500">
            {total}
          </Heading>
        </div>
      </div>
      <OrderList />
    </div>
  );
};

export default Confirmed;

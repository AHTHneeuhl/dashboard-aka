import { useEffect, useState } from "react";
import { sortOrders } from "redux/slices/dashboard";
import { useAppDispatch } from "redux/store/hooks";
import { TSort } from "types";

const SortByAmount: React.FC = () => {
  const dispatch = useAppDispatch();
  const [order, setOrder] = useState<TSort>("asc");

  // handling Status change
  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrder(e.target.value as TSort);
  };

  useEffect(() => {
    dispatch(sortOrders(order));
  }, [dispatch, order]);

  return (
    <div className="flex flex-row gap-2 items-center mb-2">
      <label htmlFor="amount" className="text-sm text-neutral-700 font-medium">
        Sort By Amount
      </label>
      <select
        name="amount"
        id="amount"
        value={order}
        onChange={handleOrderChange}
        className="p-1 rounded-md text-sm outline-none"
      >
        <option value="asc">High</option>
        <option value="desc">Low</option>
      </select>
    </div>
  );
};

export default SortByAmount;

import { useEffect, useState } from "react";
import { sortOrders } from "redux/slices/dashboard";
import { useAppDispatch } from "redux/store/hooks";
import { TSort } from "types";

const SortByPlacedOn: React.FC = () => {
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
    <div className="w-full col-start-6">
      <select
        name="amount"
        id="amount"
        value={order}
        onChange={handleOrderChange}
        className="p-1 rounded-md text-sm w-full bg-slate-100 outline-none"
      >
        <option
          value="asc"
          className="bg-white p-2 hover:text-neutral-700 text-sm"
        >
          ASC
        </option>
        <option
          value="desc"
          className="bg-white p-2 hover:text-neutral-700 text-sm"
        >
          DESC
        </option>
      </select>
    </div>
  );
};

export default SortByPlacedOn;

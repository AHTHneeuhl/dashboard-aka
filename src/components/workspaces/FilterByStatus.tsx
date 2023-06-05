import { useEffect, useState } from "react";
import { filterOrders, setOrders } from "redux/slices/dashboard";
import { useAppDispatch } from "redux/store/hooks";
import { TOrder, TStatus } from "types";

import orders from "config/orders.json";

const FilterByStatus: React.FC = () => {
  const dispatch = useAppDispatch();
  const [selectedStatus, setSelectedStatus] = useState<TStatus>("Confirmed");

  // handling Status change
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(e.target.value as TStatus);
    dispatch(setOrders(orders as TOrder[]));
  };

  useEffect(() => {
    dispatch(filterOrders(selectedStatus));
  }, [dispatch, selectedStatus]);

  return (
    <div className="flex flex-row gap-2 items-center mb-2">
      <label htmlFor="status" className="text-sm text-neutral-700 font-medium">
        Filter By Status
      </label>
      <select
        name="status"
        id="status"
        value={selectedStatus}
        onChange={handleStatusChange}
        className="p-1 rounded-md outline-none text-sm"
      >
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="Confirmed">Confirmed</option>
        <option value="Refunded">Refunded</option>
        <option value="Delivered">Delivered</option>
      </select>
    </div>
  );
};

export default FilterByStatus;

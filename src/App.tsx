import orders from "config/orders.json";
import AppLayout from "layout/AppLayout";
import { useEffect } from "react";
import { setOrders } from "redux/slices/dashboard";
import { useAppDispatch } from "redux/store/hooks";
import { AppRoutes } from "routes";
import { TOrder } from "types";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setOrders(orders as TOrder[]));
  }, [dispatch]);

  return (
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  );
};

export default App;

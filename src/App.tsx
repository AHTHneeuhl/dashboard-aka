import orders from "config/orders.json";
import AppLayout from "layout/AppLayout";
import { CartPage, DashbaordPage, NotificationPage } from "pages";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { setOrders } from "redux/slices/dashboard";
import { useAppDispatch } from "redux/store/hooks";
import { TOrder } from "types";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setOrders(orders as TOrder[]));
  }, [dispatch]);

  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<DashbaordPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
      </Routes>
    </AppLayout>
  );
};

export default App;

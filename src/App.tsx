import AppLayout from "layout/AppLayout";
import { CartPage, DashbaordPage, NotificationPage } from "pages";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
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

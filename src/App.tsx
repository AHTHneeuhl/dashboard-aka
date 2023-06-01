import AppLayout from "layout/AppLayout";
import { DashbaordPage } from "pages";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<DashbaordPage />} />
      </Routes>
    </AppLayout>
  );
};

export default App;

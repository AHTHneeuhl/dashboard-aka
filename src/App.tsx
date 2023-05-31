import { DashbaordPage } from "pages";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashbaordPage />} />
    </Routes>
  );
};

export default App;

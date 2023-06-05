import { Route, Routes } from "react-router-dom";
import { ReportPage, SettingPage, WorkspacePage } from "pages";
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<WorkspacePage />} />
      <Route path="/reports" element={<ReportPage />} />
      <Route path="/settings" element={<SettingPage />} />
    </Routes>
  );
};

export default AppRoutes;

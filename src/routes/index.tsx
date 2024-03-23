import DashboardLayout from "@/layout/DashboardLayout";
import ActualData from "@/pages/Dashboard/ActualData";
import Overview from "@/pages/Dashboard/Overview";
import PeriodDetail from "@/pages/Dashboard/PeriodDetail";
import NotFoundPage from "@/pages/NotFound/NotFoundPage";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<ActualData />} />
        <Route path="dashboard/actual-data" element={<ActualData />} />
        <Route path="dashboard/overview" element={<Overview />} />
        <Route path="dashboard/period-detail" element={<PeriodDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

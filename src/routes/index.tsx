import DashboardLayout from '@/layout/DashboardLayout';
import ActualData from '@/pages/Dashboard/ActualData';
import Overview from '@/pages/Dashboard/Overview';
import PeriodDetail from '@/pages/Dashboard/PeriodDetail';
import HomePage from '@/pages/HomePage';
import { Routes, Route } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/dashboard' element={<DashboardLayout />}>
        <Route path='actual-data' element={<ActualData />} />
        <Route path='overview' element={<Overview />} />
        <Route path='period-detail' element={<PeriodDetail />} />
      </Route>
    </Routes>
  );
};

import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '@/components/Footer';
import { StyledDashboardLayout } from './Layout.styled';

const DashboardLayout = () => {
  return (
    <StyledDashboardLayout>
      <div className='layout-sidebar'>sidebar</div>
      <div className='layout-content'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </StyledDashboardLayout>
  );
};

export default DashboardLayout;

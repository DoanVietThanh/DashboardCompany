import Header from "@/components/Header";
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { StyledDashboardLayout } from "./DashboardLayout.styled";

const DashboardLayout = () => {
  return (
    <StyledDashboardLayout>
      <Sidebar />
      <div className="layout-content">
        <Header />
        <div className="layout-outlet">
          <Outlet />
          <Footer />
        </div>
      </div>
    </StyledDashboardLayout>
  );
};

export default DashboardLayout;

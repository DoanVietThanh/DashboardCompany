import Header from "@/components/Header";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { StyledDashboardLayout } from "./DashboardLayout.styled";

const DashboardLayout = () => {
  const location = useLocation();
  if (location.pathname == "/") return <Navigate to={"/dashboard/actual-data"} />;

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

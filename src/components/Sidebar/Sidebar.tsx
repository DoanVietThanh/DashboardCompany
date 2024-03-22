import { NavLink } from "react-router-dom";
import { StyledSidebar } from "./Sidebar.styled";
import { Flex } from "antd";
import logo from "@/assets/logo.png";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <div className="sidebar-logo">
        <img src={logo} />
      </div>
      <Flex vertical gap={20} id="sidebar">
        <NavLink to="/dashboard/actual-data">Actual Data</NavLink>
        <NavLink to="/dashboard/overview">Overview</NavLink>
        <NavLink to="/dashboard/period-detail">Period Detail</NavLink>
      </Flex>
    </StyledSidebar>
  );
};

export default Sidebar;

import { NavLink } from "react-router-dom";
import { StyledSidebar } from "./Sidebar.styled";
import { Flex } from "antd";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Flex vertical gap={20} id="sidebar">
        <NavLink to="/dashboard/actual-data">Actual Data</NavLink>
        <NavLink to="/dashboard/overview">Overview</NavLink>
        <NavLink to="/dashboard/period-detail">Period Detail</NavLink>
      </Flex>
    </StyledSidebar>
  );
};

export default Sidebar;

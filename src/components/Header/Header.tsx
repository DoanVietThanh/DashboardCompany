import { UserOutlined } from "@ant-design/icons";
import { Avatar, Flex, Space } from "antd";
import moment from "moment";
import { StyledHeader } from "./Header.styed";
const Header = () => {
  return (
    <StyledHeader>
      <Flex justify="space-between" align="center">
        <Flex vertical gap={10}>
          <h3 className="header-welcome">Welcome to INFOTEL Company </h3>
          <Space className="header-date">{moment().format("DD / MM / YYYY")}</Space>
        </Flex>
        <Flex gap={10} align="center">
          <Avatar icon={<UserOutlined />} style={{ backgroundColor: "#87d068" }} />
          <h3>Admin</h3>
        </Flex>
      </Flex>
    </StyledHeader>
  );
};

export default Header;

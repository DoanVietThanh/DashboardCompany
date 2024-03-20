import { Flex } from 'antd';
import { StyledHeader } from './Header.styed';

const Header = () => {
  return (
    <StyledHeader>
      <Flex justify='space-between' align='center'>
        <h1>Welcome to Dashboard</h1>
        <h3>Admin</h3>
      </Flex>
    </StyledHeader>
  );
};

export default Header;

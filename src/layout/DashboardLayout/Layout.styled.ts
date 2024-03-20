import styled from 'styled-components';

export const StyledDashboardLayout = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow: hidden;
  .layout-sidebar {
    padding: 20px;
    min-width: 16vw;
  }

  .layout-content {
    flex: 1;
    padding: 20px;
  }
`;

import styled from 'styled-components';

export const StyledDashboardLayout = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow: hidden;

  .layout-content {
    flex: 1;
    overflow-y: auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .layout-outlet {
    padding: 20px;
    flex: 1;
    overflow-y: auto;
  }
`;

import styled from "styled-components";

export const StyledSidebar = styled.div`
  color: white !important;
  padding: 20px;
  min-width: 14vw;
  border-right: 1px solid;
  background-color: #006666;

  #sidebar a {
    text-align: center;
    border-radius: 20px;
    padding: 10px;
    /* background-color: #dadada; */
  }

  #sidebar a.active {
    color: white;
    background-color: #338585;
  }

  a {
    color: rgba(255, 255, 255, 0.7);
  }
`;

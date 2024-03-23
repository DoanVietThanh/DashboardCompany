import styled from "styled-components";

export const StyledHeader = styled.div`
  z-index: 10;
  padding: 20px;
  background-color: #fff;
  box-shadow: #000 0 0 4px;

  .header-welcome {
    font-weight: 600;
    font-size: 20px;
  }

  .header-date {
    color: white;
    border-radius: 10px;
    width: fit-content;
    font-weight: 600;
    font-size: 18px;
    padding: 6px 10px;
    background-color: #edaf44;
  }
`;

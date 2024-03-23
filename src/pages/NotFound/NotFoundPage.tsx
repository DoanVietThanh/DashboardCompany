import { Button, Typography } from "antd";
import { StyledNotFoundPage } from "./NotFoundPage.styled";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <StyledNotFoundPage>
      <Typography.Title level={3}>Not Found</Typography.Title>
      <Button type="primary" onClick={() => navigate("/")}>
        Back to Dashboard Page
      </Button>
    </StyledNotFoundPage>
  );
};

export default NotFoundPage;

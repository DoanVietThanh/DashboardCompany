import actualJSONData from "@/data/actualData.json";
import { StyledActualData } from "./ActualData.styled";
import ActualDataTable from "./ActualDataTable";
import { Typography } from "antd";

const ActualData = () => {
  return (
    <StyledActualData>
      <Typography.Title level={4}>Actual Data</Typography.Title>
      <ActualDataTable actualJSONData={actualJSONData} />
    </StyledActualData>
  );
};

export default ActualData;

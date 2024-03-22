import actualJSONData from "@/data/actualData.json";
import { StyledActualData } from "./ActualData.styled";
import ActualDataTable from "./ActualDataTable";

const ActualData = () => {
  const newData = actualJSONData.map((item, index) => ({
    key: index,
    ...item,
  }));

  return (
    <StyledActualData>
      <ActualDataTable actualJSONData={newData} />
    </StyledActualData>
  );
};

export default ActualData;

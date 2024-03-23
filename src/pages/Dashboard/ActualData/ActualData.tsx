import actualJSONData from "@/data/actualData.json";
import { StyledActualData } from "./ActualData.styled";
import ActualDataTable from "./ActualDataTable";
import { useState } from "react";
import { GlanceReport } from "@/types/glanceReport.types";
import ActualDataBarChart from "./ActualDataBarChart";

const ActualData = () => {
  const newData = actualJSONData.map((item, index) => ({
    key: index,
    ...item,
  }));
  const [data, setData] = useState<GlanceReport[]>([...newData]);

  return (
    <StyledActualData>
      <ActualDataTable actualJSONData={newData} data={data} setData={setData} />

      <ActualDataBarChart data={data} />
    </StyledActualData>
  );
};

export default ActualData;

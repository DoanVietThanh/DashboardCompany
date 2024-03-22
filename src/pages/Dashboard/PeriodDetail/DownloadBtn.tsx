import { DownloadOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { CSVLink } from "react-csv";

type DownloadBtnProps = {
  dataSource: unknown;
};

const headers = [
  { label: "Date", key: "date" },
  { label: "RCV", key: "rcv" },
  { label: "Period", key: "period" },
  { label: "Count Adults", key: "aCount" },
  { label: "Count Children", key: "cCount" },
  { label: "Sales Adults", key: "aSales" },
  { label: "Sales Children", key: "cSales" },
  { label: "Count", key: "count" },
  { label: "Count %", key: "countPercentage" },
  { label: "Sales", key: "sales" },
  { label: "Sales %", key: "salesPercentage" },
];

const DownloadBtn = ({ dataSource }: DownloadBtnProps) => {
  console.log("🚀 ~ DownloadBtn ~ dataSource:", dataSource);

  const data = [
    {
      date: "Thanh",
      rcv: "Thanh",
      period: "Thanh",
      aCount: "Thanh",
      cCount: "Thanh",
      aSales: "Thanh",
      cSales: "Thanh",
      count: "Thanh",
      countPercentage: "Thanh",
      sales: "Thanh",
      salesPercentage: "Thanh",
    },
  ];

  return (
    <Flex justify="flex-end" style={{ margin: "20px 0" }}>
      <Button type="primary" icon={<DownloadOutlined />}>
        <CSVLink data={data} headers={headers}>
          Download
        </CSVLink>
      </Button>
    </Flex>
  );
};

export default DownloadBtn;

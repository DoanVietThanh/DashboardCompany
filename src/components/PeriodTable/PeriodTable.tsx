import { Table, TableProps } from 'antd';

interface DataType {
  key: string;
  room: string;
  guestNames: string;
  count: number;
  pax: string;
  time: string;
  pkgCode: string;
  remark: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Room',
    dataIndex: 'room',
    key: 'room',
  },
  {
    title: 'Guest Names',
    dataIndex: 'guestNames',
    key: 'guestNames',
  },
  {
    title: 'Count',
    dataIndex: 'count',
    key: 'count',
  },
  {
    title: 'Pax',
    dataIndex: 'pax',
    key: 'pax',
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Pkg Code',
    dataIndex: 'pkgCode',
    key: 'pkgCode',
  },
  {
    title: 'Remark',
    dataIndex: 'remark',
    key: 'remark',
  },
];

interface Records {
  [key: string]: {
    room: string;
    guest_names: string;
    package_code: string;
    count: number;
    pax: string;
    remark: string;
  };
}

interface PeriodTableProps {
  records: Records;
}

const PeriodTable = ({ records }: PeriodTableProps) => {
  function convertRecordType(records: Records): DataType[] {
    const convertedRecord = Object.keys(records).map((record) => ({
      key: record,
      time: record,
      room: records[record].room,
      guestNames: records[record].guest_names,
      count: records[record].count,
      pax: records[record].pax,
      pkgCode: records[record].package_code,
      remark: records[record].remark,
    }));
    return convertedRecord;
  }

  return <Table columns={columns} dataSource={convertRecordType(records)} />;
};

export default PeriodTable;

import { GlanceReport } from "@/types/glanceReport.types";
import { Button, Divider, Flex, Table, TreeSelect, Typography } from "antd";
import { useState } from "react";
import { StyledActualDataTable } from "./ActualDataTable.styled";
import { filterData, initTotal } from "@/constants/ActualDataTable.constants";
import { TableRowSelection } from "antd/es/table/interface";
import ActualDataSummary from "./ActualDataSummary";

type ActualDataTableProps = {
  actualJSONData: GlanceReport[];
};

const ActualDataTable = ({ actualJSONData }: ActualDataTableProps) => {
  const { SHOW_PARENT } = TreeSelect;
  const { Column, ColumnGroup } = Table;
  const [filterColumnValue, setFilterColumnValue] = useState([] as string[]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const handleSelectHiddenColumns = (newFilterColumnValue: string[]) => {
    setFilterColumnValue(newFilterColumnValue);
  };

  const tProps = {
    treeData: filterData,
    value: filterColumnValue,
    onChange: handleSelectHiddenColumns,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: "Select hidden columns",
    style: {
      width: "100%",
    },
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<GlanceReport> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  return (
    <StyledActualDataTable>
      <Flex vertical gap={20}>
        <Flex>
          <Typography.Title level={5}>Hidden Columns</Typography.Title>
          <TreeSelect {...tProps} />
        </Flex>
        <Flex justify="flex-end">
          <Button type="primary" onClick={() => setFilterColumnValue([])}>
            Clear Hidden Filters
          </Button>
        </Flex>
      </Flex>

      <Divider />

      <Table
        size="small"
        dataSource={actualJSONData}
        rowSelection={rowSelection}
        scroll={{ x: 1500, y: 400 }}
        summary={(data) => <ActualDataSummary data={data} filterColumnValue={filterColumnValue} />}
      >
        <Column title="Property" dataIndex="propertyCode" key="propertyCode" fixed={"left"} width={100} hidden={filterColumnValue.includes("propertyCode")} />
        <Column title="Property Name" dataIndex="propertyName" key="propertyName" width={300} hidden={filterColumnValue.includes("propertyName")} />
        <Column
          title="Total Room in Hotel"
          dataIndex="totalRoomInHotel"
          key="totalRoomInHotel"
          width={110}
          hidden={filterColumnValue.includes("totalRoomInHotel")}
          sorter={(a: GlanceReport, b: GlanceReport) => a.totalRoomInHotel - b.totalRoomInHotel}
        />
        <Column
          title="Room Revenue"
          dataIndex="roomRevenue"
          key="roomRevenue"
          width={100}
          hidden={filterColumnValue.includes("roomRevenue")}
          sorter={(a: GlanceReport, b: GlanceReport) => a.roomRevenue - b.roomRevenue}
        />
        <Column
          title="F&B Revenue"
          dataIndex="f_bRevenue"
          key="f_bRevenue"
          hidden={filterColumnValue.includes("f_bRevenue")}
          width={100}
          sorter={(a: GlanceReport, b: GlanceReport) => a.f_bRevenue - b.f_bRevenue}
        />
        <Column
          title="Other Revenue"
          dataIndex="otherRevenue"
          key="otherRevenue"
          hidden={filterColumnValue.includes("otherRevenue")}
          width={100}
          sorter={(a: GlanceReport, b: GlanceReport) => a.otherRevenue - b.otherRevenue}
        />
        <Column
          title="Total Revenue"
          dataIndex="totalRevenue"
          key="totalRevenue"
          hidden={filterColumnValue.includes("totalRevenue")}
          width={100}
          sorter={(a: GlanceReport, b: GlanceReport) => a.totalRevenue - b.totalRevenue}
        />
        <Column
          title="Occ %"
          dataIndex="occPercentage"
          key="occPercentage"
          hidden={filterColumnValue.includes("occPercentage")}
          width={100}
          render={(value) => `${value} %`}
          sorter={(a: GlanceReport, b: GlanceReport) => a.occPercentage - b.occPercentage}
        />
        <Column title="ADR" dataIndex="adr" key="adr" hidden={filterColumnValue.includes("adr")} width={100} sorter={(a: GlanceReport, b: GlanceReport) => a.adr - b.adr} />
        <Column
          title="Hotel Room"
          dataIndex="hotelRoom"
          key="hotelRoom"
          hidden={filterColumnValue.includes("hotelRoom")}
          width={100}
          render={(value) => `${value} %`}
          sorter={(a: GlanceReport, b: GlanceReport) => a.hotelRoom - b.hotelRoom}
        />
        <Column
          title="Available Rooms"
          dataIndex="availableRooms"
          key="availableRooms"
          hidden={filterColumnValue.includes("availableRooms")}
          width={100}
          sorter={(a: GlanceReport, b: GlanceReport) => a.availableRooms - b.availableRooms}
        />

        <ColumnGroup title="Rev" hidden={filterColumnValue.includes("rev")}>
          <Column
            title="Occupied Rooms"
            dataIndex={["rev", "occupiedRooms"]}
            key="rev.occupiedRooms"
            width={100}
            hidden={filterColumnValue.includes("rev.occupiedRooms")}
            sorter={(a: GlanceReport, b: GlanceReport) => a.rev.occupiedRooms - b.rev.occupiedRooms}
          />
          <Column
            title="Group Rooms"
            dataIndex={["rev", "groupRooms"]}
            key="rev.groupRooms"
            width={100}
            hidden={filterColumnValue.includes("rev.groupRooms")}
            sorter={(a: GlanceReport, b: GlanceReport) => a.rev.groupRooms - b.rev.groupRooms}
          />
          <Column
            title="Transient Rooms"
            dataIndex={["rev", "transientRooms"]}
            key="rev.transientRooms"
            width={100}
            hidden={filterColumnValue.includes("rev.transientRooms")}
            sorter={(a: GlanceReport, b: GlanceReport) => a.rev.transientRooms - b.rev.transientRooms}
          />
        </ColumnGroup>

        <ColumnGroup title="Rn" hidden={filterColumnValue.includes("rn")}>
          <Column
            title="Occupied Rooms"
            dataIndex={["rn", "occupiedRooms"]}
            key="rn.occupiedRooms"
            width={100}
            hidden={filterColumnValue.includes("rn.occupiedRooms")}
            sorter={(a: GlanceReport, b: GlanceReport) => a.rn.occupiedRooms - b.rn.occupiedRooms}
          />
          <Column
            title="Group Rooms"
            dataIndex={["rn", "groupRooms"]}
            key="rn.groupRooms"
            width={100}
            hidden={filterColumnValue.includes("rn.groupRooms")}
            sorter={(a: GlanceReport, b: GlanceReport) => a.rn.groupRooms - b.rn.groupRooms}
          />
          <Column
            title="Transient Rooms"
            dataIndex={["rn", "transientRooms"]}
            key="rn.transientRooms"
            width={100}
            hidden={filterColumnValue.includes("rn.transientRooms")}
            sorter={(a: GlanceReport, b: GlanceReport) => a.rn.transientRooms - b.rn.transientRooms}
          />
        </ColumnGroup>

        <ColumnGroup title="Occ %" hidden={filterColumnValue.includes("occ")}>
          <Column
            title="Occupied Rooms"
            dataIndex={["occ", "occupiedRooms"]}
            key="occ.occupiedRooms"
            width={100}
            hidden={filterColumnValue.includes("occ.occupiedRooms")}
            sorter={(a: GlanceReport, b: GlanceReport) => a.occ.occupiedRooms - b.occ.occupiedRooms}
          />
          <Column
            title="Group Rooms"
            dataIndex={["occ", "groupRooms"]}
            key="occ.groupRooms"
            width={100}
            hidden={filterColumnValue.includes("occ.groupRooms")}
            sorter={(a: GlanceReport, b: GlanceReport) => a.occ.groupRooms - b.occ.groupRooms}
          />
          <Column
            title="Transient Rooms"
            dataIndex={["occ", "transientRooms"]}
            key="occ.transientRooms"
            width={100}
            hidden={filterColumnValue.includes("occ.transientRooms")}
            sorter={(a: GlanceReport, b: GlanceReport) => a.occ.transientRooms - b.occ.transientRooms}
          />
        </ColumnGroup>

        <ColumnGroup title="ADR %" hidden={filterColumnValue.includes("adrProfit")}>
          <Column
            title="Occupied Rooms"
            dataIndex={["adrProfit", "occupiedRooms"]}
            key="adrProfit.occupiedRooms"
            width={100}
            hidden={filterColumnValue.includes("adrProfit.occupiedRooms")}
            sorter={(a: GlanceReport, b: GlanceReport) => a.adrProfit.occupiedRooms - b.adrProfit.occupiedRooms}
          />
          <Column
            title="Group Rooms"
            dataIndex={["adrProfit", "groupRooms"]}
            key="adrProfit.groupRooms"
            width={100}
            hidden={filterColumnValue.includes("adrProfit.groupRooms")}
            sorter={(a: GlanceReport, b: GlanceReport) => a.adrProfit.groupRooms - b.adrProfit.groupRooms}
          />
          <Column
            title="Transient Rooms"
            dataIndex={["adrProfit", "transientRooms"]}
            key="adrProfit.transientRooms"
            width={100}
            hidden={filterColumnValue.includes("adrProfit.transientRooms")}
            sorter={(a: GlanceReport, b: GlanceReport) => a.adrProfit.transientRooms - b.adrProfit.transientRooms}
          />
        </ColumnGroup>
      </Table>
    </StyledActualDataTable>
  );
};

export default ActualDataTable;

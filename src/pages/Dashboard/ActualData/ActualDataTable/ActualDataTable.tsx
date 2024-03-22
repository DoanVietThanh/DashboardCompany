import { GlanceReport } from "@/types/glanceReport.types";
import { Button, Divider, Flex, Table, TreeSelect, Typography } from "antd";
import { useState } from "react";
import { StyledActualDataTable } from "./ActualDataTable.styled";

type ActualDataTableProps = {
  actualJSONData: GlanceReport[];
};
const ActualDataTable = ({ actualJSONData }: ActualDataTableProps) => {
  const { Column, ColumnGroup } = Table;
  const { SHOW_PARENT } = TreeSelect;
  const [filterColumnValue, setFilterColumnValue] = useState([] as string[]);

  const onChange = (newFilterColumnValue: string[]) => {
    console.log("onChange ", newFilterColumnValue);
    setFilterColumnValue(newFilterColumnValue);
  };

  const filterData = [
    {
      title: "Property",
      value: "propertyCode",
      key: "propertyCode",
    },
    {
      title: "Property Name",
      value: "propertyName",
      key: "propertyName",
    },
    {
      title: "Total Room in Hotel",
      value: "totalRoomInHotel",
      key: "totalRoomInHotel",
    },
    {
      title: "Room Revenue",
      value: "roomRevenue",
      key: "roomRevenue",
    },
    {
      title: "F&B Revenue",
      value: "f_bRevenue",
      key: "f_bRevenue",
    },
    {
      title: "Other Revenue",
      value: "otherRevenue",
      key: "otherRevenue",
    },
    {
      title: "Total Revenue",
      value: "totalRevenue",
      key: "totalRevenue",
    },
    {
      title: "Occ %",
      value: "occPercentage",
      key: "occPercentage",
    },
    {
      title: "Ddr",
      value: "adr",
      key: "adr",
    },
    {
      title: "Hotel Room",
      value: "hotelRoom",
      key: "hotelRoom",
    },
    {
      title: "Available Rooms",
      value: "availableRooms",
      key: "availableRooms",
    },
    {
      title: "Rev",
      value: "rev",
      key: "rev",
      children: [
        {
          title: "Occupied Rooms",
          value: "rev.occupiedRooms",
          key: "rev.occupiedRooms",
        },
        {
          title: "Group Rooms",
          value: "rev.groupRooms",
          key: "rev.groupRooms",
        },
        {
          title: "Transient Rooms",
          value: "rev.transientRooms",
          key: "rev.transientRooms",
        },
      ],
    },
    {
      title: "Rn",
      value: "rn",
      key: "rn",
      children: [
        {
          title: "Occupied Rooms",
          value: "rn.occupiedRooms",
          key: "rn.occupiedRooms",
        },
        {
          title: "Group Rooms",
          value: "rn.groupRooms",
          key: "rn.groupRooms",
        },
        {
          title: "Transient Rooms",
          value: "rn.transientRooms",
          key: "rn.transientRooms",
        },
      ],
    },
    {
      title: "Occ",
      value: "occ",
      key: "occ",
      children: [
        {
          title: "Occupied Rooms",
          value: "occ.occupiedRooms",
          key: "occ.occupiedRooms",
        },
        {
          title: "Group Rooms",
          value: "occ.groupRooms",
          key: "occ.groupRooms",
        },
        {
          title: "Transient Rooms",
          value: "occ.transientRooms",
          key: "occ.transientRooms",
        },
      ],
    },
    {
      title: "Adr Profit",
      value: "adrProfit",
      key: "adrProfit",
      children: [
        {
          title: "Occupied Rooms",
          value: "adrProfit.occupiedRooms",
          key: "adrProfit.occupiedRooms",
        },
        {
          title: "Group Rooms",
          value: "adrProfit.groupRooms",
          key: "adrProfit.groupRooms",
        },
        {
          title: "Transient Rooms",
          value: "adrProfit.transientRooms",
          key: "adrProfit.transientRooms",
        },
      ],
    },
  ];

  const tProps = {
    treeData: filterData,
    value: filterColumnValue,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: "Please select",
    style: {
      width: "100%",
    },
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
      <Table dataSource={actualJSONData} scroll={{ x: 1500, y: 450 }}>
        <Column
          title="Property"
          dataIndex="propertyCode"
          key="firstName"
          fixed={"left"}
          width={100}
          hidden={filterColumnValue.includes("propertyCode")}
        />
        <Column
          title="Property Name"
          dataIndex="propertyName"
          key="propertyName"
          width={300}
          hidden={filterColumnValue.includes("propertyName")}
        />
        <Column
          title="Total Room in Hotel"
          dataIndex="totalRoomInHotel"
          key="totalRoomInHotel"
          width={100}
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
          sorter={(a: GlanceReport, b: GlanceReport) => a.occPercentage - b.occPercentage}
        />
        <Column
          title="ADR"
          dataIndex="adr"
          key="adr"
          hidden={filterColumnValue.includes("adr")}
          width={100}
          sorter={(a: GlanceReport, b: GlanceReport) => a.adr - b.adr}
        />
        <Column
          title="Hotel Room"
          dataIndex="hotelRoom"
          key="hotelRoom"
          hidden={filterColumnValue.includes("hotelRoom")}
          width={100}
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

        <ColumnGroup title="Occ" hidden={filterColumnValue.includes("occ")}>
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

        <ColumnGroup title="ADR Profit" hidden={filterColumnValue.includes("adrProfit")}>
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

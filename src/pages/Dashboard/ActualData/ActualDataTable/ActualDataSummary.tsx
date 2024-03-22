import { initTotal } from "@/constants/ActualDataTable.constants";
import { GlanceReport } from "@/types/glanceReport.types";
import { Table } from "antd";
import { useEffect, useState } from "react";

type ActualDataSummaryProps = {
  data: readonly GlanceReport[];
  filterColumnValue: string[];
};

const ActualDataSummary = ({ data, filterColumnValue }: ActualDataSummaryProps) => {
  console.log("🚀 ~ ActualDataSummary ~ data:", data);
  //   const total: GlanceReport = initTotal;
  const [total, setTotal] = useState<GlanceReport>(initTotal);

  useEffect(() => {
    console.log("🚀 ~ ActualDataSummary ~ total:", total.totalRoomInHotel);
    setTotal((prev) => ({ ...prev, ...initTotal }));
    data.forEach((item) => {
      total["totalRoomInHotel"] = total.totalRoomInHotel + item.totalRoomInHotel;
      total["roomRevenue"] = total.roomRevenue + item.roomRevenue;
      total["f_bRevenue"] = total.f_bRevenue + item.f_bRevenue;
      total["otherRevenue"] = total.otherRevenue + item.otherRevenue;
      total["totalRevenue"] = total.totalRevenue + item.totalRevenue;
      total["occPercentage"] = total.occPercentage + item.occPercentage;
      total["adr"] = total.adr + item.adr;
      total["hotelRoom"] = total.hotelRoom + item.hotelRoom;
      total["availableRooms"] = total.availableRooms + item.availableRooms;

      total.rev.occupiedRooms = total.rev.occupiedRooms + item.rev.occupiedRooms;
      total.rev.groupRooms = total.rev.groupRooms + item.rev.groupRooms;
      total.rev.transientRooms = total.rev.transientRooms + item.rev.transientRooms;

      total.rn.occupiedRooms = total.rn.occupiedRooms + item.rn.occupiedRooms;
      total.rn.groupRooms = total.rn.groupRooms + item.rn.groupRooms;
      total.rn.transientRooms = total.rn.transientRooms + item.rn.transientRooms;

      total.occ.occupiedRooms = total.occ.occupiedRooms + item.occ.occupiedRooms;
      total.occ.groupRooms = total.occ.groupRooms + item.occ.groupRooms;
      total.occ.transientRooms = total.occ.transientRooms + item.occ.transientRooms;

      total.adrProfit.occupiedRooms = total.adrProfit.occupiedRooms + item.adrProfit.occupiedRooms;
      total.adrProfit.groupRooms = total.adrProfit.groupRooms + item.adrProfit.groupRooms;
      total.adrProfit.transientRooms = total.adrProfit.transientRooms + item.adrProfit.transientRooms;
    });
  }, [data]);

  return (
    <Table.Summary>
      <Table.Summary.Row>
        <Table.Summary.Cell index={0} colSpan={2}>
          Gland Total
        </Table.Summary.Cell>
        {!filterColumnValue.includes("propertyName") && <Table.Summary.Cell index={3}></Table.Summary.Cell>}
        {!filterColumnValue.includes("totalRoomInHotel") && <Table.Summary.Cell index={3}>{total.totalRoomInHotel}</Table.Summary.Cell>}
        {!filterColumnValue.includes("roomRevenue") && <Table.Summary.Cell index={3}>{total.roomRevenue}</Table.Summary.Cell>}
        {!filterColumnValue.includes("f_bRevenue") && <Table.Summary.Cell index={3}>{total.f_bRevenue}</Table.Summary.Cell>}
        {!filterColumnValue.includes("otherRevenue") && <Table.Summary.Cell index={3}>{total.otherRevenue}</Table.Summary.Cell>}
        {!filterColumnValue.includes("totalRevenue") && <Table.Summary.Cell index={3}>{total.totalRevenue}</Table.Summary.Cell>}
        {!filterColumnValue.includes("occPercentage") && <Table.Summary.Cell index={3}>{total.occPercentage.toFixed(2)}</Table.Summary.Cell>}
        {!filterColumnValue.includes("adr") && <Table.Summary.Cell index={3}>{total.adr.toFixed(2)}</Table.Summary.Cell>}
        {!filterColumnValue.includes("hotelRoom") && <Table.Summary.Cell index={3}>{total.hotelRoom.toFixed(2)}</Table.Summary.Cell>}
        {!filterColumnValue.includes("availableRooms") && <Table.Summary.Cell index={3}>{total.availableRooms}</Table.Summary.Cell>}

        {!filterColumnValue.includes("rev.occupiedRooms") && <Table.Summary.Cell index={3}>{total.rev.occupiedRooms.toFixed(2)}</Table.Summary.Cell>}
        {!filterColumnValue.includes("rev.groupRooms") && <Table.Summary.Cell index={3}>{total.rev.groupRooms.toFixed(2)}</Table.Summary.Cell>}
        {!filterColumnValue.includes("rev.transientRooms") && <Table.Summary.Cell index={3}>{total.rev.transientRooms.toFixed(2)}</Table.Summary.Cell>}

        {!filterColumnValue.includes("rn.occupiedRooms") && <Table.Summary.Cell index={3}>{total.rn.occupiedRooms.toFixed(2)}</Table.Summary.Cell>}
        {!filterColumnValue.includes("rn.groupRooms") && <Table.Summary.Cell index={3}>{total.rn.groupRooms.toFixed(2)}</Table.Summary.Cell>}
        {!filterColumnValue.includes("rn.transientRooms") && <Table.Summary.Cell index={3}>{total.rn.transientRooms.toFixed(2)}</Table.Summary.Cell>}

        {!filterColumnValue.includes("occ.occupiedRooms") && <Table.Summary.Cell index={3}>{total.occ.occupiedRooms.toFixed(2)}</Table.Summary.Cell>}
        {!filterColumnValue.includes("occ.groupRooms") && <Table.Summary.Cell index={3}>{total.occ.groupRooms.toFixed(2)}</Table.Summary.Cell>}
        {!filterColumnValue.includes("occ.transientRooms") && <Table.Summary.Cell index={3}>{total.occ.transientRooms.toFixed(2)}</Table.Summary.Cell>}

        {!filterColumnValue.includes("adrProfit.occupiedRooms") && <Table.Summary.Cell index={3}>{total.adrProfit.occupiedRooms.toFixed(2)}</Table.Summary.Cell>}
        {!filterColumnValue.includes("adrProfit.groupRooms") && <Table.Summary.Cell index={3}>{total.adrProfit.groupRooms.toFixed(2)}</Table.Summary.Cell>}
        {!filterColumnValue.includes("adrProfit.transientRooms") && <Table.Summary.Cell index={3}>{total.adrProfit.transientRooms.toFixed(2)}</Table.Summary.Cell>}
      </Table.Summary.Row>
    </Table.Summary>
  );
};

export default ActualDataSummary;

import { initTotal } from "@/constants/ActualDataTable.constants";
import { GlanceReport } from "@/types/glanceReport.types";
import { Table } from "antd";
import { useEffect, useState } from "react";

type ActualDataSummaryProps = {
  data: readonly GlanceReport[];
  filterColumnValue: string[];
};

const ActualDataSummary = ({ data, filterColumnValue }: ActualDataSummaryProps) => {
  const [total, setTotal] = useState<GlanceReport>(initTotal);

  useEffect(() => {
    let newTotal = { ...initTotal };

    data.forEach((item) => {
      newTotal["totalRoomInHotel"] = newTotal.totalRoomInHotel + item.totalRoomInHotel;
      newTotal["roomRevenue"] = newTotal.roomRevenue + item.roomRevenue;
      newTotal["f_bRevenue"] = newTotal.f_bRevenue + item.f_bRevenue;
      newTotal["otherRevenue"] = newTotal.otherRevenue + item.otherRevenue;
      newTotal["totalRevenue"] = newTotal.totalRevenue + item.totalRevenue;
      newTotal["occPercentage"] = newTotal.occPercentage + item.occPercentage;
      newTotal["adr"] = newTotal.adr + item.adr;
      newTotal["hotelRoom"] = newTotal.hotelRoom + item.hotelRoom;
      newTotal["availableRooms"] = newTotal.availableRooms + item.availableRooms;

      newTotal.rev.occupiedRooms = newTotal.rev.occupiedRooms + item.rev.occupiedRooms;
      newTotal.rev.groupRooms = newTotal.rev.groupRooms + item.rev.groupRooms;
      newTotal.rev.transientRooms = newTotal.rev.transientRooms + item.rev.transientRooms;

      newTotal.rn.occupiedRooms = newTotal.rn.occupiedRooms + item.rn.occupiedRooms;
      newTotal.rn.groupRooms = newTotal.rn.groupRooms + item.rn.groupRooms;
      newTotal.rn.transientRooms = newTotal.rn.transientRooms + item.rn.transientRooms;

      newTotal.occ.occupiedRooms = newTotal.occ.occupiedRooms + item.occ.occupiedRooms;
      newTotal.occ.groupRooms = newTotal.occ.groupRooms + item.occ.groupRooms;
      newTotal.occ.transientRooms = newTotal.occ.transientRooms + item.occ.transientRooms;

      newTotal.adrProfit.occupiedRooms = newTotal.adrProfit.occupiedRooms + item.adrProfit.occupiedRooms;
      newTotal.adrProfit.groupRooms = newTotal.adrProfit.groupRooms + item.adrProfit.groupRooms;
      newTotal.adrProfit.transientRooms = newTotal.adrProfit.transientRooms + item.adrProfit.transientRooms;
    });
    setTotal(newTotal);
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

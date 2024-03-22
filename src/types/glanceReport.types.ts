interface RoomGlanceReport {
  occupiedRooms: number;
  groupRooms: number;
  transientRooms: number;
}

export interface GlanceReport {
  key?: string;
  propertyCode: string;
  propertyName: string;
  totalRoomInHotel: number;
  roomRevenue: number;
  f_bRevenue: number;
  otherRevenue: number;
  totalRevenue: number;
  occPercentage: number;
  adr: number;
  hotelRoom: number;
  availableRooms: number;
  rev: RoomGlanceReport;
  rn: RoomGlanceReport;
  occ: RoomGlanceReport;
  adrProfit: RoomGlanceReport;
}

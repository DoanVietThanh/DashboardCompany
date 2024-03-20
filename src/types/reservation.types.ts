export enum ObjectName {
  'TOTAL_OCC' = 'Total Occ',
  'ARR_ROOMS' = 'Arr.Rooms',
  'DEP_ROOMS' = 'Dep.Rooms',
}

export interface ResponseItem {
  [key: string]: number;
}

export interface ReservationForecast {
  date: string;
  month: string;
  totalOCC: number;
  arrRooms: number;
  depRooms: number;
  roomRevenue: number;
  averageRate: number;
  dayUseRooms: number;
  noShowRooms: number;
  adlAndChl: number;
}

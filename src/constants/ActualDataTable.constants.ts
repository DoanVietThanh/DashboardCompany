export const initTotal = {
  propertyCode: "total",
  propertyName: "Total",
  totalRoomInHotel: 0,
  roomRevenue: 0,
  f_bRevenue: 0,
  otherRevenue: 0,
  totalRevenue: 0,
  occPercentage: 0,
  adr: 0,
  hotelRoom: 0,
  availableRooms: 0,
  rev: {
    occupiedRooms: 0,
    groupRooms: 0,
    transientRooms: 0,
  },
  rn: {
    occupiedRooms: 0,
    groupRooms: 0,
    transientRooms: 0,
  },
  occ: {
    occupiedRooms: 0,
    groupRooms: 0,
    transientRooms: 0,
  },
  adrProfit: {
    occupiedRooms: 0,
    groupRooms: 0,
    transientRooms: 0,
  },
};

export const filterData = [
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

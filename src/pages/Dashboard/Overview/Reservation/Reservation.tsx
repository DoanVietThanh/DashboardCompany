import resevationJSON from '@/data/reservation.json';
import {
  ObjectName,
  ReservationForecast,
  ResponseItem,
} from '@/types/reservation.types';
import ApexCharts from 'apexcharts';
import moment from 'moment';
import { useEffect, useRef, useState } from 'react';
import { Select, Typography } from 'antd';
import { StyledReservation } from './Reservation.styled';

const Reservation = () => {
  const chartRef = useRef(null);
  let totalOCCData: ResponseItem = {};
  let arrRoomsData: ResponseItem = {};
  let depRoomsData: ResponseItem = {};
  const [totalMonth, setTotalMonth] = useState<number>(6);

  const reservationForecast: ReservationForecast[] = resevationJSON.map(
    (item) => ({
      ...item,
      date: moment(item.date).format('DD/MM/YYYY'),
      month: moment(item.date).format('MM'),
    })
  );

  reservationForecast.forEach((item) => {
    totalOCCData[item.month] =
      (totalOCCData[item.month] | 0) + (item.totalOCC || 0);

    arrRoomsData[item.month] =
      (arrRoomsData[item.month] | 0) + (item.arrRooms || 0);

    depRoomsData[item.month] =
      (depRoomsData[item.month] | 0) + (item.depRooms || 0);
  });

  useEffect(() => {
    const options = {
      chart: {
        height: 350,
        type: 'line',
        stacked: false,
      },
      dataLabels: {
        enabled: true,
      },
      colors: ['#FF1654', '#56a4c5', '#72d71f'],
      series: [
        {
          name: ObjectName.TOTAL_OCC,
          data: Object.values(totalOCCData).slice(0, totalMonth + 1),
        },
        {
          name: ObjectName.ARR_ROOMS,
          data: Object.values(arrRoomsData).slice(0, totalMonth + 1),
        },
        {
          name: ObjectName.DEP_ROOMS,
          data: Object.values(depRoomsData).slice(0, totalMonth + 1),
        },
      ],
      stroke: {
        width: [2, 2, 2],
      },
      xaxis: {
        categories: [2, 3, 4, 5, 6, 7].slice(0, totalMonth + 1),
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#000',
          },
          labels: {
            style: {
              colors: '#1f2412',
            },
          },
          title: {
            text: 'Figure',
            style: {
              color: '#265336',
            },
          },
        },
      ],
      tooltip: {
        shared: false,
        intersect: true,
        x: {
          show: false,
        },
      },
      legend: {
        horizontalAlign: 'left',
        offsetX: 40,
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();
    return () => {
      chart.destroy();
    };
  }, [totalMonth]);

  const handleChange = (value: number) => setTotalMonth(value);
  return (
    <StyledReservation>
      <Typography.Title level={4}>Reservation Statistic</Typography.Title>
      <div className='reservation-select-container'>
        <Select
          style={{ width: 120 }}
          onChange={handleChange}
          defaultValue={totalMonth}
          options={[
            { value: 1, label: '1 tháng' },
            { value: 3, label: '3 tháng' },
            { value: 6, label: '6 tháng' },
          ]}
        />
      </div>
      <div id='chart' ref={chartRef} />
    </StyledReservation>
  );
};

export default Reservation;

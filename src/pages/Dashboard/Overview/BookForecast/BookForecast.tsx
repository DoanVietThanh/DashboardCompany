import { Typography } from 'antd';
import { StyledBookForecast } from './BookForecast.styled';
import bookForecast from '@/data/bookForecast.json';
import { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const BookForecast = () => {
  const chartRef = useRef(null);

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
          name: 'OCC',
          data: [1],
        },
      ],
      stroke: {
        width: [2, 2, 2],
      },
      xaxis: {
        categories: [2, 3, 4, 5, 6, 7],
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
  }, []);
  return (
    <StyledBookForecast>
      <Typography.Title level={4}>Forecast On The Book</Typography.Title>
      <div id='chart' ref={chartRef} />
    </StyledBookForecast>
  );
};

export default BookForecast;

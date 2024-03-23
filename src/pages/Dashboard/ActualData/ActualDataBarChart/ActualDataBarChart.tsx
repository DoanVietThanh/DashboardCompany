import { GlanceReport } from "@/types/glanceReport.types";
import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

type ActualDataBarChartProps = {
  data: GlanceReport[];
};

const ActualDataBarChart = ({ data }: ActualDataBarChartProps) => {
  console.log("🚀 ~ ActualDataBarChart ~ data:", data[0]);
  const chartRef = useRef(null);

  const getObjectNumericValues = (obj: GlanceReport) => {
    const numericValues = [];
    // Push top-level numeric values
    numericValues.push(obj.totalRoomInHotel, obj.roomRevenue, obj.f_bRevenue, obj.otherRevenue, obj.totalRevenue, obj.occPercentage, obj.adr, obj.hotelRoom, obj.availableRooms);
    // Push values from nested objects

    // const nestedValues = [
    //   obj.rev.occupiedRooms,
    //   obj.rev.groupRooms,
    //   obj.rev.transientRooms,
    //   obj.rn.occupiedRooms,
    //   obj.rn.groupRooms,
    //   obj.rn.transientRooms,
    //   obj.occ.occupiedRooms,
    //   obj.occ.groupRooms,
    //   obj.occ.transientRooms,
    //   obj.adrProfit.occupiedRooms,
    //   obj.adrProfit.groupRooms,
    //   obj.adrProfit.transientRooms,
    // ];
    // numericValues.push(...nestedValues);
    return numericValues;
  };

  useEffect(() => {
    let series: { name: string; data: number[] }[] = [];
    data.forEach((item) => {
      series.push({
        name: item.propertyCode,
        data: getObjectNumericValues(item),
      });
    });

    var options = {
      chart: {
        type: "bar",
        height: 350,
        with: 10000,
      },
      series: series,
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Total rooms", "Room Revenue", "f_b Revenue", "Other Revenue", "Total Revenue", "Occ Percentage", "ADR", "Hotel Room", "Available Rooms"],
      },
      tooltip: {
        shared: false,
        intersect: true,
        x: {
          show: false,
        },
      },
      legend: {
        horizontalAlign: "center",
        offsetX: 40,
      },
    };
    const chart = new ApexCharts(chartRef.current, options);
    chart.render();
    return () => {
      chart.destroy();
    };
  }, [data]);

  return (
    <div>
      <div id="chart" ref={chartRef} />
    </div>
  );
};

export default ActualDataBarChart;

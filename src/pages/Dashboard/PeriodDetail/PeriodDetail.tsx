import { dashboardSampleV0_4MealDetailData as mealDetailData } from '@/data/sampledata_meal_detail';
import { Table, Typography } from 'antd';
import { StyledPeriodDetail } from './PeriodDetail.styled';
import PeriodTable from '@/components/PeriodTable';

const PeriodDetail = () => {
  const columns = [
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'RCV', dataIndex: 'rcv', key: 'rcv' },
    { title: 'Period', dataIndex: 'period', key: 'period' },
    { title: 'A.Count', dataIndex: 'aCount', key: 'aCount' },
    { title: 'C.Count', dataIndex: 'cCount', key: 'cCount' },
    { title: 'A.Sales', dataIndex: 'aSales', key: 'aSales' },
    { title: 'C.Sales', dataIndex: 'cSales', key: 'cSales' },
    { title: 'Count', dataIndex: 'count', key: 'count' },
    { title: 'Count %', dataIndex: 'countPercentage', key: 'countPercentage' },
    { title: 'Sales', dataIndex: 'sales', key: 'sales' },
    { title: 'Sales%', dataIndex: 'salesPercentage', key: 'salesPercentage' },
  ];

  const dataSource = mealDetailData?.map((item) => ({
    key: new Date().toISOString(),
    date: item.report_date,
    aCount: item.total.adults_actual.count,
    cCount: item.total.children_actual.count,
    aSales: item.total.adults_actual.sales,
    cSales: item.total.children_actual.sales,
    count: item.total.total_actual.count,
    countPercentage: item.total.total_actual.percentage_count,
    sales: item.total.total_actual.sales,
    salesPercentage: item.total.total_actual.percentage_sales,
    children: childrenRcvDataSource(item.outlet),
  }));

  function childrenRcvDataSource(outlet: any) {
    const outletResponse = outlet.map((outletItem: any) => ({
      key: Math.floor(Math.random() * 100).toString(),
      rcv: outletItem.outlet_code,
      aCount: outletItem.total.adults_actual.count,
      cCount: outletItem.total.children_actual.count,
      aSales: outletItem.total.adults_actual.sales,
      cSales: outletItem.total.children_actual.sales,
      count: outletItem.total.total_actual.count,
      countPercentage: outletItem.total.total_actual.percentage_count,
      sales: outletItem.total.total_actual.sales,
      salesPercentage: outletItem.total.total_actual.percentage_sales,
      children: [
        childrenPeriodDataSource(outletItem.breakfast, 'breakfast'),
        childrenPeriodDataSource(outletItem.lunch, 'lunch'),
        childrenPeriodDataSource(outletItem.dinner, 'dinner'),
      ],
    }));
    return outletResponse;
  }

  function childrenPeriodDataSource(period: any, titlePeriod: string) {
    return {
      key: Math.floor(Math.random() * 100).toString(),
      period: titlePeriod,
      aCount: period.total.adults_actual.count,
      cCount: period.total.children_actual.count,
      aSales: period.total.adults_actual.sales,
      cSales: period.total.children_actual.sales,
      count: period.total.total_actual.count,
      countPercentage: period.total.total_actual.percentage_count,
      sales: period.total.total_actual.sales,
      salesPercentage: period.total.total_actual.percentage_sales,
      children: [
        {
          key: Math.floor(Math.random() * 100).toString(),
          period: <PeriodTable records={period.records} />,
          props: {
            colSpan: 10,
          },
        },
      ],
    };
  }

  return (
    <StyledPeriodDetail>
      <Typography.Title level={3}>Period Detail</Typography.Title>
      <Table size='small' columns={columns} dataSource={dataSource} />
    </StyledPeriodDetail>
  );
};

export default PeriodDetail;

import React from 'react';
import ReactECharts from 'echarts-for-react';

export default function ChartCard() {

  // Chart 1: Sales Trend Line Chart
  const salesOption = {
    xAxis: { 
      type: 'category', 
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], 
    },
    yAxis: { type: 'value' },
    series: [{
      name: 'Sales',
      type: 'line',
      data: [1000, 1200, 1800, 2200, 2500, 3000],
      itemStyle: { color: '#4287f5' },
    }],
    tooltip: { trigger: 'axis' },
  };

  // Chart 2: Lead Distribution Pie Chart
  const leadOption = {
    tooltip: { trigger: 'item' },
    series: [{
      name: 'Lead Distribution',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 50, name: 'Qualified' },
        { value: 30, name: 'In Progress' },
        { value: 20, name: 'Lost' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    }],
  };

  // Chart 3: Customer Satisfaction Bar Chart
  const satisfactionOption = {
    xAxis: {
      type: 'category',
      data: ['Support', 'Product', 'Pricing', 'Delivery', 'Overall'],
    },
    yAxis: { type: 'value' },
    series: [{
      name: 'Satisfaction',
      type: 'bar',
      data: [85, 90, 80, 88, 92],
      itemStyle: { color: 'rgba(54, 162, 235, 0.8)' },
    }],
    tooltip: { trigger: 'axis' },
  };

  // Chart 4: Revenue Streams Doughnut Chart
  const revenueOption = {
    tooltip: { trigger: 'item' },
    series: [{
      name: 'Revenue Streams',
      type: 'pie',
      radius: ['40%', '70%'],  // Doughnut shape
      data: [
        { value: 50000, name: 'Product Sales' },
        { value: 20000, name: 'Consulting' },
        { value: 15000, name: 'Subscriptions' },
        { value: 10000, name: 'Other' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    }],
  };

  return (
    <>
      {/* Sales Trend Line Chart */}
      <div className="w-full h-200 p-2">
        <div className="bg-white shadow-md rounded-lg">
          <div className="p-4">
            <h5 className="text-lg font-semibold mb-4">Monthly Sales Trend</h5>
            <ReactECharts option={salesOption} style={{ height: '300px', width: '100%' }} />
          </div>
        </div>
      </div>
    
      {/* Lead Distribution Pie Chart */}
      <div className="w-full h-200 p-2">
        <div className="bg-white shadow-md rounded-lg">
          <div className="p-4">
            <h5 className="text-lg font-semibold mb-4">Lead Distribution</h5>
            <ReactECharts option={leadOption} style={{ height: '300px', width: '100%' }} />
          </div>
        </div>
      </div>
    
      {/* Customer Satisfaction Bar Chart */}
      <div className="w-full p-2">
        <div className="bg-white shadow-md rounded-lg">
          <div className="p-4">
            <h5 className="text-lg font-semibold mb-4">Customer Satisfaction</h5>
            <ReactECharts option={satisfactionOption} style={{ height: '300px', width: '100%' }} />
          </div>
        </div>
      </div>
    
      {/* Revenue Streams Doughnut Chart */}
      <div className="w-full p-2">
        <div className="bg-white shadow-md rounded-lg">
          <div className="p-4">
            <h5 className="text-lg font-semibold mb-4">Revenue Streams</h5>
            <ReactECharts option={revenueOption} style={{ height: '300px', width: '100%' }} />
          </div>
        </div>
      </div>
    </>
  );
}

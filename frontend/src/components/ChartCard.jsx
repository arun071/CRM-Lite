import React from 'react';
import ReactECharts from 'echarts-for-react';

export default function ChartCard() {

  // Chart 1: Student Enrollment Line Chart
  const enrollmentOption = {
    // title: { text: 'Student Enrollment Trend' },
    xAxis: { 
      type: 'category', 
      data: ['2018', '2019', '2020', '2021', '2022', '2023'], 
    },
    yAxis: { type: 'value' },
    series: [{
      name: 'Enrollment',
      type: 'line',
      data: [500, 550, 600, 620, 700, 750],
      itemStyle: { color: '#4caf50' },
    }],
    tooltip: { trigger: 'axis' },
  };

  // Chart 2: Student Attendance Pie Chart
  const attendanceOption = {
    // title: { text: 'Class Attendance', subtext: 'Daily Attendance', left: 'center' },
    tooltip: { trigger: 'item' },
    series: [{
      name: 'Attendance',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 85, name: 'Present' },
        { value: 15, name: 'Absent' },
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

  // Chart 3: Subject Performance Bar Chart
  const performanceOption = {
    // title: { text: 'Average Marks Per Subject' },
    xAxis: {
      type: 'category',
      data: ['Math', 'Science', 'English', 'History', 'Art'],
    },
    yAxis: { type: 'value' },
    series: [{
      name: 'Marks',
      type: 'bar',
      data: [80, 90, 75, 85, 88],
      itemStyle: { color: 'rgba(255, 99, 132, 0.8)' },
    }],
    tooltip: { trigger: 'axis' },
  };

  // Chart 4: Fee Collection Doughnut Chart
  const feeOption = {
    // title: { text: 'Fee Collection', subtext: 'Yearly Distribution', left: 'center' },
    tooltip: { trigger: 'item' },
    series: [{
      name: 'Fee Collection',
      type: 'pie',
      radius: ['40%', '70%'],  // Doughnut shape
      data: [
        { value: 300000, name: 'Tuition' },
        { value: 50000, name: 'Library' },
        { value: 25000, name: 'Transport' },
        { value: 15000, name: 'Sports' },
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
    {/* Enrollment Trend Line Chart */}
    <div className="w-full h-200 p-2">
      <div className="bg-white shadow-md rounded-lg">
        <div className="p-4">
          <h5 className="text-lg font-semibold mb-4">Student Enrollment Trend</h5>
          <ReactECharts option={enrollmentOption} style={{ height: '300px', width: '100%' }} />
        </div>
      </div>
    </div>
  
    {/* Attendance Pie Chart */}
    <div className="w-full h-200 p-2">
      <div className="bg-white shadow-md rounded-lg">
        <div className="p-4">
          <h5 className="text-lg font-semibold mb-4">Class Attendance</h5>
          <ReactECharts option={attendanceOption} style={{ height: '300px', width: '100%' }} />
        </div>
      </div>
    </div>
  
    {/* Subject Performance Bar Chart */}
    <div className="w-full p-2">
      <div className="bg-white shadow-md rounded-lg">
        <div className="p-4">
          <h5 className="text-lg font-semibold mb-4">Average Marks Per Subject</h5>
          <ReactECharts option={performanceOption} style={{ height: '300px', width: '100%' }} />
        </div>
      </div>
    </div>
  
    {/* Fee Collection Doughnut Chart */}
    <div className="w-full p-2">
      <div className="bg-white shadow-md rounded-lg">
        <div className="p-4">
          <h5 className="text-lg font-semibold mb-4">Fee Collection Distribution</h5>
          <ReactECharts option={feeOption} style={{ height: '300px', width: '100%' }} />
        </div>
      </div>
    </div>
    </>
  
  );
}
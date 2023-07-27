import React, { useEffect } from 'react';

const LineChart = ({ data }) => {
  useEffect(() => {
    // Data
    const labels = Object.keys(data[0]).filter((key) => key !== 'updated');
    const datasets = Object.keys(data[0])
      .filter((key) => key !== 'updated')
      .map((key) => data[0][key]);

    // Create a line chart
    const ctx = document.getElementById('lineChart').getContext('2d');
    const lineChart = new window.Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Data',
            data: datasets,
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true, // Set to true to maintain aspect ratio
      },
    });
  }, [data]);

  return (
    <div>
      <h1>Line Chart Example</h1>
      <canvas id="lineChart" width="400" height="200"></canvas>
    </div>
  );
};

export default LineChart;
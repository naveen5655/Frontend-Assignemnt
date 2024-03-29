import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

const PopulationGraph = () => {
  const [populationData, setPopulationData] = useState(null);
  const [chartRendered, setChartRendered] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        setPopulationData(response.data.data);
      } catch (error) {
        console.error('Error fetching population data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Register required scales
    Chart.register({
      id: 'linear',
      type: 'linear',
    });

    Chart.register({
      id: 'category',
      type: 'category',
    });

    if (populationData && populationData.length > 0) {
      setChartRendered(true);
    }
  }, [populationData]);

  const renderGraph = () => {
    if (!populationData) return null;

    const nations = populationData.map(item => item.Nation);
    const populations = populationData.map(item => item.Population);

    const data = {
      labels: nations,
      datasets: [
        {
          label: 'Population',
          data: populations,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          type: 'linear',
          beginAtZero: true,
          title: {
            display: true,
            text: 'Population',
          },
        },
        x: {
          type: 'category',
          title: {
            display: true,
            text: 'Nation',
          },
        },
      },
    };

    return <Line data={data} options={options} />;
  };

  return (
    <div>
      <h2>Population Data</h2>
      <div style={{ height: '400px', width: '600px' }}>
        {chartRendered && renderGraph()}
      </div>
    </div>
  );
};

export default PopulationGraph;
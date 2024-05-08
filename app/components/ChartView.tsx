// components/DataChartView.js
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

interface DataChartViewProps {
    data: { name: string, value: string | number }[]
}

Chart.register(...registerables);

const DataChartView = ({ data }: DataChartViewProps) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null)
    const chart = chartRef.current
    useEffect(() => {
        let myChart: Chart<"bar", any[], string> | null

        if (chart) {
            const ctx = chart.getContext('2d');
            if (ctx) {
                myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: data.map(item => item.name),
                        datasets: [{
                            label: '# of Entries',
                            data: data.map(item => item.value),
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            }
        }
        return () => {
            if (myChart) {
                myChart.destroy();
            }
        };
    }, [data, chart]);

    return <canvas ref={chartRef} id="myChart" width="400" height="400"></canvas>;
};

export default DataChartView;

import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
const BarSeg=(props)=> {
   var {labels,data,question}=props
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [colorsGroup,setColorsGroup]=useState(['rgb(20, 220, 185)',
    'rgb(20, 200, 200)',
    'rgb(20, 150, 255)',
    'rgb(20, 220, 185)',
    'rgb(20, 200, 225)',
    'rgb(30, 175, 255)',
    'rgb(40, 160, 255)',
    'rgb(20, 180, 240)',
    'rgb(20, 150, 150)',
    'rgb(20, 160, 240)'


    ])
    const [borderColors,setBorderColors]=useState(['rgb(100, 255, 255)',
    // 'rgb(20, 200, 200)',
    // 'rgb(20, 150, 255)',
    // 'rgb(20, 220, 185)',
    // 'rgb(20, 200, 225)',
    // 'rgb(30, 175, 255)',
    // 'rgb(40, 160, 255)',
    // 'rgb(20, 180, 240)',
    // 'rgb(20, 150, 150)',
    // 'rgb(20, 160, 240)',
    'rgb(50, 80, 240)',
    'rgb(80, 160, 240)',
    'rgb(60, 60, 50)',
    'rgb(80, 75, 100)',
    'rgb(90, 180, 240)',
    'rgb(10, 20, 30)'
    ])


    const [borderWidthh,setBorderWidthh]=useState('1')

    let sum=0;
    let avg;
    data.map(value => (sum+=value));
    if(sum!=0){
    avg = 100/sum;}
    const transformedData = data.map(value => (value*avg));

    useEffect(() => {
        const data2 = {
            labels: labels,
            datasets: [
                {
                    label: question.body,
                    data: transformedData,
                    backgroundColor: colorsGroup,
                    borderColor:borderColors,
                    borderWidth: borderWidthh
                }
            ]
        };
        const options = {
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            let value = tooltipItem.raw;
                            return `${value.toFixed(0)}%`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        };

        setChartData(data2);
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
       <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}
export default BarSeg
        

import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

const Diagram=()=>{
const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [colorsGroup,setColorsGroup]=useState(['rgb(20, 220, 185)',
    'rgb(20, 200, 200)',
    'rgb(20, 150, 255)',
    // 'rgb(20, 220, 185)',
    // 'rgb(20, 200, 200)',
    // 'rgb(20, 150, 255)',
    // 'rgb(20, 160, 240)'

    ])
    const [borderColors,setBorderColors]=useState(['rgb(100, 255, 255)',
    // 'rgb(75, 192, 192)',
    // 'rgb(54, 162, 235)',
    // 'rgb(75, 192, 192)',
    // 'rgb(54, 162, 235)',
    // 'rgb(75, 192, 192)',
    // 'rgb(75, 180, 180)'
    ])
    const [label,setLabel]=useState(['1','2','3','4','5','6','7','8'])//הכנסת המשתנה (x) 
    const [dataa,setDataa]=useState(['450','600','804','12','1000','500','878','985'])//הכנסת הכמות (y)
    const [borderWidthh,setBorderWidthh]=useState('1')


    useEffect(() => {
        const data = {
            labels: label,
            datasets: [
                {
                    label: 'Sales',
                    data: dataa,
                    backgroundColor: colorsGroup,
                      borderColor:borderColors,
                      borderWidth: borderWidthh
                }
            ]
        };
        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <Chart type="bar" data={chartData} options={chartOptions} />
            <Chart type='pie' data={chartData} options={chartOptions}/>
            <Chart type="line" data={chartData} options={chartOptions} />

        </div>
    )
}
export default Diagram
        
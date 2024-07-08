import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
const LineSeg2=(props)=> {
   var {labels,data,question,i}=props
   console.log("hhhhhhhhhhhhhh");
   console.log(data);
   const arr = Object.entries(data).reduce((acc, [gender, count], index) => {
    acc[index] = count;
    return acc;
}, []);
const dataKeys = Object.keys(data);
    const label = dataKeys.map(key => key);

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [colorsGroup,setColorsGroup]=useState(['rgb(64, 224, 208)',   // Turquoise
    'rgb(0, 255, 255)',    // Cyan
    'rgb(0, 191, 255)',    // Deep Sky Blue
    'rgb(0, 0, 255)',      // Blue
    'rgb(75, 0, 130)',     // Indigo
    'rgb(148, 0, 211)',    // Dark Violet
    'rgb(238, 130, 238)',  // Violet
    'rgb(255, 20, 147)',   // Deep Pink
    'rgb(255, 0, 0)',      // Red
    'rgb(255, 165, 0)',    // Orange
    'rgb(255, 255, 0)',    // Yellow
    'rgb(0, 255, 0)',      // Lime
    'rgb(124, 252, 0)',    // Lawn Green
    'rgb(32, 178, 170)',   // Light Sea Green
    'rgb(72, 209, 204)',   // Medium Turquoise
    'rgb(30, 144, 255)',   // Dodger Blue
    'rgb(186, 85, 211)',   // Medium Orchid
    'rgb(147, 112, 219)',  // Medium Purple
    'rgb(240, 128, 128)',  // Light Coral
    'rgb(255, 140, 0)'     // Dark Orange

    ])
    const [borderColors,setBorderColors]=useState(['rgb(20, 220, 185)',
    


    ])

    
    const [borderWidthh,setBorderWidthh]=useState('1')

    useEffect(() => {
        let sum = 0;
        arr.forEach(value => (sum += value));
        let avg;
        if (sum !== 0) {
            avg = 100 / sum;
        }
    
        const transformedData = arr.map(value => value * avg);
    
        const data2 = {
            labels: label,
            datasets: [
                {
                    label:question.answers[i].body,
                    data: transformedData,
                    backgroundColor: colorsGroup,
                    borderColor: borderColors,
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
                            return value;
                        }
                    }
                }
            }
        };
    
        setChartData(data2);
        setChartOptions(options);
    }, [data, labels, question.body, colorsGroup, borderColors, borderWidthh]);  

    return (
        <>
    <div className="card">
    <Chart type="line" data={chartData} options={chartOptions} />
    </div>
      
      </>
    )
}
export default LineSeg2


/* datasets: [
        {
            label: 'My Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#42A5F5',
            tension: 0.4
        }
    ]
};

const chartOptions = {
    plugins: {
        tooltip: {
            callbacks: {
                label: function(tooltipItem) {
                    let value = tooltipItem.raw;
                    return `${value}%`;
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

function App() {
    return (
        <div>
            <Chart type="line" data={chartData} options={chartOptions} />
        </div>
    );
}

export default App;*/
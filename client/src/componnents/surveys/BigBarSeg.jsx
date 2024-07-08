
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

const BigBarSeg = (props)=>{
   const {labels,data,question,a}=props
   let c;
   if(a==='gender' || a==null &&question.segmentation.choose==='מגדר'){
    
    console.log("gen");
    c=["נקבה","זכר"]
   }
   else
   if(a==='age' || a==null && question.segmentation.choose==='גיל')
    {
        console.log("age");
        c=['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-120']
    }
   else c=['חרדי', 'חילוני', 'דתי לאומי', 'לא משתייך','מסורתי']
const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
const percent=(answer)=>{
    let sum = 0;
    Object.values(answer.sector).forEach(value => (sum += value));
        let avg;
        if (sum !== 0) {
            avg = 100 / sum;
        }
   
}
    useEffect(() => {
        
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

const colorsGroup = [
    // 'rgb(64, 224, 208)',   // Turquoise
     'rgb(0, 255, 255)',    // Cyan
    'rgb(0, 191, 255)',    // Deep Sky Blue
    // 'rgb(0, 0, 255)',      // Blue
    'rgb(75, 0, 130)',     // Indigo
    // 'rgb(148, 0, 211)',    // Dark Violet
    // 'rgb(238, 130, 238)',  // Violet
    'rgb(255, 20, 147)',   // Deep Pink
    'rgb(255, 0, 0)',      // Red
    // 'rgb(255, 165, 0)',    // Orange
    'rgb(255, 255, 0)',    // Yellow
    // 'rgb(0, 255, 0)',      // Lime
    'rgb(124, 252, 0)',    // Lawn Green
    'rgb(32, 178, 170)',   // Light Sea Green
    'rgb(72, 209, 204)',   // Medium Turquoise
    'rgb(30, 144, 255)',   // Dodger Blue
    'rgb(186, 85, 211)',   // Medium Orchid
    'rgb(147, 112, 219)',  // Medium Purple
    'rgb(240, 128, 128)',  // Light Coral
    'rgb(255, 140, 0)'     // Dark Orange
];

const datasets = {};
if(a==="gender" || a==null &&question.segmentation.choose==='מגדר'){
question.answers.forEach(answer => {
    Object.entries(answer.gender).forEach(([genderName, genderValue]) => {
        if (!datasets[genderName]) {
            datasets[genderName] = {
                label: genderName,
                data: [],
                backgroundColor: colorsGroup[Object.keys(datasets).length % colorsGroup.length],
                // backgroundColor: `hsl(${Object.keys(datasets).length * (360 / Object.keys(answer.sector).length)}, 70%, 50%)`,
            };
        }
        datasets[genderName].data.push(genderValue);
    });
});}
else
if(a==="age" || a==null && question.segmentation.choose==='גיל'){
    question.answers.forEach(answer => {
        Object.entries(answer.age).forEach(([ageName, ageValue]) => {
            if (!datasets[ageName]) {
                datasets[ageName] = {
                    label: ageName,
                    data: [],
                    backgroundColor: colorsGroup[Object.keys(datasets).length % colorsGroup.length],
                    // backgroundColor: `hsl(${Object.keys(datasets).length * (360 / Object.keys(answer.sector).length)}, 70%, 50%)`,
                };
            }
            datasets[ageName].data.push(ageValue);
        });
    });   
}
else{
    question.answers.forEach(answer => {
        Object.entries(answer.sector).forEach(([sectorName, sectorValue]) => {
            if (!datasets[sectorName]) {
                datasets[sectorName] = {
                    label: sectorName,
                    data: [],
                    backgroundColor: colorsGroup[Object.keys(datasets).length % colorsGroup.length],
                };
            }
            datasets[sectorName].data.push(sectorValue);
        });
    }); 
}

const data2 = {
    labels: labels,
    datasets: Object.values(datasets)
};
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                tooltips: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(tooltipItem) {
                            let value = tooltipItem.raw;
                            return `${value.toFixed(0)}%`;
                        }
                    }
                },
                legend: {
                    labels: {
                        color: textColor
                    }
                },
                
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    stacked: true,
                    ticks: {callback: function(value) {
                        return value;
                    },
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data2);
        setChartOptions(options);
    }, [a]);

    return (
        <div className="card">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}
export default BigBarSeg


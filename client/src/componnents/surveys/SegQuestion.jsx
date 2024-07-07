import React, { useRef, useState } from "react";
import { CascadeSelect } from 'primereact/cascadeselect';
import { Editor } from "primereact/editor";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import BarSeg from "./BarSeg";
import PieSeg from "./PieSeg";
import LineSeg from "./LineSeg";
import BigBarSeg from "./BigBarSeg";
import BigSeg from "./BigSeg";


const SegQuestion=(props)=>{
    let {selectWich,setSelectWich,select,setSelect,question,text,setText}=props
    
    const index=select.indexOf(select.find(q=>q._id==question._id))
    const chooseIndex=selectWich.indexOf(selectWich.find(qq=>qq._id==question._id))
    const indexForText=text.indexOf(text.find(q=>q._id==question._id))
    console.log("select,");
    console.log(select);
    console.log("selectWich,");
    console.log(selectWich);
    console.log(index);
    console.log(chooseIndex);
    console.log("question");
    console.log(question._id);
    const [bar, setBar] = useState(false);
    const [pie, setPie] = useState(false);
    const [line, setLine] = useState(false);
    const [bigBar, setBigBar] = useState(false);

   const labels=question.answers.map(a=>{return a.body})//שמות השאלות
   const data=question.answers.map(a=>a.count)//כמות העונים בכל פעם
   console.log("data");
   console.log(data);
 const Bar=()=>{
        setBar(true)
        setLine(false)
        setPie(false)
        setBigBar(false)
    }
    const Pie=()=>{
        setPie(true)
        setLine(false)
        setBar(false)
        setBigBar(false)
    }
    const Line=()=>{
        setLine(true)
        setBar(false)
        setPie(false)
        setBigBar(false)
    }
    const BigBar=()=>{
        setBigBar(true)
        setLine(false)
        setBar(false)
        setPie(false)
    }
    const segment=(kind)=>{
        kind=='גרף' || select[index].select.cname=='גרף'?Line():
        kind=='היסטוגרמה' || select[index].select.cname=='היסטוגרמה'?Bar():kind=='תרשים מקלות מורכב' ||select[index].select.cname=='תרשים מקלות מורכב'?BigBar():
        Pie() 
    }
    const [selectedCity, setSelectedCity] = useState(select[index].select?select[index].select:select?'תרשים עוגה':console.log('selectedCity'));
    const [selectedWichData, setSelectedWichData] = useState(selectWich[chooseIndex]?.choose?selectWich[chooseIndex]?.choose:selectWich?'כללי':'selectedFrame');
    console.log(selectWich);
    console.log(select);
console.log(chooseIndex);
    const countries = [
            {cname: 'תרשים עוגה', code: 'US-AU'},
            {cname: 'גרף', code: 'US-DA'},
            {cname: 'היסטוגרמה', code: 'US-HO'}, 
            {cname: 'תרשים מקלות מורכב', code: 'US-A'}
        ]
        
        const wichData = [
            {cname: 'מגזר', code: 'sector'},
            {cname: 'מגדר', code: 'gender'},
            {cname: 'גיל', code: 'age'}, 
            {cname: 'כללי', code: 'all'}
        ]    
    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                {option.states && <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
                /*className={`flag flag-${option.code.toLowerCase()}`}*/ style={{ width: '18px' }} />}
                {option.cname=='תרשים עוגה' && <i className="pi pi-chart-pie"/>}
                {option.cname=='תרשים מקלות מורכב' && <i className="pi pi-sliders-v"/>}
                {option.cname=='היסטוגרמה' && <i className="pi pi-chart-bar"/>}
                {option.cname=='גרף' && <i className="pi pi-chart-line"/>}
                <span>{option.cname || option.name}</span>
            </div>
        );
    }
    const withI=()=>{
        if(select)
        {
        if(select[index].select){
        let icon=''
        select[index].select=='תרשים עוגה'?icon="pi pi-chart-pie":select[index].select=='היסטוגרמה'?icon="pi pi-chart-bar":select[index].select=='תרשים מקלות מורכב'?icon="pi pi-sliders-v":icon="pi pi-chart-line";
        <div>
        {select[index].select && <i className={icon}/>}  
        </div>
    }}
    else
    return 'select'
}
const withII=()=>{
    if(selectWich)
    {
    if(selectWich[chooseIndex].choose){
    let icon=''
    selectWich[chooseIndex].choose=='מגדר'?icon="pi pi-chart-pie":selectWich[chooseIndex].choose=='מגזר'?icon="pi pi-chart-bar":icon="pi pi-sliders-v";
    <div>
    {selectWich[chooseIndex].choose && <i className={icon}/>}  
    </div>
}}
else
return 'selectWich'
}

    return (
        <>
        <Card header={<Divider layout='horizontal'/>} >
        <div style={{textAlign:'center'}}>
        <h3>{question.body}</h3></div>
        <div className="card flex justify-content-center">
            
            <CascadeSelect value={selectedCity} onChange={e=>{select[index].select=e.value;setSelectedCity(e.value.cname);setSelect(select);segment(e.value.cname)}} options={countries}  
                optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']} 
                className="w-full md:w-14rem" breakpoint="767px" placeholder={withI} itemTemplate={countryOptionTemplate} style={{ minWidth: '14rem' }} />
            <CascadeSelect value={selectedWichData} onChange={e=>{selectWich[chooseIndex].choose=e.value;setSelectedWichData(e.value.cname);setSelectWich(selectWich);segment(e.value.cname)}} options={wichData}  
                optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']} 
                className="w-full md:w-14rem" breakpoint="767px" placeholder={withII} itemTemplate={countryOptionTemplate} style={{ minWidth: '14rem' }} />
        </div>
        <div className="card">
        {bar&&<BigSeg labels={labels} data={data} question={question} a={selectWich[chooseIndex].choose.code} line={"bar"}/>}
        {pie&&<BigSeg labels={labels} data={data} question={question} a={selectWich[chooseIndex].choose.code} line={"pie"}/>}
        {line&&<BigSeg labels={labels} data={data} question={question} a={selectWich[chooseIndex].choose.code} line={"line"}/>}
        {bigBar &&<BigBarSeg labels={labels} data={data} question={question} a={selectWich[chooseIndex].choose.code}/>}
       <br/><br/> <Editor value={text[indexForText].text} onTextChange={(e) => {text[indexForText].text=e.htmlValue; setText(text);}} style={{ height: '120px' }} />
        </div>
        <br/><br/><br/><br/>
        </Card>
        <br/></>

    )

}
export default SegQuestion




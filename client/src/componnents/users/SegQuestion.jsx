
import React, { useRef, useState } from 'react';
import BarSeg from '../surveys/BarSeg';
import PieSeg from '../surveys/PieSeg';
import LineSeg from '../surveys/LineSeg';
import { Editor } from 'primereact/editor';
import { InputTextarea } from "primereact/inputtextarea";
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import BigBarSeg from '../surveys/BigBarSeg';
import BigSeg from '../surveys/BigSeg';




const SegQuestion=(props)=> {
const {refetch,question,survey}=props
const [bar, setBar] = useState(question.segmentation.kind=='היסטוגרמה');
    const [pie, setPie] = useState(question.segmentation.kind=='תרשים עוגה');
    const [line, setLine] = useState(question.segmentation.kind=='גרף');
    const [bigBar, setBigBar] = useState(question.segmentation.kind=='תרשים מקלות מורכב');

    const labels=question.answers.map(a=>{return a.body})
    const data=question.answers.map(a=>a.count)
    const frag = document.createRange().createContextualFragment(question.segmentation.note);
    // const frag=document.write(question.segmentation.note)

    return (
        <>
        <div className="card" style={{textAlign:'center'}}>
        <h3 style={{textAlign:'center'}}>{question.body} </h3>

        {bar&&<BigSeg labels={labels}data={data}question={question} line={"bar"}/>}
            {pie&&<BigSeg labels={labels}data={data}question={question} line={"pie"}/>}
            {line&&<BigSeg labels={labels}data={data}question={question} line={"line"}/>}
            {bigBar&&<BigBarSeg labels={labels}data2={data}question={question}/>}

            
            <div className="card flex justify-content-center">

            
        </div>
           
                
                <p className="m-0">
                    {/* {question.segmentation.note&&
                <Editor readOnly value={question.segmentation.note} style={{ height: '120px' }} />} */}
{/* <div className="card flex justify-content-center"> */}
{question.segmentation.note&&
     <Panel  style={{textAlign:'center'}} header={'בסתר הסקר'}>       
    <div
    dangerouslySetInnerHTML={{
        __html:question.segmentation.note 
}}></div></Panel>}
            
        {/* </div> */}

              </p>
                
                    
        </div></>
    )
}
export default SegQuestion

/*import React from 'react'; 

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputTextarea disabled rows={5} cols={30} value="Disabled" />
        </div>
    )
}
*/



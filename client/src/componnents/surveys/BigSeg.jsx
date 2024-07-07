// import { Card } from "primereact/card";
// import BarSeg from "./BarSeg";
// import LineSeg from "./LineSeg";
// import PieSeg from "./PieSeg";
// import { Divider } from "primereact/divider";

// const BigSeg=(props)=> {
//     var {labels,data,question,s,a,line,bar,pie,bigBar}=props
// let ds;
// if(line==="line"){
//    if(a==="gender"){
//     ds=question.answers.map(a=>a.gender)
//     {ds.map((sector, index) => (
        
//         <LineSeg key={index} labels={labels} data={sector} question={question}  a={a} />
//     ))}
//    }
//    else
//    if(a==="sector"){
//     ds=question.answers.map(a=>a.sector)
//     {ds.map((sector, index) => (
        
//         <LineSeg key={index} labels={labels} data={sector} question={question}  a={a} />
//     ))}
// }
//     else
//     if(a==="age")
//         {
//             ds=question.answers.map(a=>a.age)
//             {ds.map((sector, index) => (
                
//                 <LineSeg key={index} labels={labels} data={sector} question={question} a={a} />
//             ))}  
//         }
//     else{
//         <LineSeg labels={labels} data={data} question={question}a={a} />

//     }
// }
// else
//     if(line==="bar"){
//         if(a==="gender"){
//          ds=question.answers.map(a=>a.gender)
//          {ds.map((sector, index) => (
             
//              <BarSeg key={index} labels={labels} data={sector} question={question} a={a} />
//          ))}
//         }
//         else
//         if(a==="sector"){
//          ds=question.answers.map(a=>a.sector)
//          {ds.map((sector, index) => (
             
//              <BarSeg key={index} labels={labels} data={sector} question={question} a={a} />
//          ))}
//      }
//      else
//      if(a==="age")
//          {
//              ds=question.answers.map(a=>a.age)
//              {ds.map((sector, index) => (
                 
//                  <BarSeg key={index} labels={labels} data={sector} question={question} a={a} />
//              ))}  
//          }
//          else{
//              <BarSeg labels={labels} data={data} question={question}  a={a} />
     
//          }
//      }
// else
//     if(line==="pie"){
//     if(a==="gender"){
//      ds=question.answers.map(a=>a.gender)
//      {ds.map((sector, index) => (
         
//          <PieSeg key={index} labels={labels} data={sector} question={question} a={a} />
//      ))}
//     }
//     else
//     if(a==="sector"){
//      ds=question.answers.map(a=>a.sector)
//      {ds.map((sector, index) => (
         
//          <PieSeg key={index} labels={labels} data={sector} question={question}  a={a} />
//      ))}
//  }
//  else
//  if(a==="age")
//      {
//          ds=question.answers.map(a=>a.age)
//          {ds.map((sector, index) => (
             
//              <PieSeg key={index} labels={labels} data={sector} question={question} a={a} />
//          ))}  
//      }
//      else{
//          <PieSeg labels={labels} data={data} question={question} a={a} />
 
//      }
//  }
 
 
//     return (
//     <>
//         <Card header={<Divider layout='horizontal'/>} />
//        </>

//     )
// }
// export default BigSeg
import { Card } from "primereact/card";
import BarSeg from "./BarSeg";
import LineSeg from "./LineSeg";
import PieSeg from "./PieSeg";
import { Divider } from "primereact/divider";
import LineSeg2 from "./LineSeg2";
import PieSeg2 from "./PieSeg2";
import BarSeg2 from "./BarSeg2";

const BigSeg = (props) => {
    const {labels, data, question, s, a, line} = props;

    let ds=[];

    if (line === "line" || line === "bar" || line === "pie") {
        if (a === "gender" || a === "sector" || a === "age" || a==null &&question.segmentation.choose==='גיל' || a==null &&question.segmentation.choose==='מגזר' || a==null &&question.segmentation.choose==='מגדר') {
            if (a === "gender" || a==null &&question.segmentation.choose==='מגדר') {
                ds = question.answers.map(a => a.gender);
            } else if (a === "sector"  || a==null &&question.segmentation.choose==='מגזר') {
                ds = question.answers.map(a => a.sector);
            } else if (a === "age"  || a==null &&question.segmentation.choose==='גיל') {
                ds = question.answers.map(a => a.age);
            }
let i=0;
            return (
                <Card header={<Divider layout='horizontal'/>}>
                  
                    {ds.map((sector, index) => {
                        return line === "line" ? (
                            <LineSeg2 labels={labels} data={sector} question={question} a={a} i={i++}/>
                        ) : line === "bar" ? (
                            <BarSeg2 labels={labels} data={sector} question={question} a={a} i={i++}/>
                        ) : (
                            <PieSeg2 labels={labels} data={sector} question={question} a={a} i={i++}/>
                        );
                    })}
                </Card>
            );
        } else {
            // Default case when a is not "gender", "sector", or "age"
            return line === "line" ? (
                <LineSeg labels={labels} data={data} question={question} a={a} />
            ) : line === "bar" ? (
                <BarSeg labels={labels} data={data} question={question} a={a} />
            ) : (
                <PieSeg labels={labels} data={data} question={question} a={a} />
            );
        }
    } else {
        // Default case when line is not "line", "bar", or "pie"
        return null;
    }
};

export default BigSeg;
import {useState} from "react"
import axios from "axios"
import "./App.css"
export default function App(){
  const [preg,setpreg]=useState(0);
  const [glucose,setglucose]=useState(0);
  const [bloodpressure,setbloodpressure]=useState(0);
  const [skinthickness,setskinthickness]=useState(0);
  const [insulin,setinsulin]=useState(0);
  const [bmi,setbmi]=useState(0);
  const [age,setage]=useState(0);
  const [display,setdisplay]=useState(0);  
  const [res,setres]=useState(0);
  async function submit(){
    if(preg===0 || glucose===0 || bloodpressure===0 || skinthickness===0 ||insulin===0 ||bmi===0 ||age===0 ){
      alert("Fill All Values")
      
    }
    else{
        const data={
        preg:preg,
        glucose:glucose,
        bloodpressure:bloodpressure,
        skinthickness:skinthickness,
        insulin:insulin,
        bmi:bmi,
        age:age
      }
      const result=await axios.post("http://localhost:8000/api/posts/predict",data);
      if(result.data.prediction === 0){
        setres(0);
      }
      else{
        setres(1);
      }
      setdisplay(1);
    }
    
  }
  function close(){
    setdisplay(0);
  }
  return(<>
    <div className="main">
      
      {display==0 &&(<div className="sub"> 
        <h1 className="heading">DIABETES CALCULATOR</h1>
          <h1 className="in">Pregnancies : <input type="number" className="inp" onChange={(e)=>setpreg(e.target.value)}/></h1> 
          <h1 className="in">Glucose Level : <input type="number" className="inp" onChange={(e)=>setglucose(e.target.value)}/></h1>
          <h1 className="in">Blood Preassure Level : <input type="number" className="inp" onChange={(e)=>setbloodpressure(e.target.value)}/></h1>
          <h1 className="in">Skin Thickness : <input type="number" className="inp" onChange={(e)=>setskinthickness(e.target.value)}/></h1>
          <h1 className="in">Insulin Level : <input type="number" className="inp" onChange={(e)=>setinsulin(e.target.value)}/></h1>
          <h1 className="in">Body Mass Index : <input type="number" className="inp" onChange={(e)=>setbmi(e.target.value)}/></h1>
          <h1 className="in">Age : <input type="number" className="inp" onChange={(e)=>setage(e.target.value)}/></h1>
          <div className="last"><button className="submit" type="submit" onClick={submit}>Submit</button></div>
      </div>)}
      {display==1 && (<div className="sub">
          {res==1 &&(
            <h1 className="result">DIABETES FOUND</h1>
          )}
          {res==0&&(
            <h1 className="result">DIABETES NOT FOUND</h1>
          )}
          <div className="last"><button className="submit" type="submit" onClick={close}>Close</button></div>
          <h1 className="desc">Consult Medical Profession</h1>
      </div>)}

    </div>  
  </>);
}
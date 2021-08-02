import { useEffect, useState } from "react";
function App2()
 {

  const [rcolor,setRcolor]=useState('')
  const [nrcolor,setNrcolor]=useState('')
  var [counter,setCounter]=useState(-1)

  useEffect(()=>{setCounter(isColor(nrcolor) ? counter+1 :counter);},[nrcolor]);
  
  function isColor(strColor) {
    var s = new Option().style;
    s.color = strColor;
    return s.color == strColor;
  }

return(
<div>
  <input type="text" value={rcolor} onChange={(e)=>setRcolor(e.target.value)}  />
  <button onClick={(e)=>setNrcolor(rcolor)} >apply color</button>
  
  <div className ="colored-div" style = {{backgroundColor: nrcolor}} ></div>
  <div> 
    
  {counter}</div>
  </div>


);

 }
 export default App2;
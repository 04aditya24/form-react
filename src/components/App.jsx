import React,{useState} from "react";


function App() {

  const [click,update]=useState("Hello");
  const [isMouseOver,setmouseover]=useState(false);
  // const [isMouseOut,setmouseout]=useState(false);

  function clicked(){
   update("Submmited")  
  } 
 
  function MouseOver() {
          setmouseover(true);
    
  }
  
    function MouseOut(){
      setmouseover(false);
}
  


return (
    <div className="container">
      <h1>{click}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor:isMouseOver ? "red" :"white"}} 
      onClick={clicked}
       onMouseOver={MouseOver}
       onMouseOut={ MouseOut}>Submit
       </button>
    </div>
  );
}
export default App;

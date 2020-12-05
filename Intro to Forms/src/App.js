import React from 'react';

const {useState}=React;
const App = () => {
   
   let [headText,changeHeadText]=useState("");
   let [text,changeText]=useState("");
   
   const addName=()=>{
      changeHeadText(text);
   };
   
   const changeInput=(event)=>{
      changeText(event.target.value);
   };
   
   return(
      <div className="page">
         <div className="box">
            <h1>Hello {headText}</h1>
            <input type="text"
                   placeholder="Enter Your Name Here"
                   onChange={changeInput}
                   value={text}
                   />
            <button onClick={addName}>
               Submit
            </button>
         </div>
      </div>
   );
}

export default App;
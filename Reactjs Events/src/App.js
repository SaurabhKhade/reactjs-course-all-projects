import React from 'react';
import Box from './Box';

 const {useState}=React;
 
const App=()=>{
   
   let [text,changeText]=useState("Hello Friend!");
   let [bgc,changeBgc]=useState("rgb(220,255,145)");
   
   const mouseOver=()=>{
      changeText("Hey! You are in My Area!");
      changeBgc("rgb(255,121,121)");
   };
   
   const mouseLeave=()=>{
      changeText("Don't step in inside my area!");
      changeBgc("rgb(220,255,145)");
   };
   
   return(
      <Box bgc={bgc} text={text}
      mouseOver={mouseOver}
      mouseLeave={mouseLeave}/>  
   );
}

export default App;
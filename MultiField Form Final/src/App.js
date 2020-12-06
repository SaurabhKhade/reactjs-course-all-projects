import React from 'react';
import Form,{formObj} from './Form';
import Info from './Info';
const {useState} = React;

const App = () => {
   
   let [infoDetails,infoUpd]=useState({
      name:"",
      email:"",
      phone:"",
      msg:"",
      display:"none"
   });
   
   const submitHandler=(event)=>{
      event.preventDefault();
      infoUpd({
         name:formObj.name,
         email:formObj.email,
         phone:formObj.phone,
         msg:formObj.msg,
         display:"block"
      });
   };

   return(
      <div className="box">
      <h1>Enter Your Details here</h1>
      <Form submitHandler={submitHandler}/>
      <Info infoDetails={infoDetails}/>
      </div>
   );
};

export default App;
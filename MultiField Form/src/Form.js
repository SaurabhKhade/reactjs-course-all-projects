import React from 'react';
   
const {useState} = React;

let formObj={};

const Form = (props) =>{

   let [formDetails,formUpd]=useState({
      name:"",
      email:"",
      phone:"",
      msg:""
   });
   
   const eventHandler=(event)=>{
      let name=event.target.name;
      let val=event.target.value;
      
      formUpd((oldData)=>{
         if (name==="name") {
            return{
               name:val,
               email:oldData.email,
               phone:oldData.phone,
               msg:oldData.msg
            };
         } else if (name==="email") {
            return{
               name:oldData.name,
               email:val,
               phone:oldData.phone,
               msg:oldData.msg
            };
         } else if (name==="number") {
            return{
               name:oldData.name,
               email:oldData.email,
               phone:val,
               msg:oldData.msg
            };
         } else{
            return{
               name:oldData.name,
               email:oldData.email,
               phone:oldData.phone,
               msg:val
            };
         }
      });
      formObj=formDetails;
   };
   
   return(
      <form onSubmit={props.submitHandler}>
         <input type="text"
                value={formDetails.name}
                onChange={eventHandler}
                name="name"
                autoComplete="off"
                placeholder="Enter your full name"/>
         <input type="email"
                value={formDetails.email}
                onChange={eventHandler}
                name="email"
                autoComplete="off"
                placeholder="Enter your Email"/>
         <input type="number"
                value={formDetails.phone}
                onChange={eventHandler}
                name="number"
                autoComplete="off"
                placeholder="Enter your phone number"/>
         <input type="text"
                value={formDetails.msg}
                onChange={eventHandler}
                name="msg"
                autoComplete="off"
                placeholder="Enter your Message"/>
         <button type="submit">Submit</button>
      </form>
   );
};

export default Form;
export {formObj};
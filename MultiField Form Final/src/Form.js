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
         oldData[name]=val;
         return{...oldData};
      });
      
      //this is also valid that using spread operator to spread the oldData into new object and then updating a property with square bracket syntax.
      // formUpd((oldData)=>{
      //    return{
      //       ...oldData,
      //       [name]=val;
      //    }
      // });
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
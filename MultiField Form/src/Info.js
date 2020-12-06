import React from 'react';

const Info = (props) =>{
   
  let {infoDetails}=props;
  
  return(
      <div className="info-box"
           style={{display:infoDetails.display}} >
         <p>Your Name is {infoDetails.name}</p>
         <hr/>
         <p>Your Email is {infoDetails.email}</p>
         <hr/>
         <p>Your Phone Number is {infoDetails.phone}</p>
         <hr/>
         <p>Your Message for me is {infoDetails.msg}</p>
      </div>
   );
};

export default Info;
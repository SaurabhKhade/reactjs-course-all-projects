import React from 'react';

const Box=(props)=>{
   let {bgc, text, mouseOver, mouseLeave} = props;
   return(
      <div  className="page"
            style={{backgroundColor:bgc}}>
         <div className="main-box">
            <h1
               onMouseOver={mouseOver}
               onMouseLeave={mouseLeave}>
               {text}
            </h1>
         </div>
      </div>
   );
};


export default Box;
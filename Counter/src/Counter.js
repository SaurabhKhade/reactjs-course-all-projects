import React from 'react';

const Counter=(props)=>{
    
    let {count,incr,dcr}=props;
    
    return(
        <div className="page">
            <div className="box">
                <div></div>
                <div className="counter">
                    <h1>{count}</h1>
                </div>
                <div className="buttons">
                    <button className="btn"
                            onClick={incr}>
                        Incr
                    </button>
                    <button className="btn"
                            onClick={dcr}>
                        Dcr
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
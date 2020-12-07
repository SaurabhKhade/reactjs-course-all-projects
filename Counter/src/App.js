import React from 'react';
import Counter from './Counter';

const {useState} = React;

const App = () => {
    let [count,setCount]=useState(0);
    
    const incr=()=>{
        setCount(count+1);
    }
    
    const dcr=()=>{
        if (count===0) {
            alert('Minimum limit reached');
        } else {
            setCount(count-1);
        }
    }
    
    return (
        <Counter count={count}
                 incr={incr}
                 dcr={dcr} />
    );
}

export default App;
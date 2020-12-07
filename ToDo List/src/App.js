import React from 'react';
import MainCode from './MainCode';

const {useState} = React;

const App = () => {
    let [newItem,addNewItem]=useState("");
    
    const newItemHandler=(event)=>{
        addNewItem(event.target.value);
    };
    
    let [itemsList,updItemsList]=useState([]);
    
    const itemRemover=(event)=>{
        updItemsList((oldList)=>{
            return oldList.filter(item => item !== event.target.id);
        });
    };
    
    const itemsProvider=(val)=>{
        return(
            <li>
                <button className="btn-small"
                        onClick={itemRemover}
                        id={val}>
                    X
                </button>
                {val}
            </li>
        );
    };
    
    const itemAdder=()=>{
        if (newItem==='') {
            return;
        } else if (itemsList.includes(newItem)){
            alert('item already in a list!');
            return;
        }
        updItemsList((oldArr)=>{
            return [newItem.trim(),...oldArr];
        });
        addNewItem('');
    };
    
    return(
        <MainCode newItem={newItem}
                  newItemHandler={newItemHandler}
                  itemsList={itemsList}
                  itemsProvider={itemsProvider}
                  itemAdder={itemAdder}/>
    );
}

export default App;
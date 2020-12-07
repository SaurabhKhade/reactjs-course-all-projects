import React from 'react';

const MainCode=(props)=>{
    let {newItem,newItemHandler,itemsList,itemsProvider,itemAdder}=props;
    return(
        <div className="page">
            <div className="mobile">
                <h1> ToDo List </h1>
                <div className="addItem">
                    <input type="text"
                           placeholder="Add Item"
                           value={newItem}
                           onChange={newItemHandler}/>
                    <button className="btn"
                            onClick={itemAdder}>
                        +
                    </button>
                </div>
                <hr />
                <div className="items">
                    <ol>
                        {itemsList.map(itemsProvider)}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default MainCode;
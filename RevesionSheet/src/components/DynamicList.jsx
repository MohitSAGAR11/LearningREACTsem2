import React , {useState} from 'react';

function DynamicList() {
    const [items , setItems] = useState([]);
    const [itemInput , setItemInput] = useState("");

    const addItem = () => {
        if(itemInput.trim() !== ""){
            setItems([...items , itemInput]);
            setItemInput("");
        }
    }

    return (
        <>
        <input
            type="text"
            placeholder='Enter an item'
            value={itemInput}
            onChange={(e) => setItemInput(e.target.value)} />
            <button onClick={addItem}> add Item </button>
            <ul>
                {itemInput.map((item,index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default DynamicList;
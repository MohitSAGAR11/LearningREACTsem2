import React, { use } from "react";
import { useState , useEffect } from "react";


function GetData() {
    const[data, setData] = useState(null);
    const[count, setCount] = useState(0);
    const[id , setId] = useState(1);

    function increament(){
        setCount(count + 1);
    }

    function decreament(){
        setCount(count - 1);
    }

    function getData() {
        async function fetchData(){
            const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const user = await data.json();
            console.log(user);
            setData(user);
            setId(user.id);
        }

        fetchData();
    }

   useEffect(getData, [id]);
    return(
        <>
        {data == null ? <h1>Loading...</h1> : <h1>{data.name}</h1>}
        {/* <button onClick = {increament}>Increment</button>
        <h1>{count}</h1>
        <button onClick = {decreament}>Decreament</button> */}

        <button onClick ={() => { if(id == 10){setId(1)}else {setId(id + 1)} }}>Change ID</button>
        <h1>{id}</h1>
        </>
    )
}

export default GetData;
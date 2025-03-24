import React , {useState} from 'react';

function ToggleVisibility(){
    const[visible , setVisible] = useState(true);

    return (
        <div>
            <button onClick = {() => setVisible(!visible)}>
                {visible ? 'Hide' : 'Show'}
            </button>
            {visible && <h1>Now you see me!</h1>}
        </div>
    )
}

export default ToggleVisibility;
import React , {useState} from 'react';

function ToggleText(){
    const [visible , setVisible] = useState(true);

    const toggleText = () => {
        setVisible(!visible);
    }

    return (
        <div>
            <button onClick={toggleText}> Toggle </button>
            {visible && <p>Visible</p>}
        </div>
    )
}

export default ToggleText;
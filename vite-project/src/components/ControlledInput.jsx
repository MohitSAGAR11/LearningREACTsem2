import React , {useState} from 'react';

function ControlledInput() {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={handleChange}
                placeholder='Enter your text here'
            />
            <p>You typed: {input}</p>
        </div>
    );
}

export default ControlledInput;


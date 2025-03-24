import React ,{useState} from 'react';

function FormReset() {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');

    const resetForm = () => {
        setName('');
        setEmail('');
    };

    return (
        <div>
            <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <input
            type='text'
            placeholder='E-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <buttom onClick={resetForm}> Reset </buttom>
            <div>
                <p>Name: {name}</p>
                <p>E-mail: {email}</p>
            </div>
        </div>

    )
}

export default FormReset;
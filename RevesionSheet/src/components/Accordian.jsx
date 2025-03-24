import React , {useState} from 'react';

function Accordian() {
    const [open , setOpen] = useState(false);

    const toggleAccordian = () => {
        setOpen(!open);
    };

    return (
        <div>
            <button onClick={toggleAccordian}>Toggle</button>
            {open && <p>Accordian Content Here</p>}
        </div>
    )
}

export default Accordian;
import React , {useState} from 'react';

function SearchFilter() {
    const [search , setSearch] = useState("");
    const items = ["Apple" , "Banana" , "Mango" , "Pineapple" , "Grapes"];

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const filteredItems = items.filter((item) => 
        item.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <input 
            type="text"
            placeholder='Search'
            value={search}
            onChange={handleSearch}
            />

            <ul>
                {filteredItems.map((item,index) => {
                    <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default SearchFilter;
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Kurs ara..."
            />
            <button onClick={handleSearch}>Ara</button>
        </div>
    );
}

export default SearchBar; 
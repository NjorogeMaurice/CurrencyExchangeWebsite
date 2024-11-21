import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const   SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const searchTerm = new URLSearchParams(location.hash.substring(1)).get('search');
        if (searchTerm) {
            setQuery(searchTerm);
            onSearch(searchTerm);
        }
    }, [location]);

    const handleSearch = (e) => {
        const term = e.target.value;
        setQuery(term);
        onSearch(term);
        navigate(`#search=${term}`);
    };

    return (
        <div style={{
            position: 'sticky',
            top: 0,
            background: '#ffffff',
            zIndex: 1000,
            padding: '15px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '12px',
            margin: '10px 0',
            maxWidth: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
        }}>
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search currencies..."
                style={{
                    width: '95%',
                    padding: '12px 20px',
                    fontSize: '16px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    outline: 'none',
                    backgroundColor: '#f9f9f9',
                    transition: '0.3s',
                    color: '#333',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
                onFocus={(e) => {
                    e.target.style.borderColor = '#007bff'; // Blue border on focus
                    e.target.style.backgroundColor = '#fff'; // Change background on focus
                }}
                onBlur={(e) => {
                    e.target.style.borderColor = '#ddd'; // Revert border color when focus is lost
                    e.target.style.backgroundColor = '#f9f9f9'; // Revert background color
                }}
            />
        </div>

    );
};

export default SearchBar;

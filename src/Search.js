import React from 'react';

export function Search() {
    const [search, setSearch] = React.useState('');
    const [autocomplete, setAutocomplete] = React.useState([]);

    React.useEffect(() => {
        fetch("https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "d0b7b29ca4msh94b90b80a5d55eap1e5c0bjsn8b5eddae1715",
                "x-rapidapi-host": "tasty.p.rapidapi.com"
            }
        })
        .then((response) => response.json()).then((list) => {
            setAutocomplete(list);
        });
    }, []);

    return (
        <>
            <input type="text" onChange={event => (
                setSearch(event.target.value);
                
            )} />
        </>
    );
}
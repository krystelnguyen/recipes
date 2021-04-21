import React from 'react';
import { Link } from 'react-router-dom'

export function Recipes() {
    const [recipes, setRecipes] = React.useState([]);
    const [search, setSearch] = React.useState('');

    const handleInput = event => {
        setSearch(event.target.value);
    }

    const handleSearch = () => {
        fetch("https://tasty.p.rapidapi.com/recipes/list?from=0&q="+ search, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "d0b7b29ca4msh94b90b80a5d55eap1e5c0bjsn8b5eddae1715",
                "x-rapidapi-host": "tasty.p.rapidapi.com"
            }
        })
        .then((response) => response.json()).then((recipes) => {
            setRecipes(recipes.results);
        });
    }

    React.useEffect(() => {
        fetch("https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "d0b7b29ca4msh94b90b80a5d55eap1e5c0bjsn8b5eddae1715",
                "x-rapidapi-host": "tasty.p.rapidapi.com"
            }
        })
        .then((response) => response.json()).then((recipes) => {
            setRecipes(recipes.results);
        });
    }, []);


    return (
        <>
            <div class="search"><input type="text" placeholder="Search..." onChange={(event) => handleInput(event)} /> <button onClick={handleSearch}>OK</button></div>
            {recipes ?
                <>
                {recipes.length > 0 ?
                    <div class='recipes'>
                        {recipes.map((recipe) => 
                            <div class='recipe' key={recipe.id}>
                                <Link to={"/details/" + recipe.id}>
                                    <img src={recipe.thumbnail_url} alt={recipe.name} title={recipe.name}/>
                                    <h2>{recipe.name}</h2>
                                </Link>
                            </div>
                        )}
                    </div>
                : <p>Loading recipes...</p> }
                </>
            :<p>No recipes found.</p>}
            
        </>
    );
}
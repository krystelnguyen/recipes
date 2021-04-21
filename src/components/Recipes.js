import React from 'react';
import { Link } from 'react-router-dom'

import { Search } from './Search';

export function Recipes() {
    const [recipes, setRecipes] = React.useState([]);
    const [search, setSearch] = React.useState('');

    const handleSearch = event => {
        setSearch(event.target.value);
        fetch("https://tasty.p.rapidapi.com/recipes/list?size=20&name=*"+ search.replace(" ", "%20")+"*", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "d0b7b29ca4msh94b90b80a5d55eap1e5c0bjsn8b5eddae1715",
                "x-rapidapi-host": "tasty.p.rapidapi.com"
            }
        })
        .then((response) => response.json()).then((recipes) => {
            setRecipes(recipes.results);
        });

        console.log(recipes);
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
            <input type="text" placeholder="Search..." onChange={(event) => handleSearch(event)} />
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
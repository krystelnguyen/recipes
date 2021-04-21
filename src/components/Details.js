import React from 'react';
import { AnimateSharedLayout } from "framer-motion";

import { Navbar } from './Navbar';

export function Details(props) {
    const [recipe, setRecipe] = React.useState([]);

    //Get id of recipe
    const { id } = props.match.params;

    React.useEffect(() => {
        fetch("https://tasty.p.rapidapi.com/recipes/detail?id=" + id, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "d0b7b29ca4msh94b90b80a5d55eap1e5c0bjsn8b5eddae1715",
                "x-rapidapi-host": "tasty.p.rapidapi.com"
            }
        })
        .then((response) => response.json()).then((recipe) => {
            setRecipe(recipe);
            console.log(recipe);
        });
    }, []);

    return (
        <>
            <Navbar/>
            {recipe.instructions ?
                <div>
                    <h1>{recipe.name}</h1>
                    <div class="container">
                        <p>{recipe.description}</p>
                        <h2>Instructions</h2>
                        <ol>
                            {recipe.instructions.map((instruction) => <li>{instruction.display_text}</li>)}
                        </ol>
                    </div>
                </div>
            : <p>Loading recipe...</p> }
        </>
    );
}
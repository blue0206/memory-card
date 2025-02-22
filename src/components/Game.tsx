import { ReactElement, useState, useEffect } from "react";
import { Mode } from "../types";
import { GameCard as PokemonCard } from "../interfaces";
import { GameCard } from ".";

type GameProps = {
    mode: string;
    score: number;
}

export default function Game({ 
    mode, 
    score 
}: GameProps): ReactElement {
    const [cards, setCards] = useState<PokemonCard[]>([]);
    
    // Fetch images on mode change.
    useEffect(() => {
        const pokemon: readonly string[] = [
            "greninja", "pikachu", "charizard", "lucario",
            "bulbasaur", "gengar", "snorlax", "ditto",
            "mewtwo", "rayquaza", "sceptile", "squirtle",
            "charmander", "vulpix", "metagross", "dragonite"
        ];
        setCards([]);
        if (mode === Mode.easy) {
            pokemon.forEach(name => {
                fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
                .then(res => res.json())
                .then(data => {
                    const newPokemon = {
                        src: data.sprites.front_default,
                        name: data.name
                    }
                    console.log(newPokemon);
                    setCards(prevCards => [...prevCards, newPokemon]);
                })
                .catch(err => console.log(err));
            });
        } else {
            fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
            .then(res => res.json())
            .then(data => {
                for (let i=0; i<16; i++) {
                    const newPokemon = {
                        src: data.sprites.front_default,
                        name: data.name
                    }
                    console.log(newPokemon);
                    setCards(prevCards => [...prevCards, newPokemon]);
                }
            })
            .catch(err => console.log(err));
        }
    }, [mode]);

    // Shuffle cards on score change.
    useEffect(() => {
        setCards(prevCards => {
            return prevCards.map(value => ({value, sort: Math.random()}))
                            .sort((a, b) => a.sort - b.sort)
                            .map(({value}) => value);
        })
    }, [score]);

    return (
        <div>
            {
                cards.length > 0 && cards.map(card => {
                    return (
                        <GameCard />
                    );
                })
            }
        </div>
    )
}
import { ReactElement, useState, useEffect } from "react";
import styles from "../styles/game.module.css"
import { Mode } from "../types";
import { GameCard as PokemonCard } from "../interfaces";
import { GameCard } from ".";
import { v4 as uuidv4 } from "uuid";

type GameProps = {
    mode: string;
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    highScore: number;
    setHighScore: React.Dispatch<React.SetStateAction<number>>;
}

export default function Game({ 
    mode, 
    score,
    setScore,
    highScore,
    setHighScore
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
                    const newPokemon: PokemonCard = {
                        id: uuidv4(),
                        src: data.sprites.front_default,
                        name: data.name,
                        clicked: false
                    }
                    setCards(prevCards => [...prevCards, newPokemon]);
                })
                .catch(err => console.log(err));
            });
        } else {
            fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
            .then(res => res.json())
            .then(data => {
                for (let i=0; i<16; i++) {
                    const newPokemon: PokemonCard = {
                        id: uuidv4(),
                        src: data.sprites.front_default,
                        name: data.name,
                        clicked: false
                    }
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

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        const card = cards.find(card => card.id === e.currentTarget.id);
        if (card) {
            if (card.clicked) {
                setScore(0);
                cards.forEach(card => card.clicked = false);
            } else {
                card.clicked = true;
                setScore(score + 1);
                if (score+1 > highScore) {
                    setHighScore(score+1);
                }
            }
        }
    }

    return (
        <div className={styles.game}>
            {
                cards.length > 0 && cards.map(card => {
                    return (
                        <GameCard 
                            key={card.id} 
                            id={card.id} 
                            src={card.src} 
                            name={card.name} 
                            onClick={handleClick}
                        />
                    );
                })
            }
        </div>
    )
}
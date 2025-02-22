import { ReactElement, useState, useEffect } from "react";
import { GameCard as PokemonCard } from "../interfaces";

type GameProps = {
    mode: string;
    score: number;
}

export default function Game({ 
    mode, 
    score 
}: GameProps): ReactElement {
    const [cards, setCards] = useState<PokemonCard[]>([]);

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
        </div>
    )
}
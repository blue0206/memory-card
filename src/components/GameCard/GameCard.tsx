import { ReactElement } from "react";

type GameCardProps = {
    src: string;
    name: string;
}

export default function GameCard({ src, name }: GameCardProps): ReactElement {
    return (
        <div>
            <div>
                <img src={src} alt={`An image of ${name}`} />
            </div>
            <div>{name}</div>
        </div>
    )
}
import { ReactElement } from "react";
import { Button } from "../";

type GameCardProps = {
    id: string;
    src: string;
    name: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function GameCard(props: GameCardProps): ReactElement {
    return (
        <Button
            id={props.id} 
            onClick={props.onClick}
        >
            <div>
                <img src={props.src} alt={`An image of ${props.name}`} />
            </div>
            <div>{props.name}</div>
        </Button>
    )
}
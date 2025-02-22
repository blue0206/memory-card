import { ReactElement } from "react";
import styles from "../../styles/gamecard.module.css";
import { Button } from "../";

type GameCardProps = {
    id: string;
    src: string;
    name: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function toTitleCase(name: string) {
    return name[0].toUpperCase() + name.slice(1);
}

export default function GameCard(props: GameCardProps): ReactElement {
    return (
        <Button
            className={styles.gamecard}
            id={props.id} 
            onClick={props.onClick}
        >
            <div>
                <img className={styles.image} src={props.src} alt={`An image of ${props.name}`} />
            </div>
            <div>{toTitleCase(props.name)}</div>
        </Button>
    )
}
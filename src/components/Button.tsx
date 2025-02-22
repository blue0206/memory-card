import { ReactElement } from 'react';

type ButtonProps = {
    children: ReactElement | ReactElement[] | string;
    type?: "submit" | "reset" | "button";
    className?: string;
    id?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
    type="button",
    ...props
}: ButtonProps): ReactElement {
    return (
        <button
            type={type} 
            className={props.className} 
            id={props.id} 
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}
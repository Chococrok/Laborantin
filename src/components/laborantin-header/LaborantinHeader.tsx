import * as React from "react";
import * as style from "./LaborantinHeader.css";

type Props = {
    visibility: string;
}
export function LaborantinHeader(props: Props): JSX.Element {
    return (
        <header className={style.appHeader}>
            <h1 className={style.appTitle}>Laborantin</h1>
            <p className={style.appIntro}>
                Welcome to the Gitlab managing tool. You are currently seeing {props.visibility} projects.
            </p>
        </header>
    );
}

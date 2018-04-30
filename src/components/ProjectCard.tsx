import * as React from "react";
import { Project } from "../models";
import "./ProjectCard.css";




export function ProjectCard(props: {project: Project, key: number}): JSX.Element {
    return <div>
        <h2>{props.project.name}</h2>
        <p>{props.project.description}</p>
    </div>
}
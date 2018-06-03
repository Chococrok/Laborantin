import * as React from "react";
import { ProjectCard } from "..";
import { Project } from "../../models";
import { projectGrid } from "./ProjectGrid.css";

type Props = {
    projects: Project[];
    onClick: (event: any) => void;
}

export function ProjectGrid(props: Props): JSX.Element {
    return (
        <section className={projectGrid} >
            {props.projects.map((project, index) =>
            <ProjectCard key={index} project={project} onClick={props.onClick}/>)}
        </section>
    );
}

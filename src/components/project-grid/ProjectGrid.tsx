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
        <div className={projectGrid} >
            {props.projects.map((project, index) =>
            <ProjectCard key={index} project={project} onClick={(id) => props.onClick(id)}/>)}
        </div>
    );
}

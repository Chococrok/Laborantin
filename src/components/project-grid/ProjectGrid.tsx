import * as React from "react";
import { ProjectCard } from "..";
import { Project } from "../../models";
import { projectGrid } from "./ProjectGrid.css";

export function ProjectGrid(props: { projects: Project[] }): JSX.Element {
    return (
        <div className={projectGrid}>
            {props.projects.map((project, index) => <ProjectCard key={index} project={project} />)}
        </div>
    );
}

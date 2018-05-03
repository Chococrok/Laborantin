import * as React from "react";
import { ProjectCard } from "..";
import { Project } from "../../models";
import "./ProjectGrid.css";

export function ProjectGrid(props: { projects: Project[] }): JSX.Element {
    return (
        <div className="project-grid">
            {props.projects.map((project, index) => <ProjectCard key={index} project={project} />)}
        </div>
    );
}

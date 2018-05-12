import { Card, CardHeader } from "material-ui";
import * as React from "react";
import { Project } from "../../models";
import { projectCard } from "./ProjectCard.css";

export function ProjectCard(props: { project: Project, key: number }): JSX.Element {
    return (
        <Card raised={true} className={projectCard}>
            <CardHeader
                title={props.project.name}
                subheader={props.project.description || "No description provided. :("}
            />
        </Card>
    );
}

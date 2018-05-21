import { Card, CardHeader } from "material-ui";
import * as React from "react";
import { Project } from "../../models";
import { projectCard } from "./ProjectCard.css";

type Props = {
    project: Project;
    key: number;
    onClick: (id: number) => void;
}
export function ProjectCard(props: Props): JSX.Element {
    return (
        <Card raised={true} className={projectCard}>
            <CardHeader
                title={props.project.name}
                subheader={props.project.description || "No description provided. :("}
                onClick={(id) => props.onClick(props.project.id)}
            />
        </Card>
    );
}

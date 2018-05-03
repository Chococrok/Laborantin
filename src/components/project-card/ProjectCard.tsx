import { Card, CardHeader, withStyles } from "material-ui";
import * as React from "react";
import { Project } from "../../models";
import "./ProjectCard.css";

export function ProjectCard(props: { project: Project, key: number }): JSX.Element {
    return (
        <Card raised={true}>
            <CardHeader
                title={props.project.name}
                subheader={props.project.description}
            />
        </Card>
    );
}

import * as React from "react";
import * as style from "./App.css";
import {
    ControlMenu,
    ProjectGrid,
    LaborantinHeader
} from "./components";
import { Project, Visibility } from "./models";
import GitLabService from "./services/gitlab-service";

type state = {
    projects: Project[];
    visibility: Visibility;
};

class App extends React.Component<any, state> {

    public constructor(props: any) {
        super(props);
        this.state = {
            projects: [],
            visibility: Visibility.ALL
        };

        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
        this.handleTokenChange = this.handleTokenChange.bind(this);
    }

    public async componentDidMount(): Promise<void> {
        const projects = await GitLabService.getProjects();
        this.setState({ projects });
    }

    private async handleVisibilityChange(visibility: Visibility) {
        console.log("changing visibility")
        const projects = await GitLabService.getProjects(visibility);

        this.setState({
            projects,
            visibility
        });
    }

    private handleTokenChange(value: string) {
        GitLabService.setToken(value);
        this.refresh();
    }

    private async handleProjectChosen(id: number) {
        const res = await GitLabService.getBranches(id);
        console.log(res);
    }

    private async refresh() {
        const projects = await GitLabService.getProjects(this.state.visibility);
        const visibility = this.state.visibility;
        this.setState({
            visibility,
            projects
        });
    }

    public render(): JSX.Element {
        return (
            <div className={style.app}>
                <LaborantinHeader visibility={this.state.visibility} />
                <div className={style.appContent}>
                    <ControlMenu
                        onTokenValidation={this.handleTokenChange}
                        onVisibilityChange={this.handleVisibilityChange} />
                    <ProjectGrid projects={this.state.projects} onClick={this.handleProjectChosen} />
                </div>
            </div>
        );
    }
}

export default App;

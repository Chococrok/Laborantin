import * as React from "react";
import * as style from "./App.css";
import {
    ControlMenu,
    ProjectGrid
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
                <header className={style.appHeader}>
                    <h1 className={style.appTitle}>Laborantin</h1>
                    <p className={style.appIntro}>
                        Welcome to the Gitlab managing tool.
                        {this.state.visibility}
                    </p>
                </header>
                <div className={style.appContent}>
                    <section>
                        <ControlMenu
                            onTokenValidation={this.handleTokenChange}
                            onVisibilityChange={this.handleVisibilityChange} />
                    </section>
                    <section>
                        <ProjectGrid projects={this.state.projects} />
                    </section>
                </div>
            </div>
        );
    }
}

export default App;

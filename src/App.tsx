import * as React from "react";
import * as style from "./App.css";
import {
    ControlMenu,
    ProjectGrid
} from "./components";
import { Project, Visibility } from "./models";
import GitLabService from "./services/git-lab-service";

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
    }

    public async componentDidMount(): Promise<void> {
        const projects = await GitLabService.getProjects();
        this.setState({ projects });
    }

    private handleVisibilityChange(event: any) {
        this.setState({visibility: event.target.value});
        console.log(event.target.value);
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
                        <ControlMenu onChange={this.handleVisibilityChange}/>
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

import * as React from "react";
import * as style from "./App.css";
import { ProjectGrid } from "./components";
import { Project } from "./models";
import GitLabService from "./services/GitLabService";

type state = {
  projects: Project[];
};

class App extends React.Component<any, state> {
  public constructor(props: any) {
    super(props);
    this.state = { projects: [] };
  }

  public async componentDidMount(): Promise<void> {
    const projects = await GitLabService.getProjects();
    this.setState({ projects });
  }

  public render(): JSX.Element {
    return (
      <div className={style.app}>
        <header className={style.appHeader}>
          <h1 className={style.appTitle}>Welcome to React</h1>
        </header>
        <p className={style.appIntro}>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ProjectGrid projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;

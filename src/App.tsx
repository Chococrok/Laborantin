import * as React from "react";
import "./App.css";
import { ProjectCard } from "./components/ProjectCard";
import GitLabService from "./services/GitLabService"

import logo from "./logo.svg";
import { Project } from "./models";

type state = {
  projects: Project[];
}

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
  const projects = this.state.projects.map((project, index) => <ProjectCard key={index} project={project}/>);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        {projects}
      </div>
    );
  }
}

export default App;

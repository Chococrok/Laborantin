import Axios from "axios";
import * as React from "react";
import "./App.css";
import { Mtwoi } from "./components/mtwoi";
import GitLabService from "./services/GitLabService"

import logo from "./logo.svg";

type state = {
  mtwois: any[];
}

class App extends React.Component<any, state> {
  public constructor(props: any) {
    super(props);
    this.state = { mtwois: [] };
  }

  public async componentDidMount(): Promise<void> {
    const res = await Axios.get(`http://corvus:4000/rest/midstream-simulator/mtwois`);
    const projects = await GitLabService.getProjects();
    // const commits = await GitLabService.getCommits(projects[0].id, "toto");
    // console.log(commits);
    const branches = await GitLabService.getBranches(projects[0].id);
    console.log(JSON.stringify(branches));
    console.log(JSON.stringify(projects, undefined, 2));
    this.setState({ mtwois: res.data });
  }

  public render(): JSX.Element {
  const mtwoiItems = this.state.mtwois.map((mtwoi, index) => <Mtwoi key={index} mtwoi={mtwoi}/>);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        {mtwoiItems}
      </div>
    );
  }
}

export default App;

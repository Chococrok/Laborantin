import Axios from "axios";
import { Project, Visibility } from "../models";

class GitLabService {
    private readonly baseUrl: string = "http://gitlab.com/api/v4";

    private token: string;
    private projectCache: Project[][];

    public constructor(token?: string) {
        if (token) this.setToken(token);
        this.projectCache = [];
        Axios.defaults.baseURL = this.baseUrl;
    }

    public setToken(token: string) {
        this.token = token;
        Axios.defaults.headers["Private-Token"] = this.token;
        this.resetCache();
    }

    public async getProjects(visibility: Visibility = Visibility.ALL): Promise<any> {
        console.log("getting projects")
        Axios.defaults.params = visibility.toUpperCase() === Visibility.ALL
            ? ""
            : { visibility: visibility.toLowerCase() };

        const url = "/projects";

        let data;
        switch (visibility) {
            case Visibility.ALL:
                data = this.projectCache[0] || (this.projectCache[0] = (await Axios.get(url)).data);
                break;
            case Visibility.PUBLIC:
                data = this.projectCache[1] || (this.projectCache[1] = (await Axios.get(url)).data);
                break;
            case Visibility.INTERNAL:
                data = this.projectCache[2] || (this.projectCache[2] = (await Axios.get(url)).data);
                break;
            case Visibility.PRIVATE:
                data = this.projectCache[3] || (this.projectCache[3] = (await Axios.get(url)).data);
                break;
            default:
                data = this.projectCache[0] || (this.projectCache[0] = (await Axios.get(url)).data);
                break;
        }

        return data;
    }

    public async getBranches(projectId: number): Promise<any> {
        const res = await Axios.get(`${this.baseUrl}/projects/${projectId}/repository/branches`);
        return res.data;
    }

    public async getCommits(projectId: number, brancheName: string): Promise<any> {
        const res = await Axios.get(`${this.baseUrl}/${projectId}/${brancheName}`);
        return res.data;
    }

    private resetCache() {
        this.projectCache = [];
    }
}

export default new GitLabService();

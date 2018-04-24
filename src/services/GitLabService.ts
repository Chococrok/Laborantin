import Axios from "axios";


class GitLabService {
    private readonly baseUrl: string = "http://flute:8181/api/v4/";
    
    public async getProjects(): Promise<any>{
        const res = await Axios.get(`${this.baseUrl}/projects`);
        return  res.data;
    }


}

export default new GitLabService();
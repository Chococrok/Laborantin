import { Temperature } from "./Temperature";
type C = {
    temperature: Temperature;
};
export type Project = C & {
    id: number;
    name: string;
    description: string;
};

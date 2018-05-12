import { Temperature } from "./lab-enums";
type C = {
    temperature: Temperature;
};
export type Project = C & {
    id: number;
    name: string;
    description: string;
};

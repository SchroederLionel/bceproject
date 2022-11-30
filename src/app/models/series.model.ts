import { Image } from "./show.model";

export interface Series {
    id: number;
    url: string;
    name: string;
    season: number;
    number: number;
    type: string;
    airdate: string;
    airtime: string;
    runtime: number;
    image: Image;
    summary: string;
}

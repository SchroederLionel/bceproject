export interface Rating {
    average: number;
}
 export interface Image {
    medium: string;
    original: string;
}

export interface Country {
   name: string;
   code: string;
   timezone: string;
}
export interface Schedule {
    time: string;
    days: string[];
}
export interface Network {
    id: number;
    name: string;
    country: Country;
    officialSite?: string;
}
export interface Show {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    averageRuntime: number;
    premiered: string;
    ended: string;
    officialSite: string;
    schedule: Schedule;
    rating: Rating;
    weight: number;
    network: Network;
    image: Image;
    summary: string;
    updated: number;
}
export interface Country {
    name: string;
    code: string;
    timezone: string;
}

export interface Image {
    medium: string;
    original: string;
}

export interface Person {
    id: number;
    url: string;
    name: string;
    country: Country;
    birthday: string;
    deathday?: any;
    gender: string;
    image: Image;
}


export interface Character {
    id: number;
    url: string;
    name: string;
}

export interface CastMember {
    person: Person;
    character: Character;
    voice: boolean;
}
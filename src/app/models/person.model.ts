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

export interface Image2 {
    medium: string;
    original: string;
}




export interface Character {
    id: number;
    url: string;
    name: string;
    image: Image2;
}

export interface RootObject {
    person: Person;
    character: Character;
    voice: boolean;
}
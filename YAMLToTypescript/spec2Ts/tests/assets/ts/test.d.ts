export interface FindPetsHeaders {
    "X-Header"?: string;
}

export interface FindPetsQuery {
    tags?: string[];
    limit?: number;
}

export type FindPetsResponse = Pet[];

export type FindPetsResponseDefault = Error;

export type AddPetBody = NewPet;

export type AddPetResponse = Pet;

export type AddPetResponseDefault = Error;

export interface FindPetByIdParams {
    id: number;
}

export type FindPetByIdResponse = Pet;

export type FindPetByIdResponseDefault = Error;

export interface DeletePetParams {
    id: number;
}

export type DeletePetResponseDefault = Error;

export interface NewPet {
    name: string;
    tag?: string;
}

export interface Pet extends NewPet {
    id: number;
}

export interface Error {
    code: number;
    message: string;
}
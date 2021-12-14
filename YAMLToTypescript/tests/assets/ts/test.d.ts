export interface ListPetsQuery {
    limit?: number;
}

export type ListPetsResponse = Pets;

export type ListPetsResponseDefault = Error;

export type CreatePetsResponseDefault = Error;

export interface ShowPetByIdParams {
    petId: string;
}

export type ShowPetByIdResponse = Pet;

export type ShowPetByIdResponseDefault = Error;

export interface Pet {
    id: number;
    name: string;
    tag?: string;
}

export type Pets = Pet[];

export interface Error {
    code: number;
    message: string;
}
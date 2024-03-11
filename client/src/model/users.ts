import data from '@/data/users.json';
export interface root{
    if: number;
    firsrName: string;  
    Lastname : string;'
    maidenName: string;
    age: number;
    email: string;
    pgone: string;
    password: string;
    birthdate: string;
    image: string;
    address: string;
}

export interface Address  {
    address: String;
    city: string;
    coordinates:{
        lat: number;
        lng: number;
    }
    postalCode: string;
    state: string;
}

export function getUsers(): User[] {
    return data.items;
}
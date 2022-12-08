export interface Auth {
    user: User;
    token: string;
}


export interface User {
    _id: string,
    username: string,
    email: string,
    password: string,
}
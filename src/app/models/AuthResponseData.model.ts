export interface AuthResponseData{
    password: string;
    localId: string;
    email: string;
    idToken: string;
    expiresIn: string;
    refreshToken: string;
    registered: boolean;
}
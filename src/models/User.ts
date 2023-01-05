import { Role } from "./Role";

export interface User {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    role: Role,
    permissions: string[]
}
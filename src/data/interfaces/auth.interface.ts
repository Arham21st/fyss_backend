import { Role } from "@prisma/client";

export interface AuthUser {
    id: string;
    name: string;
    email: string;
    role: Role | string;
}

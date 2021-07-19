export interface User {
    _id?: string,
    name: string,
    matric_no: string,
    department: string,
    email?: string,
    yoe?: string,
    moe?: string,
    password?: string,
    image?: string,
    created_on: Date,
    is_active: boolean
}
export interface Lecturer {
    _id?: string,
    name: string,
    rank: string,
    staff_no: string,
    department: string,
    email: string,
    password?: string,
    image?: string,
    created_on: Date,
    is_active: boolean,
    __v?: any
}
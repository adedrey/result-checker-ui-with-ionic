export interface Complaint {
    _id?: string,
    case_type: string[],
    title: string,
    body: string,
    updatedAt?: Date,
    matric_no?: string,
    status: boolean
} 
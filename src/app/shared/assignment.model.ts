export interface Assignment {
    _id?: string,
    department: string
    course_code: string,
    staff_no?: string,
    question: string,
    submission_date: Date,
    updatedAt?: Date,
    assignments?: {
        users: [
            {
                userId: any,
                attachment: string
            }
        ]
    }
    __v?: any
}
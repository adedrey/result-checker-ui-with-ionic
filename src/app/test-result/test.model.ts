export interface Test {
    session?: string,
    semester?: string,
    data?: [{
        course_code?: string,
        title?: String,
        unit?: number,
        status?: string,
        result_type?: string
        result?: {
            _id?: string,
            matric_no?: string,
            score?: number,
            updatedAt?: Date
        }
    }],
    upload_date?: Date,
    __v?: any
}
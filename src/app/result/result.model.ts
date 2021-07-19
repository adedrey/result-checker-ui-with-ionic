export interface Result {
    session?: string,
    semester?: string,
    data?: [{
        course_code?: string,
        title?: String,
        unit?: number,
        status?: string,
        result?: {
            _id?: string,
            matric_no?: string,
            ca?: number,
            exam?: number,
            total?: number,
            point?: number,
            grade?: string,
            updatedAt?: Date,
        }
    }],
    totalCreditPoints?: number,
    totalUnits?: number,
    ctnu?: number,
    ctcp?: number,
    ctnup?: number,
    __v?: any
}
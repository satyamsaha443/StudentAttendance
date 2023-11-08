
    export interface IStudent{
        id?: number,
        studentName: string,
        studentEmail: string,
        phoneNumber: string,
        regNo: string
    }

    export interface IAttendance{
        id?: number,
        studentId: number,
         date: Date,
        present: string
    }

export interface IchartData
{
    name:string,
    value:number
}
export interface Student{
    id:number,
    firsName: string,
    lastName: string,
    age: number,
    class:number,
    saganebi: object[]
}

export interface Qula{
  saxeli:string,
  qula: number,
}


export enum LessCoefficient {
  Coefficient=1,
  Coefficient2,
  Coefficient3,
  Coefficient4,
  Coefficient5,
  Coefficient6,
  Coefficient7,
  Coefficient8,
  Coefficient9,
  Coefficient10,
}

export interface newTaecher{
    id:number,
    saxeli: string,
    gvari: string,
    asaki: number,
    meili: string,
    sagani: any[],
    klasebi:{ studentList : Object[]; studentNumber : Number};
}
export interface newSubject{
  Subject : string
}

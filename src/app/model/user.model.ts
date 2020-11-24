export interface User {
  username: string;
  password: string;
  name: string;
  position?: string;
  patientType?: string;
  symptoms?: string;
  centreId?:string;
}

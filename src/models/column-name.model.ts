export interface UserData {
  id: string;
  name: string;
  email: string;
  gender: string;
  options: string[],
  active: boolean
  }

  export interface filterFields{
    nameFilter: string;
    emailFilter: string;
    genderFilter:string;
    activeFilter: string;
}